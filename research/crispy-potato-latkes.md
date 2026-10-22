# Research: Crispy Potato Latkes
Dish: Latkes/potato pancakes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crispy Potato Latkes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7214-crispy-potato-latkes) [Tier 1 (locked list): America's Test Kitchen]: Grated potato and onion salted and wrung out in a towel; the liquid left to settle and its starch returned to the mix; eggs and parsley; fried in batches and kept warm in a low oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Potato Latkes (NYT Cooking)](https://cooking.nytimes.com/recipes/1015533-classic-potato-latkes) [Tier 2 (locked list): NYT Cooking]: Grated potato and onion squeezed dry; eggs, flour, salt and baking powder; heaped spoonfuls flattened in 5 mm hot oil, about 5 min a side; salted while warm. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pure Potato Latkes (NYT Cooking)](https://cooking.nytimes.com/recipes/1021682-pure-potato-latkes) [Tier 2 (locked list): NYT Cooking]: Potato-only latkes shaped from grated potato and fried until crisp; served with soured cream. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Reserved potato starch as binder (ATK); 180 °C shallow fry; apple sauce and soured cream to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crispy-potato-latkes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G9 (eggs cooked until set, 71 °C for egg dishes); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour or matzo meal: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
