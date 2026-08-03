# RIFT DB V12K — Sources & Verification Notes

Updated: 2026-08-03 Asia/Taipei

This build keeps the existing verified league data intact, preserves the completed LCP backfill, and completes champion-level data for all eight recorded LCS teams through Aug 2.

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
## LCS

- Completed game-by-game champion backfill for all 8 recorded Summer series / 18 individual games through Aug 2.
- Verified series: DIG 1-2 SEN (Jul 25), FLY 0-2 LYON (Jul 25), C9 0-2 TL (Jul 26), DSG 0-2 SR (Jul 26), C9 2-1 DIG (Aug 1), FLY 2-0 DSG (Aug 1), SR 0-2 LYON (Aug 2), and TL 2-0 SEN (Aug 2).
- Player-to-champion attribution was reconstructed from LCS post-match game tables and cross-checked against current series/player records. Existing FlyQuest data was independently regenerated from the same 18-game set and matched the prior V12J backfill exactly.
- Validation result: 180 player-game champion records across the eight LCS teams; each starter's champion-game total matches the team's map count and champion-win total matches the team's map wins. All LCS `pendingChampionSeries` values are now 0.

- CBLOL: 8 series / 18 games; champion backfill remains in progress.
