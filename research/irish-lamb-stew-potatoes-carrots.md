# Research: Irish Lamb Stew with Potatoes and Carrots
Dish: Irish stew / flavour: Classic. Private file, not published.

## Sources actually opened
- [Irish Stew (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4121-irish-stew) [Tier 1 (locked list): America's Test Kitchen]: Lamb shoulder browned in 2 batches; onions browned; flour; water; thyme; covered oven braise at low temperature; potatoes; parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Irish Stew (NYT Cooking)](https://cooking.nytimes.com/recipes/1017275-irish-stew) [Tier 2 (locked list): NYT Cooking]: Lamb shoulder browned; onions and carrots; broth and thyme; potatoes added; oven-braised; fat skimmed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Irish Stew with Carrots and Turnips (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4122-irish-stew-with-carrots-and-turnips) [Tier 1 (locked list): America's Test Kitchen]: Same method with carrots and turnips added partway through the braise. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Lamb shoulder browned in 2 batches, browned onions, flour, low oven braise, parsley (ATK 4121); half beef stock and skimming (NYT); carrots and potatoes added partway through (ATK 4122, NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 150 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/irish-lamb-stew-potatoes-carrots-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
