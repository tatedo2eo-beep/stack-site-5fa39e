# Research: Sabich: Pita with Fried Aubergine, Eggs, Hummus, Tahini and Chopped Salad
Dish: Sabich / flavour: Classic. Private file, not published.

## Sources actually opened
- [Sabich Sandwiches (Serious Eats)](https://www.seriouseats.com/sabich-sandwich-eggplant-egg-hummus-pita-recipe) [Tier 1 (locked list): Serious Eats]: Aubergine rounds shallow-fried until golden; tomato, cucumber, lemon and parsley salad; seasoned cabbage; pitta spread with hummus, layered with aubergine, tahini sauce, sliced boiled eggs and pickles; amba. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sabich Bowls (NYT Cooking)](https://cooking.nytimes.com/recipes/1023800-sabich-bowls) [Tier 2 (locked list): NYT Cooking]: Aubergine with chickpeas, tahini-lemon-garlic sauce, tomato-cucumber-parsley salad, cabbage, pickles and boiled eggs. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Pitta assembly order and fried aubergine (SE)
- Tahini, lemon and garlic sauce (NYT)
- Lemon dresses the cabbage

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/sabich-pita-fried-aubergine-eggs-hummus-tahini-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
