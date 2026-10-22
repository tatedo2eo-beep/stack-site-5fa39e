# Research: Chewy Boiled New York Bagels with Cream Cheese
Dish: Bagels / flavour: Classic. Private file, not published.

## Sources actually opened
- [New York Bagels (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8358-new-york-bagels) [Tier 1 (locked list): America's Test Kitchen]: Stiff dough of ice water, malt syrup, bread flour and yeast with salt added after a rest, divided into 8 pieces of 99 g, shaped into rings by rolling a rope, retarded in the fridge overnight, boiled briefly and baked. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Bagels (Serious Eats)](https://www.seriouseats.com/homemade-bagels-recipe) [Tier 1 (locked list): Serious Eats]: Bread-flour dough with a cooked flour paste, sugar, salt and instant yeast, divided into 8, shaped into rings and refrigerated 24-36 hours, boiled about 30 seconds a side in malted water and baked at 425 °F until glossy and golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Peter Reinhart's Whole Wheat Bagels (NYT Cooking)](https://cooking.nytimes.com/recipes/1017092-peter-reinharts-whole-wheat-bagels) [Tier 2 (locked list): NYT Cooking]: Firm dough sweetened with barley malt, agave or honey, risen, divided into 8, rolled into ropes and joined into rings, retarded cold, boiled in water with malt, soda or honey and baked on cornmeal or semolina. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Honey in place of barley malt syrup (NYT option)
- 12-24 h cold retard
- Boil 45 s a side, bake 230 °C
- Served with cream cheese to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 30 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/chewy-boiled-new-york-bagels-cream-cheese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- runny honey: 1 tbsp → 21 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
