# Research: Rich Dark Chocolate Tart
Dish: Chocolate tart / flavour: Classic. Private file, not published.

## Sources actually opened
- [Rich Chocolate Tart (ATK)](https://www.americastestkitchen.com/recipes/7490-rich-chocolate-tart) [Tier 1 (locked list): America's Test Kitchen]: Processor pastry bound with yolk and cream, pressed into a 23 cm tin and blind baked; cream heated with espresso powder and salt poured over bittersweet chocolate, softened butter and beaten eggs stirred in, baked low until the edges set; optional chocolate glaze. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Big Chocolate Tart (NYT Cooking)](https://cooking.nytimes.com/recipes/1024904-big-chocolate-tart) [Tier 2 (locked list): NYT Cooking]: Press-in cocoa crust baked dry; cream and salt heated, chocolate melted in, eggs, condensed milk and vanilla stirred in, baked at about 163 °C 20-25 min until the centre barely wiggles; cooled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Yolk-and-cream pastry blind baked at 190 °C.
- Cream, espresso, chocolate, butter and 2 eggs.
- Baked at 150 °C until only the barest wobble; cooled 2 h.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 55 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/rich-dark-chocolate-tart-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
