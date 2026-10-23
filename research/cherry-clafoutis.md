# Research: Cherry Clafoutis
Dish: Clafoutis / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cherry Clafouti (ATK)](https://www.americastestkitchen.com/recipes/8422-cherry-clafouti) [Tier 1 (locked list): America's Test Kitchen]: Halved cherries roasted until dry, tossed with lemon and dusted with flour and cinnamon; batter of 4 eggs, sugar, vanilla, salt, flour, cream and milk poured into a preheated buttered skillet, cherries scattered over, baked until puffed and the centre reads about 90 °C. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cherry Clafoutis (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/cherry-clafoutis-recipe-2116609) [Tier 2 (locked list): Food Network Kitchen]: Pitted cherries spread in a buttered round dish, covered with a whisked batter of eggs, dairy, sugar and flour, sprinkled with sugar and dotted with butter; baked about 40 min until puffed and golden; dusted with icing sugar. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cherries roasted 15 min first.
- Batter poured into a preheated buttered pan.
- 190 °C until puffed and the centre reads about 90 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 45 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/cherry-clafoutis-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- plain flour: 2 tsp → 5 g (CHECKLIST 1, weights in grams)
- caster sugar or icing sugar, to finish: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
