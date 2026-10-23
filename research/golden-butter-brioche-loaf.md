# Research: Golden Butter Brioche Loaf
Dish: Brioche / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Brioche (NYT Cooking)](https://cooking.nytimes.com/recipes/1018927-classic-brioche) [Tier 2 (locked list): NYT Cooking]: Milk, sugar, yeast, flour and many eggs kneaded to a smooth dough, then a large weight of butter worked in gradually; chilled before shaping into loaves. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [No-Knead Brioche (ATK)](https://www.americastestkitchen.com/recipes/7333-no-knead-brioche) [Tier 1 (locked list): America's Test Kitchen]: Bread flour, eggs, sugar and melted butter, rested cold overnight, shaped into balls in loaf pans and baked to a set crumb. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Brioche (Serious Eats)](https://www.seriouseats.com/brioche-loaf-recipe-6755249) [Tier 1 (locked list): Serious Eats]: Cold flour, milk and eggs mixed first, softened butter added in stages for a silky dough, cold-fermented, shaped and egg-washed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Butter worked in a little at a time after the gluten has developed.
- Overnight chill so the soft, rich dough shapes cleanly.
- Eight balls in one tin for a pull-apart top; salt 1 1/2 tsp for 12 slices.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 35 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/golden-butter-brioche-loaf-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
