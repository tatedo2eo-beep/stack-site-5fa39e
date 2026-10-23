# Research: Fluffy Tricolour Quinoa with Parsley and Lemon
Dish: Quinoa / flavour: Classic. Private file, not published.

## Sources actually opened
- [Light Quinoa Pilaf (ATK)](https://www.americastestkitchen.com/recipes/5325-light-quinoa-pilaf) [Tier 1 (locked list): America's Test Kitchen]: Rinsed quinoa toasted about 5 min until lightly browned, simmered covered with broth and lemon zest 16-18 min, rested 10 min with a towel under the lid, fluffed with thyme and lemon juice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Perfect Quinoa (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/perfect-quinoa-8668146) [Tier 2 (locked list): Food Network Kitchen]: Quinoa rinsed in a sieve, simmered covered with 2:1 water or broth, olive oil, a bay leaf and salt for 15 min, rested 5 min and fluffed. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rinsed, then toasted dry in a little oil.
- About 1.8:1 water with a bay leaf, simmered covered 15 min, rested 10 min under a towel.
- Lemon served as wedges only.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/fluffy-tricolour-quinoa-parsley-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
