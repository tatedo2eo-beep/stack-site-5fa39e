# Research: Crisp Fried Squid Rings with Garlic Tomato Dip
Dish: Calamari / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fried Calamari (NYT Cooking)](https://cooking.nytimes.com/recipes/1023081-fried-calamari) [Tier 2 (locked list): NYT Cooking]: Squid rings soaked briefly in salted milk; dredged in flour, cornstarch and baking powder with paprika; fried in batches at about 190 °C for 1-3 min; stirred only after the coating sets; lemon and marinara. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fried Calamari (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12220-fried-calamari) [Tier 1 (locked list): America's Test Kitchen]: Squid tossed in salted milk, then flour, baking powder and pepper; coated pieces rested 10 min on a rack; fried in 2 batches at 175 °C for exactly 3 min; kept warm in a low oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Squid soaked briefly in salted milk (both); flour, cornflour and baking powder coating (both), rested 10 min on a rack (ATK); fried in batches at 180 °C for 2-3 min (both, between their 175 and 190 °C); kept warm in a low oven (ATK); garlic-tomato dip and lemon to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-fried-squid-rings-tomato-dip-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
