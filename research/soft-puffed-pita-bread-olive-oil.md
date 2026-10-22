# Research: Soft Puffed Pita Bread
Dish: Pita / flavour: Classic. Private file, not published.

## Sources actually opened
- [Homemade Pita Bread (NYT Cooking)](https://cooking.nytimes.com/recipes/1016071-homemade-pita-bread) [Tier 2 (locked list): NYT Cooking]: Yeast sponge, then flour, salt and olive oil kneaded smooth, risen, divided into 8 balls, rolled thin and baked on a very hot surface until puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pita Bread (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11188-pita-bread) [Tier 1 (locked list): America's Test Kitchen]: Bread-flour dough with olive oil and honey, kneaded satiny, divided into 8, rolled into even rounds and baked on a preheated surface until puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Pita Bread (Serious Eats)](https://www.seriouseats.com/perfect-pita-bread-recipe) [Tier 1 (locked list): Serious Eats]: Water, oil, sugar, instant yeast, salt and flour kneaded 10 min, risen, rolled about 1/4 inch thick and baked on a preheated stone or steel at high heat until puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Even 5 mm rolling so every round puffs
- Wrapped in a towel straight from the oven for softness
- Served with hummus as in the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 15 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/soft-puffed-pita-bread-olive-oil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- caster sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
