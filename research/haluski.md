# Research: Haluski (Buttery Cabbage and Egg Noodles)
Dish: Haluski / flavour: Classic. Private file, not published.

## Sources actually opened
- [Haluski (NYT Cooking)](https://cooking.nytimes.com/recipes/1023980-haluski-buttery-cabbage-and-noodles) [Tier 2 (locked list): NYT Cooking]: Onion lightly browned in butter; 900 g cabbage covered on medium-low 35-40 min, browning welcome; 340 g wide egg noodles; reserved pasta water and a last tablespoon of butter stirred through. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pittsburgh-Style Haluski (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16013-pittsburgh-style-haluski) [Tier 1 (locked list): America's Test Kitchen]: Cabbage and onions covered 15 min, then uncovered about 25 min until deep golden and sticky; noodles tossed with the cabbage and butter; dill and sour cream. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Cabbage covered 30 min then uncovered 10-15 min to brown.
- Bacon left out; 0.75 tsp salt in the cabbage; pasta water 0.8 % (04-P1).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 55 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/haluski-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for cabbage and noodles; the method rests on the locked-list sources above.
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
