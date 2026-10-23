# Research: Mixed Berry Frozen Yoghurt
Dish: Frozen yogurt / flavour: Berry. Private file, not published.

## Sources actually opened
- [Strawberry Frozen Yogurt (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8897-strawberry-frozen-yogurt) [Tier 1 (locked list): America's Test Kitchen]: As the plain version, with fruit purée added. (The source uses gelatine; we leave it out.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Frozen Yogurt (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8876-frozen-yogurt) [Tier 1 (locked list): America's Test Kitchen]: Whole-milk yoghurt drained 8-12 h to lose about 300 ml whey, sweetened with sugar, golden syrup and salt, churned. (The source uses gelatine; we leave it out.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Mixed strawberry and raspberry purée, sieved.
- No gelatine.
- Berry garnish as in the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/mixed-berry-frozen-yogurt-swirl-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
