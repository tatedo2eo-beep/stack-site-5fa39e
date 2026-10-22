# Research: Diner-Style Home Fries
Dish: Home fries / flavour: Classic. Private file, not published.

## Sources actually opened
- [Diner-Style Home Fries (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/556-diner-style-home-fries) [Tier 1 (locked list): America's Test Kitchen]: Onion browned separately; 1 cm cubes brought just to the boil in salted water and drained; fried in butter and oil in one layer, turned as each side browns; paprika at the end. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Home Fries (NYT Cooking)](https://cooking.nytimes.com/recipes/1023355-home-fries) [Tier 2 (locked list): NYT Cooking]: Cubes cooked covered in a little oil, salt and water in cast iron, then uncovered and turned until the water evaporates and they crisp; do not crowd the pan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bring-to-the-boil par-cook and separate onion (ATK); one layer, do not crowd (NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/diner-style-home-fries-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt, for the water -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
