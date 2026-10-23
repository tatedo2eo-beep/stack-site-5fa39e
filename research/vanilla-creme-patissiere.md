# Research: Vanilla Crème Pâtissière (Pastry Cream)
Dish: Crème pâtissière / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pastry Cream (ATK)](https://www.americastestkitchen.com/recipes/5757-pastry-cream) [Tier 1 (locked list): America's Test Kitchen]: 5 yolks whisked with a little sugar and cornstarch; milk heated with salt and remaining sugar, half tempered in, returned and cooked until thick with a few bubbles; cold butter and vanilla whisked in; chilled under paper 3 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pastry Cream (Crème Pâtissière) (King Arthur)](https://www.kingarthurbaking.com/recipes/pastry-cream-recipe) [Tier 1 (locked list): King Arthur Baking]: Milk heated; sugar, cornstarch and salt whisked with 6 yolks until pale, tempered, cooked until thick and bubbling; strained, butter and vanilla whisked in; chilled with film on the surface. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 5 yolks, cornflour, whole milk.
- Cooked until bubbling plus 1 min (well above 82 °C).
- Cold butter and alcohol-free vanilla; sieved, chilled 3 h.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 10 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/vanilla-creme-patissiere-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
