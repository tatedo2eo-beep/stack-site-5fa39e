# Research: Balsamic Honey Vinaigrette
Dish: Vinaigrette / flavour: Balsamic. Private file, not published.

## Sources actually opened
- [Balsamic Vinaigrette (NYT Cooking)](https://cooking.nytimes.com/recipes/1024630-balsamic-vinaigrette) [Tier 2 (locked list): NYT Cooking]: Balsamic vinegar, honey, mustard, garlic, salt and pepper whisked, olive oil added gradually until thick. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Balsamic Vinaigrette (Serious Eats)](https://www.seriouseats.com/balsamic-vinaigrette-recipe-12059423) [Tier 1 (locked list): Serious Eats]: Balsamic, shallot, garlic, salt and pepper rested 10 min, then mustard and honey, then olive oil whisked in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Balsamic-Mustard Vinaigrette (ATK)](https://www.americastestkitchen.com/recipes/4889-balsamic-mustard-vinaigrette) [Tier 1 (locked list): America's Test Kitchen]: Balsamic vinegar, shallot, mustard and a little mayonnaise with oil drizzled in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Shallot and garlic steeped in balsamic.
- Honey and mild yellow mustard.
- Olive oil whisked in.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/balsamic-honey-vinaigrette-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- honey: 2 tsp → 14 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.375 tsp fine salt -> 2 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
