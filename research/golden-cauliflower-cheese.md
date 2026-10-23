# Research: Golden Cauliflower Cheese
Dish: Cauliflower cheese / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cheesy Cauliflower Bake (ATK)](https://www.americastestkitchen.com/recipes/5834-cheesy-cauliflower-bake) [Tier 1 (locked list): America's Test Kitchen]: Butter, garlic and flour roux with cream; cauliflower simmered in the sauce with dry mustard and thyme; Cheddar and Jack stirred in; baked in a hot oven until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cauliflower Gratin (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/cauliflower-gratin-recipe-2011420) [Tier 2 (locked list): Food Network Kitchen]: Milk bechamel with roux; florets boiled 4-5 min in salted water and arranged in a buttered dish; cheese, nutmeg and cayenne whisked into the sauce, poured over and baked at about 200 °C 20-25 min until golden and bubbly. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Florets boiled 4-5 min, then baked under a milk cheese sauce.
- Mustard powder, cayenne and nutmeg in the sauce.
- Cheddar on top instead of crumbs.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/golden-cauliflower-cheese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tbsp fine salt, for the cooking water -> 18 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
