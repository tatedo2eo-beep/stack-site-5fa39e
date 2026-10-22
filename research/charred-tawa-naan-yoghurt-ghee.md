# Research: Charred Pan Naan with Yoghurt and Ghee
Dish: Naan / flavour: Classic. Private file, not published.

## Sources actually opened
- [Naan (NYT Cooking)](https://cooking.nytimes.com/recipes/1013598-naan-indian-flatbread) [Tier 2 (locked list): NYT Cooking]: Yeasted dough with sugar, salt, baking powder, milk, yoghurt, egg and oil, risen, shaped into teardrops, cooked very hot until blistered and brushed with ghee. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Naan (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6956-indian-flatbread-naan) [Tier 1 (locked list): America's Test Kitchen]: Yoghurt-enriched dough rolled thin and cooked in a very hot covered cast-iron skillet until charred in spots, then brushed with melted butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Egg-free yoghurt dough with baking powder
- Wet-side-down in a very hot pan, then flame-charred
- Brushed with ghee straight from the pan

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/charred-tawa-naan-yoghurt-ghee-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- caster sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
