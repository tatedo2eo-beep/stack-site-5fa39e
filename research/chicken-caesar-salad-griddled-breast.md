# Research: Chicken Caesar Salad with Griddled Chicken
Dish: Caesar / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Classic Chicken Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/186-classic-chicken-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Oven-baked garlic-oil croutons; chicken breasts seasoned and cooked under high heat until browned and firm, rested and sliced crosswise; lettuce tossed with most of the dressing and plated, chicken tossed with the rest and arranged on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10919-chicken-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Mayonnaise-based Caesar dressing with lemon, garlic, anchovies and pepper (no raw yolk); romaine tossed with croutons, Parmesan and two-thirds of the dressing; sliced chicken tossed in the rest and laid on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Caesar Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1013980-chicken-caesar-salad) [Tier 2 (locked list): NYT Cooking]: Garlic and anchovy mashed to a paste with salt in a mortar, lemon added, oil whisked in; romaine, chicken, croutons and Parmesan tossed shortly before serving; herbs and more Parmesan on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Worcestershire sauce, Dijon mustard, wine vinegar and raw or coddled egg yolk used by some sources are left out (and food safety): a mayonnaise base and mustard powder take their place.

## Own cooking judgment
- Chicken breasts seared over high heat until browned, rested and sliced (ATK 186; griddle pan here)
- Lettuce tossed with most of the dressing, chicken with the rest on top (ATK 186, ATK 10919)
- Garlic and anchovy mashed to a paste with lemon (NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-caesar-salad-griddled-breast-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
