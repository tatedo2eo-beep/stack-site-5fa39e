# Research: Raspberry Macarons with Raspberry Buttercream
Dish: Macarons / flavour: Raspberry. Private file, not published.

## Sources actually opened
- [Raspberry Macarons (NYT Cooking)](https://cooking.nytimes.com/recipes/1024559-raspberry-macarons) [Tier 2 (locked list): NYT Cooking]: Icing sugar, almond flour and freeze-dried raspberries ground and sieved; French meringue with sugar and colouring; folded to a flowing batter, piped in 3 cm rounds, rested and baked low; filled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Macarons with Raspberry Buttercream (ATK)](https://www.americastestkitchen.com/recipes/16082-raspberry-buttercream) [Tier 1 (locked list): America's Test Kitchen]: Almond flour shells piped in 4 cm circles, rested and baked; buttercream of butter, icing sugar, salt, cream, vanilla and ground freeze-dried raspberries. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- French meringue with 8 g raspberry powder in the shells.
- 150 °C, one tray at a time, 15-17 min.
- Raspberry buttercream; matured 24 h.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 35 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/raspberry-macarons-raspberry-buttercream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
