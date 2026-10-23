# Research: Chouquettes (Pearl Sugar Choux Puffs)
Dish: Chouquettes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chouquettes (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/chouquettes-recipe) [Tier 1 (locked list): King Arthur Baking]: Pâte à choux dropped or piped in 4 cm mounds, covered generously with pearl sugar, baked at about 220 °C then 175 °C until medium golden, served the same day. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chouquettes (Serious Eats)](https://www.seriouseats.com/chouquettes) [Tier 1 (locked list): Serious Eats]: Milk choux piped in small puffs, brushed with egg wash, topped with pearl sugar, baked at 204 °C about 20 min, then left 30 min in the switched-off oven with the door ajar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Milk-and-water choux, 3 cm mounds.
- Yolk wash and pearl sugar.
- 200 °C 22-25 min, dried 20 min in the oven.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/pearl-sugar-chouquettes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1.5 tsp → 6 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
