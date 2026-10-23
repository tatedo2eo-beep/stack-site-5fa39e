# Research: Tall, Crisp Yorkshire Puddings
Dish: Yorkshire pudding / flavour: Classic. Private file, not published.

## Sources actually opened
- [The Best Yorkshire Pudding (Serious Eats)](https://www.seriouseats.com/the-best-yorkshire-pudding-popover-recipe) [Tier 1 (locked list): Serious Eats]: Batter of eggs, flour, milk, a little water and salt rested at least 30 min or overnight; fat heated in the tins at 230 °C until smoking; batter poured in and baked until quadrupled, deep brown and hollow. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Individual Yorkshire Puddings (ATK)](https://www.americastestkitchen.com/recipes/419-individual-yorkshire-puddings) [Tier 1 (locked list): America's Test Kitchen]: Eggs, milk, flour and salt whisked and rested 1-3 hours; fat heated in a muffin tin until smoking at about 230 °C; batter poured in and baked without opening the door, then pierced to release steam. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Vegetable oil heated in the tin instead of dripping.
- Rested batter, smoking-hot fat, door kept shut.
- Pierced to keep them from collapsing.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tall-crisp-yorkshire-puddings-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
