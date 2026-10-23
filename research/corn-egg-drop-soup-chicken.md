# Research: Corn Egg Drop Soup with Chicken
Dish: Egg drop soup / flavour: Corn egg drop. Private file, not published.

## Sources actually opened
- [Chinese Corn and Chicken Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13991-chinese-corn-and-chicken-soup) [Tier 1 (locked list): America's Test Kitchen]: Small pieces of chicken thigh mixed with water, cornstarch, soy sauce and baking soda; half the corn blended with water and strained into the pan; broth, salt, white pepper and remaining kernels simmered; chicken added; broth-cornstarch slurry; eggs beaten with water poured in a stream. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Drop Corn Soup (Serious Eats)](https://www.seriouseats.com/corn-egg-drop-soup-recipe-12068291) [Tier 1 (locked list): Serious Eats]: Fresh corn grated and the cobs scraped and simmered into a quick corn stock; grated corn cooked in the stock with a little sugar and salt; thickened with a cornstarch slurry; one beaten egg drizzled in to form ribbons. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Drop Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1017284-egg-drop-soup) [Tier 2 (locked list): NYT Cooking]: Chicken stock infused 20 minutes with garlic, coriander, ginger and peppercorns, strained and salted; cornstarch slurry whisked in; eggs beaten with a little cornstarch poured through fork tines into a gently stirred simmer, left 10 seconds, then broken up; scallions and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Changes: deli ham left out (ATK). Sugar left out because the corn is sweet enough; baking soda dropped from the chicken mix.

## Own cooking judgment
- Half the corn blended and strained for a smooth, sweet body, the rest left whole (ATK, SE)
- Small pieces of chicken coated in cornflour and soy so they stay tender (ATK)
- Broth-cornflour slurry, then eggs poured in a thin stream (ATK, SE, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/corn-egg-drop-soup-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
