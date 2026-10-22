# Research: Vietnamese Shaking Beef with Watercress and Lime-Pepper Dip
Dish: Bò lúc lắc / flavour: Classic. Private file, not published.

## Sources actually opened
- [Shaking Beef (Bo Luc Lac) (NYT Cooking)](https://cooking.nytimes.com/recipes/1014031-shaking-beef-bo-luc-lac) [Tier 2 (locked list): NYT Cooking]: Garlic, soy, sugar marinade about 1 h; very hot pan; beef seared then shaken; red onion and vinegar salad with lettuce and tomato. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bo Luc Lac / Shaking Beef (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11895-bo-luc-lac-shaking-beef) [Tier 1 (locked list): America's Test Kitchen]: Fish sauce and soy marinade 15 min; seared in batches; butter and red onion; served over watercress with a lime-salt-pepper dipping sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Short soy-fish sauce-sugar marinade, two batches in a very hot pan, shake (NYT, ATK); butter and red onion, watercress and lime-salt-pepper dip (ATK); vinegar-dressed tomatoes (NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/vietnamese-shaking-beef-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- light brown sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
