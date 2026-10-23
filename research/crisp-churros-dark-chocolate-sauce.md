# Research: Crisp Churros with Dark Chocolate Sauce
Dish: Churros / flavour: Classic. Private file, not published.

## Sources actually opened
- [Churros with Mexican Chocolate Sauce (ATK)](https://www.americastestkitchen.com/recipes/13710-churros-with-mexican-chocolate-sauce) [Tier 1 (locked list): America's Test Kitchen]: Boiled water, butter, sugar and salt with flour stirred in, 2 eggs beaten in, piped with a closed star tip into 15 cm lengths, chilled, fried; chocolate sauce of sugar, milk, cinnamon, cocoa, chocolate and butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Churros (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/churros-recipe) [Tier 1 (locked list): King Arthur Baking]: Choux-style dough of water, butter, salt and flour with eggs beaten in, piped through a star tip into hot oil at about 190 °C and fried until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Chilli powder left out of the sauce; dark chocolate replaces unsweetened, with less sugar.
- Fried at 180-190 °C about 6 min.
- Served plain with the sauce, as in the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/crisp-churros-dark-chocolate-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
