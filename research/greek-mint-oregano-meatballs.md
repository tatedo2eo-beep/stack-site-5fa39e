# Research: Greek Mint and Oregano Meatballs with Tzatziki
Dish: Meatballs / flavour: Greek (mint-oregano). Private file, not published.

## Sources actually opened
- [Greek Meatballs (NYT Cooking)](https://cooking.nytimes.com/recipes/1025486-greek-meatballs) [Tier 2 (locked list): NYT Cooking]: Grated onion drained; fresh mint and parsley, dried oregano and coriander; meatballs browned and served with yoghurt sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Greek Meatballs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12161-greek-meatballs) [Tier 1 (locked list): America's Test Kitchen]: Lamb mixture with chopped mint, dried oregano, garlic, lemon zest, cumin and coriander, bound with a cracker-and-milk paste; roasted 20 min; served with a yoghurt sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Drained grated onion, mint and oregano (NYT, ATK); beef and lamb mix is my choice; shallow-fried; tzatziki to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/greek-mint-oregano-meatballs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
