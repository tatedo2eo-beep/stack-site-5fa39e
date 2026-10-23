# Research: Crispy Vegetable Spring Rolls with Sweet Chilli Dip
Dish: Spring rolls / flavour: Classic. Private file, not published.

## Sources actually opened
- [Traditional Spring Rolls (NYT Cooking)](https://cooking.nytimes.com/recipes/11974-traditional-spring-rolls) [Tier 2 (locked list): NYT Cooking]: Cabbage, chives and bean sprouts stir-fried until just wilted and drained, combined with shredded mushrooms and a thickened sauce, cooled, rolled in spring roll wrappers sealed with flour-water paste and deep-fried until golden (the original also includes pork, omitted here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lumpiang Shanghai (Serious Eats)](https://www.seriouseats.com/lumpiang-shanghai-filipino-egg-rolls-5196324) [Tier 1 (locked list): Serious Eats]: Sweet-sour dip of brown sugar, cane vinegar, banana ketchup, salt and bird's eye chiles; filling rolled into thin cylinders in spring roll wrappers set as a diamond, sides folded in, sealed and deep-fried (the original filling is pork, not used here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Vegetable-only filling for the Classic
- NYT stir-fry, drain and cool method with flour paste seal
- SE-style sweet chilli dip with tomato ketchup

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 30 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/crispy-vegetable-spring-rolls-sweet-chilli-dip-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- plain flour mixed with 3 tbsp water, to seal: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
