# Research: Creamy Grits with Butter and Chives
Dish: Grits / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basic Old-Fashioned Grits (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/basic-old-fashioned-grits-8122522) [Tier 2 (locked list): Food Network Kitchen]: Old-fashioned grits whisked gradually into simmering salted water, cooked on medium-low about 20 min and thinned with water as needed; butter and pepper stirred in. _(WebFetch 200; full recipe page text read)_
- [Extra-Cheesy Grits (ATK)](https://www.americastestkitchen.com/recipes/15656-extra-cheesy-grits) [Tier 1 (locked list): America's Test Kitchen]: Milk and water brought to a boil with salt and pepper, grits whisked in slowly, covered and simmered on low about 25 min, whisking often and thinning with water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Half milk, half water (method only from the second source; its cheeses and sauces left out).
- Covered low simmer 20-25 min with frequent whisking.
- Butter and chives to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/creamy-grits-butter-chives-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
