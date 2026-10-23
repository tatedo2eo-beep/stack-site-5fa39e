# Research: Lemon Meringue Pie
Dish: Meringue pie (lemon) / flavour: Classic. Private file, not published.

## Sources actually opened
- [The Ultimate Lemon Meringue Pie (ATK)](https://www.americastestkitchen.com/recipes/803-the-ultimate-lemon-meringue-pie) [Tier 1 (locked list): America's Test Kitchen]: Lemon filling of sugar, cornstarch and water simmered, tempered into 6 yolks, finished with zest, juice and butter; meringue of 4 whites with cream of tartar and sugar spread over the hot filling to seal at the crust, then browned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Lemon Meringue Pie (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/classic-lemon-meringue-pie-5608977) [Tier 2 (locked list): Food Network Kitchen]: Blind-baked crust; lemon filling tempered into 4 yolks and simmered 1 min; meringue whites and sugar heated over simmering water until hot, whipped to stiff peaks, swirled to meet the crust and torched or grilled golden; chilled about 4 h. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Blind-baked shell.
- Filling tempered into yolks and simmered 1 min.
- Whites heated with sugar to 71 °C, whipped, sealed to the crust and torched; chilled.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 50 min + cook 50 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/lemon-meringue-pie-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K5 (resting and chilling).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
