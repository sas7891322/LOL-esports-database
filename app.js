const DB = window.ESPORTS_DATA;
let state = { league: 'LPL', view: 'teams', team: null };
const main = document.getElementById('main');
const leagueNav = document.getElementById('leagueNav');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const search = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');

const esc = (s='') => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const pct = (wins, games) => games ? Math.round((wins / games) * 1000) / 10 : 0;
const league = id => DB.leagues.find(x => x.id === id);
const team = id => DB.teams.find(x => x.id === id);
const champCount = t => t.players.reduce((n,p)=>n+p.champions.length,0);
const playerCount = () => DB.teams.reduce((n,t)=>n+t.players.length,0);

function renderLeagueNav(){
  leagueNav.innerHTML = DB.leagues.map(l => `
    <button class="league-btn ${state.league===l.id?'active':''}" data-league="${l.id}">
      <span class="league-code">${l.id}</span><span class="league-region">${l.region}</span>${l.status!=='active'?'<span class="league-soon">SOON</span>':''}
    </button>`).join('');
  leagueNav.querySelectorAll('[data-league]').forEach(btn=>btn.addEventListener('click',()=>{
    state.league=btn.dataset.league; state.team=null; state.view='teams'; render(); renderLeagueNav(); syncSideActions();
  }));
}

function headerHTML(l){
  return `<section class="hero">
    <div><div class="eyebrow">${esc(l.region)} · ${esc(l.id)} · ${esc(DB.meta.patch)}</div>
      <h1>${l.id==='LPL'?'中國職業聯賽資料庫':'全球職業賽資料庫'}</h1>
      <p>${l.status==='active'?'以每一局原始比賽為底層，自動聚合戰隊、選手、英雄出場與勝率。英雄名稱統一使用台灣伺服器繁體中文。':'網站架構已預留此賽區。完成 LPL 26.14 後可直接接入，不需改版面。'}</p>
    </div>
    <div class="filterbar">
      <select class="selectbox"><option>${DB.meta.season}</option></select>
      <select class="selectbox"><option>${DB.meta.split}</option></select>
      <select class="selectbox"><option>${DB.meta.patch}</option></select>
    </div>
  </section>`;
}

function renderHome(){
  const l = league(state.league);
  if(l.status!=='active'){
    main.innerHTML = headerHTML(l)+`<div class="empty-state"><div class="big-code">${l.id}</div><h2>${l.name}</h2><p>${l.region}賽區已經放進全球架構，目前先完成 LPL 26.14；之後只要加入這個聯賽的原始比賽資料，就能自動生成相同的戰隊與選手頁。</p></div>`;
    return;
  }
  const loadedTeams=DB.teams.filter(t=>t.players.some(p=>p.champions.length)).length;
  const totalGames=DB.matches.reduce((n,m)=>n+m.scoreA+m.scoreB,0);
  main.innerHTML = headerHTML(l)+`
    <section class="stats-grid">
      <div class="stat-card"><small>聯賽戰隊</small><strong>${DB.teams.length}</strong><span>2026 Split 3</span></div>
      <div class="stat-card"><small>已建檔系列</small><strong>${DB.matches.length}</strong><span>完成 BO3 後寫入</span></div>
      <div class="stat-card"><small>已記錄小局</small><strong>${totalGames}</strong><span>Patch ${DB.meta.patch}</span></div>
      <div class="stat-card"><small>已有英雄資料</small><strong>${loadedTeams}/${DB.teams.length}</strong><span>${playerCount()} 名名單選手</span></div>
    </section>
    <section class="section-head"><h2>LPL 戰隊</h2><span>點選戰隊查看選手與版本英雄池</span></section>
    <section class="team-grid">${DB.teams.map(t=>teamCard(t)).join('')}</section>
    <div class="source-note">資料原型快照：${DB.meta.updated} · ${DB.meta.note}</div>`;
  main.querySelectorAll('[data-team]').forEach(card=>card.addEventListener('click',()=>{state.team=card.dataset.team;renderTeam();}));
}

function teamCard(t){
  const hasData=champCount(t)>0;
  const logoStyle = t.logo ? `style="--team-logo: url('${esc(t.logo)}')"` : '';
  return `<article class="team-card ${hasData?'':'empty'}" data-team="${t.id}" ${logoStyle}>
    <div class="team-card-bg" aria-hidden="true"></div>
    <h3>${esc(t.name)}</h3><p>${hasData?`${t.players.length} 名選手 · ${champCount(t)} 筆英雄紀錄`:'26.14 尚未完成系列'}</p>
    <div class="team-record"><span><strong>${t.series.w}-${t.series.l}</strong>系列</span><span><strong>${t.games.w}-${t.games.l}</strong>小局</span></div>
    <span class="group-chip">${t.group}</span></article>`;
}

