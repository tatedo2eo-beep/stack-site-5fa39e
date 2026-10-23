# Research: Buttermilk Panna Cotta with Raspberry Coulis
Dish: Panna cotta / flavour: Buttermilk. Private file, not published.

## Sources actually opened
- [Buttermilk Panna Cotta (ATK)](https://www.americastestkitchen.com/recipes/12595-buttermilk-panna-cotta) [Tier 1 (locked list): America's Test Kitchen]: Cream warmed with sugar and the bloomed setting powder dissolved in, buttermilk whisked in off the heat, poured into ramekins and chilled until set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gramercy Tavern's Panna Cotta (NYT Cooking)](https://cooking.nytimes.com/recipes/4894-gramercy-taverns-panna-cotta) [Tier 2 (locked list): NYT Cooking]: Cream and sugar warmed until dissolved, bloomed setting powder stirred in, then buttermilk and salt; chilled 2 h or more, unmoulded and served with fruit. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bovine setting powder only. Buttermilk added to cooled cream to avoid curdling. Raspberry coulis to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 5 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/buttermilk-panna-cotta-raspberry-coulis-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C10 (buttermilk marinade).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
