# Research: Vegetarian Borscht with White Beans and Dill
Dish: Borscht / flavour: Vegetarian. Private file, not published.

## Sources actually opened
- [Vegetarian Red Borscht (New York Times Cooking, David Tanis)](https://cooking.nytimes.com/recipes/1019972-vegetarian-red-borscht) [Tier 2 (locked list): NYT Cooking]: Onion, celery, leek, garlic, tomato paste, paprika, caraway, bay and thyme; potatoes, beets and carrots; kale; cider vinegar; horseradish cream and dill. _(fetched 200; recipe (ingredients and steps) read)_
- [Vegetarian Borscht (Serious Eats)](https://www.seriouseats.com/dinner-tonight-vegetarian-borscht-recipe) [Tier 1 (locked list): Serious Eats]: Matchstick beets, onions and carrots; cabbage; vegetable stock; lemon; sour cream. _(fetched 200; recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Two locked sources compared; wording, ingredient order and step structure are our own.

## Own cooking judgment
- White beans added for protein
- No celery, leek, caraway or kale; cabbage and potato instead
- Vinegar split between the start (colour) and the end (balance); sour cream and dill on top

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/vegetarian-borscht-white-beans-dill-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
