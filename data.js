window.ESPORTS_DATA = {
  meta: {
    title: "LoL Esports Database",
    season: "2026",
    split: "Split 3",
    patch: "26.14",
    updated: "2026-07-24",
    note: "Prototype snapshot: LPL data through WE 2–1 JDG. Other regions are scaffolded for expansion."
  },
  leagues: [
    { id: "LPL", region: "中國", name: "League of Legends Pro League", status: "active", teams: 12 },
    { id: "LCK", region: "韓國", name: "League of Legends Champions Korea", status: "planned", teams: null },
    { id: "LEC", region: "EMEA", name: "League of Legends EMEA Championship", status: "planned", teams: null },
    { id: "LCP", region: "亞太", name: "League of Legends Championship Pacific", status: "planned", teams: null },
    { id: "LCS", region: "美洲", name: "League Championship Series", status: "planned", teams: null },
    { id: "CBLOL", region: "美洲", name: "Campeonato Brasileiro de League of Legends", status: "planned", teams: null }
  ],
  matches: [
    { date: "07/22", a: "LGD", b: "EDG", scoreA: 2, scoreB: 0, patch: "26.14" },
    { date: "07/22", a: "TES", b: "WE", scoreA: 2, scoreB: 0, patch: "26.14" },
    { date: "07/23", a: "AL", b: "JDG", scoreA: 2, scoreB: 1, patch: "26.14" },
    { date: "07/23", a: "BLG", b: "TT", scoreA: 2, scoreB: 1, patch: "26.14" },
    { date: "07/24", a: "AL", b: "LGD", scoreA: 2, scoreB: 0, patch: "26.14" },
    { date: "07/24", a: "WE", b: "JDG", scoreA: 2, scoreB: 1, patch: "26.14" }
  ],
  teams: [
    {
      id: "AL", name: "Anyone's Legend", group: "登峰組", series: { w: 2, l: 0 }, games: { w: 4, l: 1 },
      players: [
        { role: "TOP", id: "Breathe", champions: [
          { name: "安比薩", games: 1, wins: 0 }, { name: "卡桑帝", games: 1, wins: 1 }, { name: "吶兒", games: 1, wins: 1 }, { name: "藍寶", games: 1, wins: 1 }
        ]},
        { role: "TOP", id: "Flandre", champions: [{ name: "鄂爾", games: 1, wins: 1 }]},
        { role: "JG", id: "Tarzan", champions: [
          { name: "納菲芮", games: 2, wins: 1 }, { name: "菲艾", games: 1, wins: 1 }, { name: "姬亞娜", games: 1, wins: 1 }, { name: "嘉文四世", games: 1, wins: 1 }
        ]},
        { role: "MID", id: "Shanks", champions: [
          { name: "卡莎碧雅", games: 2, wins: 1 }, { name: "賽勒斯", games: 1, wins: 1 }, { name: "安妮", games: 1, wins: 1 }, { name: "奧莉安娜", games: 1, wins: 1 }
        ]},
        { role: "ADC", id: "Hope", champions: [
          { name: "希格斯", games: 2, wins: 1 }, { name: "路西恩", games: 1, wins: 1 }, { name: "法洛士", games: 2, wins: 2 }
        ]},
        { role: "SUP", id: "Kael", champions: [
          { name: "卡蜜兒", games: 2, wins: 1 }, { name: "米里歐", games: 1, wins: 1 }, { name: "妮可", games: 1, wins: 1 }, { name: "銳兒", games: 1, wins: 1 }
        ]}
      ]
    },
    {
      id: "BLG", name: "Bilibili Gaming", group: "登峰組", series: { w: 1, l: 0 }, games: { w: 2, l: 1 },
      players: [
        { role: "TOP", id: "Wenbo", champions: [{ name: "約瑞科", games: 1, wins: 1 }, { name: "藍寶", games: 1, wins: 0 }, { name: "卡桑帝", games: 1, wins: 1 }]},
        { role: "TOP", id: "Bin", champions: [] },
        { role: "JG", id: "Xun", champions: [{ name: "嘉文四世", games: 1, wins: 1 }, { name: "菲艾", games: 1, wins: 0 }, { name: "納菲芮", games: 1, wins: 1 }]},
        { role: "MID", id: "Knight", champions: [{ name: "雷茲", games: 1, wins: 1 }, { name: "阿璃", games: 1, wins: 1 }]},
        { role: "ADC", id: "Viper", champions: [{ name: "卡莎碧雅", games: 1, wins: 1 }, { name: "燼", games: 1, wins: 0 }, { name: "齊勒斯", games: 1, wins: 1 }]},
        { role: "SUP", id: "ON", champions: [{ name: "慎", games: 1, wins: 1 }, { name: "亞歷斯塔", games: 1, wins: 0 }, { name: "卡蜜兒", games: 1, wins: 1 }]}
      ]
    },
    {
      id: "EDG", name: "EDward Gaming", group: "登峰組", series: { w: 0, l: 1 }, games: { w: 0, l: 2 },
      players: [
        { role: "TOP", id: "Zdz", champions: [{ name: "吶兒", games: 1, wins: 0 }, { name: "卡桑帝", games: 1, wins: 0 }]},
        { role: "JG", id: "Xiaohao", champions: [{ name: "李星", games: 1, wins: 0 }, { name: "嘉文四世", games: 1, wins: 0 }]},
        { role: "MID", id: "BuLLDoG", champions: [{ name: "卡莎碧雅", games: 1, wins: 0 }, { name: "逆命", games: 1, wins: 0 }]},
        { role: "ADC", id: "Leave", champions: [{ name: "希格斯", games: 1, wins: 0 }, { name: "路西恩", games: 1, wins: 0 }]},
        { role: "SUP", id: "Parukia", champions: [{ name: "卡蜜兒", games: 1, wins: 0 }, { name: "米里歐", games: 1, wins: 0 }]}
      ]
    },
    {
      id: "JDG", name: "JD Gaming", group: "登峰組", series: { w: 0, l: 2 }, games: { w: 2, l: 4 },
      players: [
        { role: "TOP", id: "Xiaoxu", champions: [
          { name: "吶兒", games: 1, wins: 1 }, { name: "藍寶", games: 1, wins: 0 }, { name: "杰西", games: 1, wins: 0 },
          { name: "卡桑帝", games: 1, wins: 0 }, { name: "安比薩", games: 1, wins: 1 }, { name: "歐拉夫", games: 1, wins: 0 }
        ]},
        { role: "JG", id: "JunJia", champions: [
          { name: "李星", games: 1, wins: 1 }, { name: "嘉文四世", games: 1, wins: 0 }, { name: "波比", games: 1, wins: 0 },
          { name: "菲艾", games: 1, wins: 0 }, { name: "夜曲", games: 1, wins: 1 }, { name: "姬亞娜", games: 1, wins: 0 }
        ]},
        { role: "MID", id: "HongQ", champions: [
          { name: "星朵拉", games: 1, wins: 1 }, { name: "維克特", games: 1, wins: 0 }, { name: "梅爾", games: 1, wins: 0 },
          { name: "艾妮維亞", games: 1, wins: 0 }, { name: "阿卡莉", games: 1, wins: 1 }, { name: "阿璃", games: 1, wins: 0 }
        ]},
        { role: "ADC", id: "GALA", champions: [
          { name: "燼", games: 2, wins: 1 }, { name: "凱特琳", games: 1, wins: 0 }, { name: "希維爾", games: 1, wins: 0 },
          { name: "希格斯", games: 1, wins: 0 }, { name: "伊澤瑞爾", games: 1, wins: 1 }
        ]},
        { role: "SUP", id: "Vampire", champions: [
          { name: "慎", games: 1, wins: 1 }, { name: "拉克絲", games: 1, wins: 0 }, { name: "亞歷斯塔", games: 1, wins: 0 },
          { name: "卡蜜兒", games: 1, wins: 0 }, { name: "瑟菈紛", games: 1, wins: 1 }, { name: "雷歐娜", games: 1, wins: 0 }
        ]}
      ]
    },
    {
      id: "LGD", name: "LGD Gaming", group: "登峰組", series: { w: 1, l: 1 }, games: { w: 2, l: 2 },
      players: [
        { role: "TOP", id: "Burdol", champions: [{ name: "安比薩", games: 2, wins: 1 }, { name: "藍寶", games: 1, wins: 1 }, { name: "杰西", games: 1, wins: 0 }]},
        { role: "JG", id: "Heng", champions: [{ name: "史加納", games: 2, wins: 1 }, { name: "姬亞娜", games: 2, wins: 1 }]},
        { role: "MID", id: "Tangyuan", champions: [{ name: "星朵拉", games: 2, wins: 1 }, { name: "雷茲", games: 1, wins: 1 }, { name: "塔莉雅", games: 1, wins: 0 }]},
        { role: "ADC", id: "Shaoye", champions: [{ name: "凱莎", games: 1, wins: 1 }, { name: "尤娜拉", games: 1, wins: 1 }, { name: "燼", games: 1, wins: 0 }, { name: "伊澤瑞爾", games: 1, wins: 0 }]},
        { role: "SUP", id: "Crisp", champions: [{ name: "銳兒", games: 1, wins: 1 }, { name: "露璐", games: 1, wins: 1 }, { name: "慎", games: 1, wins: 0 }, { name: "卡瑪", games: 1, wins: 0 }]}
      ]
    },
    {
      id: "TES", name: "Top Esports", group: "登峰組", series: { w: 1, l: 0 }, games: { w: 2, l: 0 },
      players: [
        { role: "TOP", id: "ZUIAN", champions: [{ name: "卡桑帝", games: 1, wins: 1 }, { name: "安比薩", games: 1, wins: 1 }]},
        { role: "TOP", id: "369", champions: [] },
        { role: "JG", id: "Tian", champions: [{ name: "嘉文四世", games: 1, wins: 1 }, { name: "李星", games: 1, wins: 1 }]},
        { role: "MID", id: "Creme", champions: [{ name: "阿璃", games: 1, wins: 1 }, { name: "賽勒斯", games: 1, wins: 1 }]},
        { role: "ADC", id: "JackeyLove", champions: [{ name: "伊澤瑞爾", games: 1, wins: 1 }, { name: "齊勒斯", games: 1, wins: 1 }]},
        { role: "SUP", id: "Zhuo", champions: [{ name: "卡瑪", games: 1, wins: 1 }, { name: "卡蜜兒", games: 1, wins: 1 }]}
      ]
    },
    {
      id: "TT", name: "ThunderTalk Gaming", group: "登峰組", series: { w: 0, l: 1 }, games: { w: 1, l: 2 },
      players: [
        { role: "TOP", id: "Keshi", champions: [{ name: "杰西", games: 1, wins: 0 }, { name: "安比薩", games: 1, wins: 1 }, { name: "逆命", games: 1, wins: 0 }]},
        { role: "JG", id: "Junhao", champions: [{ name: "趙信", games: 1, wins: 0 }, { name: "李星", games: 1, wins: 1 }, { name: "姬亞娜", games: 1, wins: 0 }]},
        { role: "MID", id: "Heru", champions: [{ name: "阿卡莉", games: 1, wins: 0 }, { name: "安妮", games: 1, wins: 1 }, { name: "星朵拉", games: 1, wins: 0 }]},
        { role: "ADC", id: "Ahn", champions: [{ name: "希格斯", games: 1, wins: 0 }, { name: "希維爾", games: 1, wins: 1 }, { name: "法洛士", games: 1, wins: 0 }]},
        { role: "ADC", id: "Ryan3", champions: [] },
        { role: "SUP", id: "Feather", champions: [{ name: "納帝魯斯", games: 1, wins: 0 }, { name: "巴德", games: 1, wins: 1 }, { name: "雷歐娜", games: 1, wins: 0 }]}
      ]
    },
    {
      id: "WE", name: "Team WE", group: "登峰組", series: { w: 1, l: 1 }, games: { w: 2, l: 3 },
      players: [
        { role: "TOP", id: "Cube", champions: [
          { name: "藍寶", games: 2, wins: 1 }, { name: "吶兒", games: 1, wins: 0 }, { name: "厄薩斯", games: 1, wins: 0 }, { name: "杰西", games: 1, wins: 1 }
        ]},
        { role: "JG", id: "Monki", champions: [
          { name: "杰西", games: 1, wins: 0 }, { name: "葛雷夫", games: 1, wins: 0 }, { name: "特朗德", games: 1, wins: 1 }, { name: "李星", games: 1, wins: 0 }, { name: "波比", games: 1, wins: 1 }
        ]},
        { role: "MID", id: "Karis", champions: [
          { name: "雷茲", games: 2, wins: 1 }, { name: "歐羅拉", games: 1, wins: 0 }, { name: "維克特", games: 1, wins: 0 }, { name: "星朵拉", games: 1, wins: 1 }
        ]},
        { role: "ADC", id: "About", champions: [
          { name: "路西恩", games: 1, wins: 0 }, { name: "星朵拉", games: 1, wins: 0 }, { name: "法洛士", games: 1, wins: 1 }, { name: "希維爾", games: 1, wins: 0 }, { name: "好運姐", games: 1, wins: 1 }
        ]},
        { role: "SUP", id: "Erha", champions: [
          { name: "米里歐", games: 1, wins: 0 }, { name: "雷歐娜", games: 1, wins: 0 }, { name: "亞歷斯塔", games: 1, wins: 1 }, { name: "卡瑪", games: 1, wins: 0 }, { name: "納帝魯斯", games: 1, wins: 1 }
        ]}
      ]
    },
    { id: "IG", name: "Invictus Gaming", group: "涅槃組", series: { w: 0, l: 0 }, games: { w: 0, l: 0 }, players: [
      { role: "TOP", id: "TheShy", champions: [] }, { role: "JG", id: "Wei", champions: [] }, { role: "MID", id: "Rookie", champions: [] }, { role: "ADC", id: "Assum", champions: [] }, { role: "SUP", id: "Meiko", champions: [] }
    ]},
    { id: "LNG", name: "LNG Esports", group: "涅槃組", series: { w: 0, l: 0 }, games: { w: 0, l: 0 }, players: [
      { role: "TOP", id: "sheer", champions: [] }, { role: "JG", id: "Weiwei", champions: [] }, { role: "MID", id: "Nia", champions: [] }, { role: "ADC", id: "1xn", champions: [] }, { role: "SUP", id: "Ycx", champions: [] }, { role: "SUP", id: "Missing", champions: [] }
    ]},
    { id: "NIP", name: "Ninjas in Pyjamas", group: "涅槃組", series: { w: 0, l: 0 }, games: { w: 0, l: 0 }, players: [
      { role: "TOP", id: "HOYA", champions: [] }, { role: "JG", id: "Guwon", champions: [] }, { role: "MID", id: "Care", champions: [] }, { role: "ADC", id: "Photic", champions: [] }, { role: "SUP", id: "fengyue", champions: [] }
    ]},
    { id: "WBG", name: "Weibo Gaming", group: "涅槃組", series: { w: 0, l: 0 }, games: { w: 0, l: 0 }, players: [
      { role: "TOP", id: "Zika", champions: [] }, { role: "JG", id: "Jiejie", champions: [] }, { role: "MID", id: "Xiaohu", champions: [] }, { role: "ADC", id: "Elk", champions: [] }, { role: "SUP", id: "Jwei", champions: [] }, { role: "SUP", id: "Moham", champions: [] }
    ]}
  ]
};
