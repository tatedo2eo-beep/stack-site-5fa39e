# Research: Creamy Chicken Salad with Celery, Lemon and Herbs
Dish: Chicken salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [Best Chicken Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1018211-best-chicken-salad) [Tier 2 (locked list): NYT Cooking]: Chicken poached very gently (pan taken off the heat) so it stays juicy; dressing of mayonnaise with sour cream, lemon, celery and herbs; chilled about 4 h. (Its optional Dijon is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Creamy Chicken Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1251-classic-creamy-chicken-salad) [Tier 1 (locked list): America's Test Kitchen]: Cooked chicken chopped and bound with mayonnaise and lemon juice, with celery, spring onion and parsley; chilled before serving. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Classic Chicken Salad (Serious Eats)](https://www.seriouseats.com/the-best-classic-chicken-salad-recipe) [Tier 1 (locked list): Serious Eats]: Chicken cooked at a low, controlled temperature for tenderness, then mixed with mayonnaise, lemon zest and juice, celery and tarragon. (Its Dijon is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Salami, wine vinegar and Dijon mustard used by some sources are left out: cider vinegar, lemon and mustard powder take their place.

## Own cooking judgment
- Gentle off-boil poaching for juicy chicken (NYT; SE low temperature)
- Mayonnaise-sour cream-lemon dressing, chilled (NYT, ATK)
- Celery, spring onion, parsley and tarragon, lemon zest (ATK, SE); Dijon left out

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/creamy-chicken-salad-celery-herbs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt, for the poaching water -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
