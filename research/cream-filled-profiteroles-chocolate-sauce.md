# Research: Cream-Filled Profiteroles with Chocolate Sauce
Dish: Profiteroles / flavour: Classic. Private file, not published.

## Sources actually opened
- [Profiteroles (ATK)](https://www.americastestkitchen.com/recipes/16015-profiteroles) [Tier 1 (locked list): America's Test Kitchen]: Butter, water, milk, sugar and salt boiled, flour stirred in and cooked 3 min, eggs and a white processed in; 24 puffs baked at 220 °C then 190 °C, slit and dried in the turned-off oven; filled with ice cream and served with a chocolate, cream, corn syrup and butter sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Profiteroles (NYT Cooking)](https://cooking.nytimes.com/recipes/6806-profiteroles-cream-puffs) [Tier 2 (locked list): NYT Cooking]: Water, butter and salt boiled, flour beaten in until it forms a ball, 4 eggs beaten in one at a time, 24 mounds piped and baked at about 220 °C until golden and cooked through. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Choux: butter, water, milk, flour cooked 3 min, eggs plus a white.
- 220 °C then 190 °C, slit and dried.
- Filled with whipped cream (no ice cream); golden syrup chocolate sauce.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 30 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/cream-filled-profiteroles-chocolate-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1.5 tsp → 6 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