function renderTeam(){
  const t=team(state.team); if(!t){renderHome();return}
  main.innerHTML=`
    <div class="backline"><button class="back-btn" id="backBtn">← 返回 LPL</button><span class="pill">${DB.meta.patch} · ${t.group}</span></div>
    <section class="team-hero"><div class="team-logo-lg">${t.id}</div><div><div class="eyebrow">LPL · ${DB.meta.season} ${DB.meta.split}</div><h1>${esc(t.name)}</h1><p>${t.players.length} 名名單選手 · ${champCount(t)} 筆英雄紀錄</p></div><div class="record-big"><strong>${t.series.w}-${t.series.l}</strong><small>系列戰績 · 小局 ${t.games.w}-${t.games.l}</small></div></section>
    <section class="section-head"><h2>選手英雄池</h2><span>點選選手查看完整英雄勝率</span></section>
    <section class="roster-grid">${t.players.map(p=>playerCard(t,p)).join('')}</section>
    <div class="accent-line"></div>
    <section class="section-head"><h2>版本資料摘要</h2><span>Patch ${DB.meta.patch}</span></section>
    <section class="stats-grid">
      <div class="stat-card"><small>系列勝率</small><strong>${pct(t.series.w,t.series.w+t.series.l)}%</strong><span>${t.series.w+t.series.l || 0} 個系列</span></div>
      <div class="stat-card"><small>小局勝率</small><strong>${pct(t.games.w,t.games.w+t.games.l)}%</strong><span>${t.games.w+t.games.l || 0} 局</span></div>
      <div class="stat-card"><small>英雄紀錄</small><strong>${champCount(t)}</strong><span>選手 × 英雄</span></div>
      <div class="stat-card"><small>資料狀態</small><strong>${champCount(t)?'LIVE':'WAIT'}</strong><span>${champCount(t)?'已接入 26.14':'等待首個完賽系列'}</span></div>
    </section>`;
  document.getElementById('backBtn').addEventListener('click',()=>{state.team=null;renderHome()});
  main.querySelectorAll('[data-player]').forEach(el=>el.addEventListener('click',()=>openPlayer(t.id,el.dataset.player)));
}

function playerCard(t,p){
  const games=p.champions.reduce((n,c)=>n+c.games,0); const wins=p.champions.reduce((n,c)=>n+c.wins,0);
  return `<article class="player-card" data-player="${esc(p.id)}"><span class="role">${p.role}</span><h3>${esc(p.id)}</h3><p>${p.champions.length?`${p.champions.length} 隻英雄 · ${games} 次選用 · ${pct(wins,games)}% 勝率`:'26.14 尚未有出賽資料'}</p><div class="mini-champs">${p.champions.slice(0,4).map(c=>`<span class="mini-champ">${esc(c.name)}</span>`).join('')}${p.champions.length>4?`<span class="mini-champ">+${p.champions.length-4}</span>`:''}</div></article>`;
}

function openPlayer(teamId,playerId){
  const t=team(teamId); const p=t.players.find(x=>x.id===playerId); if(!p)return;
  const sorted=[...p.champions].sort((a,b)=>b.games-a.games||b.wins-a.wins);
  modalBody.innerHTML=`<div class="modal-kicker">${t.id} · ${p.role} · PATCH ${DB.meta.patch}</div><h2>${esc(p.id)}</h2><div class="modal-sub">${esc(t.name)} · 台灣伺服器英雄名稱</div>
    ${sorted.length?`<table class="champ-table"><thead><tr><th>英雄</th><th>出場</th><th>勝敗</th><th>勝率</th></tr></thead><tbody>${sorted.map(c=>{const rate=pct(c.wins,c.games);return `<tr><td><span class="champ-name"><span class="champ-dot">${esc(c.name.slice(0,1))}</span>${esc(c.name)}</span></td><td>${c.games}</td><td>${c.wins}-${c.games-c.wins}</td><td class="winrate ${rate>=60?'good':rate<=40?'bad':''}">${rate}%</td></tr>`}).join('')}</tbody></table>`:`<div class="empty-state" style="padding:32px"><h2>尚未有 26.14 英雄資料</h2><p>完成第一個 BO3 後再寫入，不使用舊版本資料補值。</p></div>`}`;
  showModal();
}

