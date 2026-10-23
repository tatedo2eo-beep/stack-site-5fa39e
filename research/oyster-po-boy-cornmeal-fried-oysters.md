# Research: Oyster Po’ Boy (Cornmeal-Fried Oysters)
Dish: Po' boy / flavour: Oyster. Private file, not published.

## Sources actually opened
- [Oyster Po’ Boys (Serious Eats)](https://www.seriouseats.com/oyster-po-boys) [Tier 1 (locked list): Serious Eats]: Cold oysters dipped in egg, coated in corn flour and Creole seasoning, fried and piled into dressed French bread. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [New Orleans Fried Oyster Po’ Boys (America’s Test Kitchen)](https://www.americastestkitchen.com/recipes/16672-new-orleans-fried-oyster-po-boys) [Tier 1 (locked list): America's Test Kitchen]: Drained oysters tossed in flour, cornmeal and cornstarch with Creole seasoning, fried hot and served on toasted French bread with mayonnaise, lettuce, tomato and pickles. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list source(s) listed above; nothing copied.

## Own cooking judgment
- Cornmeal and flour coating after an egg dip.
- Salt-free Creole seasoning.
- Lemon wedges to serve.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/oyster-po-boy-cornmeal-fried-oysters-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt, to finish -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
