# Research: Sweet Cheese Danish Pastries with Lemon
Dish: Danish / flavour: Cheese. Private file, not published.

## Sources actually opened
- [Danish Pastry (King Arthur)](https://www.kingarthurbaking.com/recipes/danish-pastry-recipe) [Tier 1 (locked list): King Arthur Baking]: Cardamom-scented yeasted dough with milk and eggs, laminated with butter, shaped into individual pastries filled with a sweetened cream cheese and ricotta filling and jam or fruit. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Danish Dough (NYT Cooking)](https://cooking.nytimes.com/recipes/1017897-danish-dough) [Tier 2 (locked list): NYT Cooking]: Bread flour, sugar, yeast, egg and milk with cold butter, rolled and folded in thirds repeatedly with chilling to build flaky layers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Danish Dough (ATK)](https://www.americastestkitchen.com/recipes/3410-danish-dough) [Tier 1 (locked list): America's Test Kitchen]: Sweet yeasted dough wrapped around a flour-butter square and given letter folds with chilling; makes a braid or 16 individual danish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Individual Danish (ATK)](https://www.americastestkitchen.com/recipes/3413-individual-danish) [Tier 1 (locked list): America's Test Kitchen]: The laminated dough cut and shaped into individual pastries, filled with cream cheese filling or fruit, proved, baked to golden and glazed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Same laminated dough and coils as the raspberry danish.
- A larger cream cheese and ricotta filling with lemon, steadied with cornflour.
- Baked until the filling is set and at least 71 °C; dusted with icing sugar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 20 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/sweet-cheese-danish-pastries-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
