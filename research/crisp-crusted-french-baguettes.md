# Research: Crisp-Crusted French Baguettes
Dish: Baguette / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Baguettes (NYT Cooking)](https://cooking.nytimes.com/recipes/1024403-classic-baguettes) [Tier 2 (locked list): NYT Cooking]: An overnight poolish of flour, water and a pinch of yeast; dough of 10-12% protein flour, folded, shaped into three baguettes, scored and baked with steam. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bakery-Style French Baguettes (ATK)](https://www.americastestkitchen.com/recipes/501-bakery-style-french-baguettes) [Tier 1 (locked list): America's Test Kitchen]: Sponge with a little yeast, dough of unbleached all-purpose flour, long fermentation, couche proofing, slashes and steam for a crackling crust. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade French Baguettes (Serious Eats)](https://www.seriouseats.com/homemade-baguettes-recipe-6755245) [Tier 1 (locked list): Serious Eats]: High-protein all-purpose flour with a little whole wheat, about 72-80% water, folds during bulk fermentation, shaped and baked hot with steam. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Poolish and three-loaf yield from NYT; no egg-white glaze.
- Steam from boiling water in a tin on the oven floor.
- Baked to 96 °C inside.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 25 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/crisp-crusted-french-baguettes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
