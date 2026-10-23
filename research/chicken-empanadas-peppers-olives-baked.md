# Research: Chicken Empanadas with Peppers and Olives
Dish: Empanadas / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Empanadas de Pollo (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15386-empanadas-de-pollo-chicken-turnovers) [Tier 1 (locked list): America's Test Kitchen]: Onion, bell pepper, tomato paste, shredded chicken simmered in broth with paprika and cumin, green olives; egg-washed and baked. _(curl 200; JSON-LD recipe read)_
- [Easy Chicken Empanadas (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7199-easy-chicken-empanadas) [Tier 1 (locked list): America's Test Kitchen]: Ground chicken with onion, cumin and olives in pie dough; crimped and baked. _(curl 200; JSON-LD recipe read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Raw thighs simmered to 74 °C and shredded in the pan; homemade dough; celery declared for the stock.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 55 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/chicken-empanadas-peppers-olives-baked-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
