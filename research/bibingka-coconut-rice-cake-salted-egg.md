# Research: Bibingka: Baked Coconut Rice Cake with Salted Egg on Banana Leaf
Dish: Bibingka / flavour: Classic. Private file, not published.

## Sources actually opened
- [Bibingka (NYT Cooking)](https://cooking.nytimes.com/recipes/1018391-bibingka-filipino-coconut-rice-cake) [Tier 2 (locked list): NYT Cooking]: Rice-flour and coconut milk batter in a banana-leaf-lined pan, baked, topped with salted egg, then buttered, sugared and grilled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bibingka (Serious Eats)](https://www.seriouseats.com/bibingka-filipino-rice-cake-5196489) [Tier 1 (locked list): Serious Eats]: Rice flour, coconut milk, eggs and butter batter baked on banana leaf; salted duck egg on top part-way through; finished under a hot grill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rice flour with a little glutinous rice flour for chew.
- Salted egg added after 15 min so the slices sit on top.
- Buttered, sugared and grilled for the charred spots in the photo; no cheese.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 35 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/bibingka-coconut-rice-cake-salted-egg-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K3 (melted or browned butter); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
