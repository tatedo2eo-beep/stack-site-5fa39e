# Research: Spiced Lamb Seekh Kebabs with Mint-Coriander Chutney
Dish: Seekh kebab / flavour: Classic. Private file, not published.

## Sources actually opened
- [Seekh Kebabs (Serious Eats)](https://www.seriouseats.com/seekh-kebab-spiced-grilled-ground-beef-lamb-skewer-recipe) [Tier 1 (locked list): Serious Eats]: Toasted whole spices ground; onion-herb-ginger-chilli paste squeezed dry; kneaded about 4 min until tacky; rested; shaped as long cylinders on skewers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Seekh Kebab With Mint Chutney (NYT Cooking)](https://cooking.nytimes.com/recipes/1020472-seekh-kebab-with-mint-chutney) [Tier 2 (locked list): NYT Cooking]: Lamb with coriander, chilli powder, ginger, garlic, green chilli, garam masala and cardamom; chilled 2 h; grilled 12-15 min; mint-coriander chutney with lemon and sugar; red onion. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Toasted cumin, squeezed-dry paste, knead until tacky (SE); spice mix, chilling, mint-coriander chutney with lemon and sugar, red onion (NYT); cooked to 71 °C as minced meat.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spiced-lamb-seekh-kebabs-mint-chutney-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C9 (curry base).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
