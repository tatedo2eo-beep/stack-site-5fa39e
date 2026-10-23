# Research: Chaussons aux Pommes (French Apple Turnovers)
Dish: Chausson aux pommes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chaussons aux Pommes (Serious Eats)](https://www.seriouseats.com/french-in-a-flash-chaussons-aux-pommes) [Tier 1 (locked list): Serious Eats]: Golden Delicious apples cooked with sugar and lemon, folded into puff-pastry half-moons, egg-washed, baked hot. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Apple Turnovers (ATK)](https://www.americastestkitchen.com/recipes/11144-apple-turnovers) [Tier 1 (locked list): America's Test Kitchen]: Cooled apple filling in puff pastry, chilled before baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; quantities sanity-checked independently.

## Own cooking judgment
- Scored leaf pattern as in the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 35 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/chausson-aux-pommes-apple-turnovers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour, for dusting: 1 tbsp → 8 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
