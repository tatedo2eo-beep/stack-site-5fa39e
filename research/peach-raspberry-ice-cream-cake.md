# Research: Peach and Raspberry Ice Cream Cake
Dish: Ice-cream cake / flavour: Raspberry. Private file, not published.

## Sources actually opened
- [Peach-Raspberry Ice Cream Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/1018259-peach-raspberry-ice-cream-cake) [Tier 2 (locked list): NYT Cooking]: A thin sheet sponge cut into strips and layered in a loaf tin with a no-churn peach ice cream (jam, evaporated milk, whipped cream, macerated peach) and sugared raspberries, frozen and topped with fresh fruit. _(curl 200 or fetched; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source.

## Own cooking judgment
- Metric quantities.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 12 min against the step times.
- Quantities checked against servings (11). Nutrition worked from USDA FDC (see content/notes/peach-raspberry-ice-cream-cake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming).
Changes made:
- caster sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch salt -> 0.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
