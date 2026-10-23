# Research: Koshari (Rice, Lentils and Pasta with Spiced Tomato Sauce)
Dish: Koshari / flavour: Classic. Private file, not published.

## Sources actually opened
- [Koshari (ATK)](https://www.americastestkitchen.com/recipes/13762-koshari) [Tier 1 (locked list): America's Test Kitchen]: Macaroni boiled and rinsed; lentils simmered; tomato sauce with chickpeas spiced with garlic, coriander, cumin, cinnamon, nutmeg and cayenne in onion oil; rinsed basmati cooked in spiced onion oil with the lentils; crispy onions and vinegar to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Koshari (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/koshari-18819208) [Tier 2 (locked list): Food Network Kitchen]: Floured onions fried crisp; vermicelli, rice and lentils cooked together with cinnamon; pasta boiled; tomato sauce with paste and distilled white vinegar; garlic, white vinegar, cumin and coriander sauce; spiced chickpeas; layered and topped with onions. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Floured onions fried crisp.
- Separate pasta, lentils and spiced rice; spiced tomato sauce with distilled white vinegar.
- Garlic vinegar sauce and chickpeas; distilled white vinegar used throughout.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 60 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/koshari-rice-lentils-pasta-spiced-tomato-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- plain flour: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Salt given in grams (06-G1): 1 tsp fine salt, for the cooking water -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt, for the lentil water -> 3 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
