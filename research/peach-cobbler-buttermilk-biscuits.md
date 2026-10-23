# Research: Peach Cobbler with Buttermilk Biscuits
Dish: Cobbler / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fresh Peach Cobbler (ATK)](https://www.americastestkitchen.com/recipes/1468-fresh-peach-cobbler) [Tier 1 (locked list): America's Test Kitchen]: 1.1 kg sliced peaches with sugar, cornstarch, lemon and salt baked alone first until juicy; tender biscuit dough of flour, sugar, baking powder and soda with butter and yogurt dropped on the hot fruit and baked at about 220 °C. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Peach Cobbler (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/classic-peach-cobbler-19617414) [Tier 2 (locked list): Food Network Kitchen]: 1.4 kg sliced peaches with brown and white sugar, lemon, salt and flour in a 23 x 33 cm dish; buttermilk biscuit dough dropped over in spoonfuls, sprinkled with coarse sugar and baked until golden and bubbling. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Peaches pre-baked 15 min so the juices start.
- Buttermilk drop biscuits on the hot fruit.
- 200 °C until biscuits read about 93 °C; rested 20 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 45 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/peach-cobbler-buttermilk-biscuits-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C10 (buttermilk marinade); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour: 3 tbsp → 24 g (CHECKLIST 1, weights in grams)
- demerara or granulated sugar, for sprinkling: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
