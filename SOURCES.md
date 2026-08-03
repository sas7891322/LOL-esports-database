# RIFT DB V12G — Sources & Verification Notes

Updated: 2026-08-03 09:41 Asia/Taipei

This build extends the V11 snapshot with completed Patch 26.14 series through the latest verifiable results available at update time.

## Verification policy

- Only completed series with an independently verifiable final map score are written into `matches`.
- G2 vs VIT remains excluded by user request.
- LCK DNS vs BRO (Aug 2) is not written because a reliable final map score was not available during verification.
- LCP DCG vs DFM (Aug 1) is not written because the winner could be established but the exact final map score could not be independently confirmed.
- LPL and the currently recorded LCK series have completed game-by-game champion verification; remaining leagues continue to use pending markers where champion picks are not yet backfilled.

## LPL

Results and game-by-game picks were cross-checked against LPL Split 3 post-match material. The database now covers all 26 recorded series through Aug 2 (63 individual games) at champion level: 630 player-game champion records in total. All 12 LPL teams now have champion data, and `pendingChampionSeries` is cleared for every LPL team.

## LCK

Added nine independently verified Week 10 / Rounds 3-4 series through KT 2-1 HLE on Aug 2. DNS vs BRO remains withheld pending exact final score verification.

## LEC

Week 2 live/post-match material explicitly states Patch 26.14. Added VIT 2-0 TH, MKOI 2-1 SHFT, SK 2-1 GX, KC 2-0 NAVI, G2 2-0 SK, MKOI 2-1 FNC. G2 vs VIT remains excluded.

## LCP

Added verified Swiss-stage series through TSW 3-0 CFO on Aug 2. DCG vs DFM (Aug 1) withheld until exact score verification.

## LCS

Week 2 live discussion explicitly states Patch 26.14. Added C9 2-1 DIG, FLY 2-0 DSG, LYON 2-0 SR, TL 2-0 SEN.

## CBLOL

Added Week 2 completed series: VKS 2-0 FUR, PNG 2-0 LEV, LOUD 2-0 FXW7, LOS 2-0 RED.
