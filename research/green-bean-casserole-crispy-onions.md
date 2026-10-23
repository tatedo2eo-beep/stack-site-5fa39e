# Research: Green Bean Casserole with Crispy Onions
Dish: Green bean casserole / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cast-Iron Skillet Green Bean Casserole (ATK)](https://www.americastestkitchen.com/recipes/16526-cast-iron-skillet-green-bean-casserole) [Tier 1 (locked list): America's Test Kitchen]: Mushrooms browned in butter with onion, garlic and thyme; green beans cooked in; cream whisked with broth, flour, soy sauce and pepper and simmered until glossy; topped with fried onions. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Green Bean Casserole (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/classic-green-bean-casserole-3363993) [Tier 2 (locked list): Food Network Kitchen]: Homemade fried onion topping; beans boiled crisp-tender and cooled; mushrooms browned in butter with garlic and thyme, flour cooked in, dairy and broth simmered until thick; beans folded in, baked until bubbling, then topped and baked 5 min more. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Water and soy sauce in place of stock.
- Homemade flour-dusted fried onion rings.
- Baked in an oval dish, topping added at the end.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/green-bean-casserole-crispy-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Salt given in grams (06-G1): 1 tbsp fine salt, for the cooking water -> 18 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
