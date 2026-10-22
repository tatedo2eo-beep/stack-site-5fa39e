# Research: Cinnamon-Raisin Bagels with Cream Cheese
Dish: Bagels / flavour: Cinnamon-raisin. Private file, not published.

## Sources actually opened
- [New York Cinnamon-Raisin Bagels (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8359-new-york-cinnamon-raisin-bagels) [Tier 1 (locked list): America's Test Kitchen]: The New York bagel dough with raisins kneaded in and cinnamon sugar, divided into 8, shaped, retarded overnight, boiled and baked. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cinnamon Raisin Bagels (Serious Eats)](https://www.seriouseats.com/homemade-cinnamon-raisin-bagels-recipe) [Tier 1 (locked list): Serious Eats]: Bread and wholewheat flour dough with cinnamon, sugar, salt and yeast, golden raisins kneaded in by hand, divided into 8 of 105 g, shaped into rings, refrigerated 24-36 hours, boiled 30 seconds a side and baked at 425 °F about 25 minutes. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Raisins soaked and dried so they do not tear the dough
- Cinnamon in the dough
- Slightly cooler oven (220 °C) so the fruit does not scorch

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 30 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/cinnamon-raisin-bagels-cream-cheese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- runny honey: 1 tbsp → 21 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
