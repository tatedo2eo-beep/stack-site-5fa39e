# Research: Classic Crème Caramel
Dish: Crème caramel/flan / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Crème Caramel (ATK)](https://www.americastestkitchen.com/recipes/1016-classic-creme-caramel) [Tier 1 (locked list): America's Test Kitchen]: Caramel of sugar, water, corn syrup and lemon juice poured into 8 ramekins; milk and light cream heated and whisked gently into 3 eggs, 2 yolks and sugar with vanilla and salt, strained, baked covered in a water bath at about 175 °C until a knife comes out clean; cooled and unmoulded. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Caramel Custard (NYT Cooking)](https://cooking.nytimes.com/recipes/4037-caramel-custard) [Tier 2 (locked list): NYT Cooking]: Dry caramel poured into a mould; milk with vanilla stirred into whole eggs, yolks and sugar, strained and baked in a water bath until set; chilled and turned out with its caramel. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Lemon juice in the caramel, no corn syrup.
- Eggs plus yolks, milk and cream, strained, foil-covered water bath at 165 °C to about 80 °C.
- Chilled 4 h, unmoulded.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 55 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/classic-creme-caramel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
