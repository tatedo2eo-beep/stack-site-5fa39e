# Research: Dark Chocolate Fudge Sauce
Dish: Sauce / flavour: Classic. Private file, not published.

## Sources actually opened
- [Dark Chocolate Fudge Sauce (ATK)](https://www.americastestkitchen.com/recipes/11053-dark-chocolate-fudge-sauce) [Tier 1 (locked list): America's Test Kitchen]: Sugar, milk and salt warmed until dissolved, cocoa whisked in, chocolate melted in off the heat, then cold butter and vanilla whisked in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hot Fudge Sauce (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/hot-fudge-sauce-recipe) [Tier 1 (locked list): King Arthur Baking]: Butter and chocolate melted with half-and-half, sugar and Dutch-process cocoa whisked in, brought to the boil and finished with vanilla. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Dark 70% chocolate instead of unsweetened, with less sugar.
- No espresso powder.
- Alcohol-free vanilla.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 10 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/dark-chocolate-fudge-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
