# Research: Imam Bayildi (Braised Stuffed Aubergines)
Dish: Imam bayildi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Imam Bayildi (NYT Cooking)](https://cooking.nytimes.com/recipes/1015148-imam-bayildi) [Tier 2 (locked list): NYT Cooking]: Aubergines roasted in a hot oven until the skins shrivel and drained; onions softened in olive oil with garlic, mixed with tomatoes, parsley, dill, salt and sugar; aubergines filled and braised covered on low heat 1-1.5 hours with oil, water, sugar and lemon; served at room temperature. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Stuffed Eggplant (Imam Bayildi) (ATK)](https://www.americastestkitchen.com/recipes/5178-stuffed-eggplant-imam-bayildi) [Tier 1 (locked list): America's Test Kitchen]: Halved aubergines roasted until tender and drained; onion browned in olive oil with garlic and spices, tomatoes added; flesh pushed aside and filling mounded in; finished in the oven with parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Classic olive-oil braise with no cheese.
- Aubergines roasted and drained before stuffing.
- Served at room temperature with parsley.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 95 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/imam-bayildi-braised-stuffed-aubergines-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 2.5 tsp → 10 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
