# Research: Reverse-Seared Rib-Eye Steak with Thyme and Garlic
Dish: Reverse-sear steak / flavour: Classic. Private file, not published.

## Sources actually opened
- [Reverse-Seared Rib-Eye Steak (NYT Cooking)](https://cooking.nytimes.com/recipes/788467857-reverse-seared-rib-eye-steak) [Tier 2 (locked list): NYT Cooking]: Thick rib-eye salted ahead; very low oven on a wire rack until the centre is warm; rest while the grill or pan heats; very hot sear about 90 s a side; go by the thermometer, not the clock. (Its doneness guidance is replaced by the site rule of 63 °C plus a rest.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Reverse-Seared Steak (NYT Cooking)](https://cooking.nytimes.com/recipes/1023176-reverse-seared-steak) [Tier 2 (locked list): NYT Cooking]: Steak seasoned generously; cooked gently by indirect heat to a low internal temperature; rested; then seared over high direct heat until crusty and dark, checking with a probe. (Its doneness guidance is replaced by the site rule of 63 °C plus a rest.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Salted ahead, slow oven on a wire rack, rest, then a very hot short sear guided by a thermometer (NYT 788467857, NYT 1023176); thyme and garlic butter basting to match the photo; finished to at least 63 °C plus a 3 min rest by site rule.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 70 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/reverse-seared-rib-eye-steak-thyme-garlic-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
