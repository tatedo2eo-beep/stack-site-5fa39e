# Research: Di San Xian (Stir-Fried Potato, Aubergine and Green Pepper)
Dish: Di san xian / flavour: Classic. Private file, not published.

## Sources actually opened
- [Stir-Fried Three Treasures (ATK)](https://www.americastestkitchen.com/recipes/17123-stir-fried-three-treasures-di-san-xian) [Tier 1 (locked list): America's Test Kitchen]: Aubergine soaked in salted water, coated in cornflour and fried; potato wedges and green pepper fried; vegetables tossed in a glossy sauce of soy sauce, oyster sauce, sugar and cornflour with garlic and spring onion. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Northeastern Potato, Eggplant and Peppers (NYT Cooking)](https://cooking.nytimes.com/recipes/1013039-northeastern-potato-eggplant-and-peppers) [Tier 2 (locked list): NYT Cooking]: Potato, aubergine and green pepper fried separately until golden, then tossed in a wok with garlic and a soy-based sauce thickened with starch. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Soy and oyster sauce reduced for salt.
- Each vegetable fried separately.
- Sauce thickened to a gloss before tossing.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/di-san-xian-potato-aubergine-green-pepper-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt, for soaking -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
