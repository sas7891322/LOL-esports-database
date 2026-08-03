# RIFT DB V12J — Sources & Verification Notes

Updated: 2026-08-03 Asia/Taipei

This build keeps the existing verified league data intact, preserves the completed LCP backfill, and adds FlyQuest champion-level data for both recorded LCS series through Aug 1.

## Verification policy

- Only completed series with an independently verifiable final map score are written into `matches`.
- Game-by-game champion picks are only written when player-to-champion attribution can be verified; missing maps are not inferred from draft tendencies or role assumptions.
- G2 vs VIT remains excluded by user request.
- LCK DNS vs BRO (Aug 2) remains withheld pending exact final-score verification.
- LPL, the currently recorded LCK series, and all 11 recorded LEC series retain completed game-by-game champion verification.

## LCP

- Added DetonatioN FocusMe 0-2 Deep Cross Gaming from Aug 1.
- LCP snapshot is now 11 recorded series / 26 individual games through Aug 2.
- DFM is updated to 1-2 series / 2-5 games; DCG is updated to 2-1 series / 4-3 games.
- LCP champion-level backfill is complete for all 11 recorded series / 26 games through Aug 2. Current Games of Legends game pages, player match lists, and tournament-scoped player champion pools were cross-checked for player-to-champion attribution and result consistency.
- Validation result: 260 player-game champion records across the eight LCP teams; every active starter champion-game total matches the team map count and every champion-win total matches the team map wins; all LCP `pendingChampionSeries` values are 0.

## Other leagues

- LPL: 26 series / 63 games, champion-level backfill complete for recorded series.
- LCK: 9 series / 22 games currently recorded; DNS vs BRO withheld as above.
- LEC: 11 series / 28 games, champion-level backfill complete; G2 vs VIT excluded by request.
## LCS — FlyQuest

- FlyQuest 0-2 LYON (Jul 25): both maps were verified from the LCS post-match game tables, including direct player-to-champion attribution.
- FlyQuest 2-0 Disguised (Aug 1): both maps were cross-checked against RFT's game builds/series scoreboard; FLY used Aatrox / Shyvana / Orianna / Ziggs / Camille in Game 1 and Rumble / Pantheon / Cassiopeia / Ezreal / Bard in Game 2.
- FLY validation: 4 maps total, 20 player-game champion records; all five starters have exactly 4 champion-games and 2 champion-wins. `pendingChampionSeries` is now 0 for FLY.
- LCS overall remains 8 recorded series / 18 games; champion backfill is complete for 1/8 teams and remains in progress for the other seven.

- CBLOL: 8 series / 18 games; champion backfill remains in progress.
