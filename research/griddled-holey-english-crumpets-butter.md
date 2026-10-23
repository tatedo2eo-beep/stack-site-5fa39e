# Research: Griddled Holey English Crumpets with Butter
Dish: Crumpet / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crumpets (NYT Cooking)](https://cooking.nytimes.com/recipes/1024837-crumpets) [Tier 2 (locked list): NYT Cooking]: A loose yeast batter of milk, flour and salt, with baking powder added before cooking in buttered rings on a griddle until the tops are full of holes. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crumpets (ATK)](https://www.americastestkitchen.com/recipes/12394-crumpets) [Tier 1 (locked list): America's Test Kitchen]: All-purpose and cake flours with instant yeast and baking powder in warm water; cooked in a skillet until bubbles cover the surface and the top sets; served with salted butter and jam. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Half milk, half water and part bread flour for chew.
- Baking powder stirred in after the rise, as both sources.
- Ring-cooked with a lid for the last few minutes so the tops set.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/griddled-holey-english-crumpets-butter-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- caster sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
