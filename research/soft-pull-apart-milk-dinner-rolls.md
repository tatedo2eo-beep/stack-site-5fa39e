# Research: Soft Pull-Apart Milk Dinner Rolls
Dish: Dinner rolls / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fluffy Dinner Rolls (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8660-fluffy-dinner-rolls) [Tier 1 (locked list): America's Test Kitchen]: Cooked water-and-flour paste whisked with cold milk and egg, bread flour and yeast mixed and rested, sugar and salt then softened butter kneaded in, risen, shaped into 12 balls in a 9-inch round pan, proofed and baked. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Buttery Pull-Apart Cloverleaf Dinner Rolls (Serious Eats)](https://www.seriouseats.com/cloverleaf-rolls-recipe-11849929) [Tier 1 (locked list): Serious Eats]: Enriched bread-flour dough with butter, egg, milk and sugar kneaded to windowpane, risen about 90 minutes, divided into small balls, proofed in a buttered pan and baked, then brushed with melted butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Dinner Rolls (Serious Eats)](https://www.seriouseats.com/crusty-dinner-rolls-recipe) [Tier 1 (locked list): Serious Eats]: Cooked flour paste (yukone) added to the dough for a moist, soft crumb; dough divided into 12 rolls of about 60 g. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cooked flour paste for a soft, moist crumb (ATK/SE)
- 12 rolls in a 23 cm round tin
- Baked to 88-90 °C in the centre

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 30 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/soft-pull-apart-milk-dinner-rolls-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
