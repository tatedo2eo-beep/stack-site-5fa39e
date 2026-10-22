# Research: Crisp Breaded Beef Cutlets with Lemon and Leaf Salad
Dish: Milanesa / flavour: Classic. Private file, not published.

## Sources actually opened
- [Steak Milanese (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11138-steak-milanese) [Tier 1 (locked list): America's Test Kitchen]: Steak cut into strips and pounded to an even 6 mm under plastic, patted dry and seasoned; dredged in flour, beaten egg and panko mixed with Parmesan, lemon zest, salt and pepper; fried 2 at a time in hot oil until golden, about 2 min per side, drained on a paper-lined rack. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Milanese (NYT Cooking)](https://cooking.nytimes.com/recipes/1024229-chicken-milanese) [Tier 2 (locked list): NYT Cooking]: Cutlets pounded to no more than 8 mm and seasoned; flour, beaten egg, then panko with grated Parmesan pressed on to coat fully; pan-fried in a 1.25 cm layer of oil over medium-high heat about 3 min per side in batches; drained on a rack; served with a lemon-dressed leaf salad and lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Meat pounded to an even 6-8 mm and patted dry (ATK, NYT)
- Flour, beaten egg, then crumbs mixed with grated cheese pressed on firmly (ATK, NYT)
- Fried two at a time in hot oil 2-3 min per side until golden and drained on a rack (ATK, NYT); served with a lemon-dressed leaf salad and lemon wedges (NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-breaded-beef-cutlets-lemon-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