function renderMatches(){
  const l=league(state.league);
  if(l.status!=='active'){renderHome();return}
  main.innerHTML=headerHTML(l)+`<section class="section-head"><h2>原始系列賽</h2><span>聚合統計的底層來源</span></section><div class="match-list">${DB.matches.map(m=>`<div class="match-row"><span class="match-date">${m.date}</span><span class="match-team">${m.a}</span><span class="score">${m.scoreA} : ${m.scoreB}</span><span class="match-team right">${m.b}</span><span class="patch">${m.patch}</span></div>`).join('')}</div><div class="source-note">正式版會把每一局 Game 的 10 名選手、英雄、勝負、藍紅方與版本拆成原始紀錄；目前原型先用系列層展示資料流。</div>`;
}

function openCompare(){
  const opts=DB.teams.map(t=>`<option value="${t.id}">${t.id} · ${esc(t.name)}</option>`).join('');
  modalBody.innerHTML=`<div class="modal-kicker">MATCHUP LAB</div><h2>戰隊比較</h2><div class="modal-sub">第一版先比較 26.14 系列、小局與英雄資料量。</div><div class="compare-grid"><div class="compare-side"><select class="selectbox" id="cmpA">${opts}</select><div id="cmpAData"></div></div><div class="compare-vs">VS</div><div class="compare-side"><select class="selectbox" id="cmpB">${opts}</select><div id="cmpBData"></div></div></div>`;
  showModal(); const a=document.getElementById('cmpA'),b=document.getElementById('cmpB'); b.selectedIndex=3;
  const update=()=>{document.getElementById('cmpAData').innerHTML=compareSide(team(a.value));document.getElementById('cmpBData').innerHTML=compareSide(team(b.value));};
  a.addEventListener('change',update);b.addEventListener('change',update);update();
}
function compareSide(t){return `<h3>${t.id}</h3><p style="color:var(--muted);font-size:11px;margin-top:0">${esc(t.name)}</p><div class="compare-metric"><span>系列</span><strong>${t.series.w}-${t.series.l}</strong></div><div class="compare-metric"><span>小局</span><strong>${t.games.w}-${t.games.l}</strong></div><div class="compare-metric"><span>小局勝率</span><strong>${pct(t.games.w,t.games.w+t.games.l)}%</strong></div><div class="compare-metric"><span>英雄紀錄</span><strong>${champCount(t)}</strong></div>`}

function setupSearch(){
  const all=[]; DB.teams.forEach(t=>{all.push({type:'戰隊',label:t.id,sub:t.name,action:()=>{state.league='LPL';state.team=t.id;renderLeagueNav();renderTeam();}});t.players.forEach(p=>{all.push({type:p.role,label:p.id,sub:`${t.id} · ${t.name}`,action:()=>{state.league='LPL';state.team=t.id;renderLeagueNav();renderTeam();openPlayer(t.id,p.id);}});p.champions.forEach(c=>all.push({type:'英雄',label:c.name,sub:`${p.id} · ${t.id}`,action:()=>{state.league='LPL';state.team=t.id;renderLeagueNav();renderTeam();openPlayer(t.id,p.id);}}));});});
  search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase(); if(!q){searchResults.classList.add('hidden');return}const found=all.filter(x=>(x.label+' '+x.sub).toLowerCase().includes(q)).slice(0,12);searchResults.innerHTML=found.length?found.map((x,i)=>`<div class="search-result" data-r="${i}"><div><strong>${esc(x.label)}</strong><small>${esc(x.sub)}</small></div><span class="search-tag">${x.type}</span></div>`).join(''):'<div class="search-result"><small>找不到符合資料</small></div>';searchResults.classList.remove('hidden');searchResults.querySelectorAll('[data-r]').forEach(el=>el.addEventListener('click',()=>{found[+el.dataset.r].action();searchResults.classList.add('hidden');search.value='';}));});
  document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))searchResults.classList.add('hidden')});
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus()}if(e.key==='Escape'){closeModal();searchResults.classList.add('hidden')}});
}
function showModal(){modal.classList.remove('hidden');document.body.style.overflow='hidden'} function closeModal(){modal.classList.add('hidden');document.body.style.overflow=''}
function syncSideActions(){document.querySelectorAll('.side-action').forEach(x=>x.classList.toggle('active',x.dataset.view===state.view))}
function render(){state.team?renderTeam():state.view==='matches'?renderMatches():renderHome()}

renderLeagueNav();render();setupSearch();
document.querySelectorAll('.side-action').forEach(btn=>btn.addEventListener('click',()=>{state.view=btn.dataset.view;state.team=null;syncSideActions();render()}));
document.querySelector('[data-nav-home]').addEventListener('click',()=>{state.team=null;state.view='teams';state.league='LPL';renderLeagueNav();syncSideActions();render()});
document.getElementById('compareBtn').addEventListener('click',openCompare);document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
