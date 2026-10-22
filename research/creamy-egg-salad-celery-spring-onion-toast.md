# Research: Creamy Egg Salad with Celery, Spring Onion and Toast
Dish: Egg salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Egg Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/627-classic-egg-salad) [Tier 1 (locked list): America's Test Kitchen]: Eggs covered with water, brought to the boil, then off the heat covered 10 min, iced 5 min, peeled and diced; mixed with mayonnaise, red onion, parsley, celery, mustard, lemon juice, salt and pepper; can be refrigerated overnight. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Egg Salad Sandwich (Serious Eats)](https://www.seriouseats.com/the-best-egg-salad-recipe) [Tier 1 (locked list): Serious Eats]: Hard steamed eggs chilled and peeled, combined with mayonnaise, lemon zest and juice, celery, scallions and parsley and squeezed by hand to the desired texture; seasoned generously; served with bread, lettuce and radishes. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1024621-egg-salad) [Tier 2 (locked list): NYT Cooking]: Hard-boiled eggs chopped and mixed with mayonnaise, optional dill, scallions or chives, mustard, salt and pepper, breaking up the yolks with a spoon; served on toast or with crackers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs hard-cooked, chilled in iced water and peeled (ATK, SE, NYT)
- Chopped or crushed eggs mixed with mayonnaise, celery, spring onion, parsley and lemon (ATK, SE, NYT)
- Seasoned and served with bread or toast and lettuce; refrigerated (ATK, SE, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/creamy-egg-salad-celery-spring-onion-toast-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
