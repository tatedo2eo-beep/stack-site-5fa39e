# Research: Chewy Chocolate Chip Cookies
Dish: Drop (chocolate chip, oatmeal) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in batch 1 from own cooking judgment before the research rule existed. I did not open recipe websites for it, so none are listed. Facts used: USDA FoodData Central for nutrition and USDA FSIS for safe temperatures.

## Own cooking judgment
- Method, ratios and quantities from own cooking knowledge.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 36 min against the step times.
- Quantities checked against servings (18). Nutrition worked from USDA FDC (see content/notes/chewy-chocolate-chip-cookies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 0. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K1 (ratios); 03-K5 (dough rest); 03-K6 (doneness); 03-K8 (brownies); 03-K10 (raw dough); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3.0 g
- Added the do-not-eat-raw-dough note (03-K10)
- Oven preheat moved into the chilling step so it gets at least 20 min (CHECKLIST Preheat)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
