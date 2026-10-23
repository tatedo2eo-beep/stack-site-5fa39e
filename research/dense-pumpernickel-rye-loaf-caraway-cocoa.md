# Research: Dense Pumpernickel Rye Loaf with Caraway
Dish: Rye/pumpernickel / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Pumpernickel Bread (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/classic-pumpernickel-bread-recipe) [Tier 1 (locked list): King Arthur Baking]: Cornmeal cooked in water with molasses, butter, salt, sugar, caraway and cocoa; pumpernickel and wholewheat flour with mashed potato and yeast; single rise in a loaf tin; baked at about 190 °C to 93 °C inside. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source.

## Own cooking judgment
- Dark rye flour in place of pumpernickel meal.
- Metric quantities rounded.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 60 min against the step times.
- Quantities checked against servings (20). Nutrition worked from USDA FDC (see content/notes/dense-pumpernickel-rye-loaf-caraway-cocoa-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
