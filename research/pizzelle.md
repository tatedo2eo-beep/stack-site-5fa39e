# Research: Pizzelle (Italian Waffle Cookies)
Dish: Pizzelle / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pizzelle (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/pizzelle-recipe) [Tier 1 (locked list): King Arthur Baking]: 3 eggs, sugar, salt and vanilla; 210 g flour and 2 tsp baking powder; melted butter; cooked in a pizzelle iron. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Aunt Phillomena's Pizzelle (NYT Cooking)](https://cooking.nytimes.com/recipes/1017035-aunt-phillomenas-pizzelle) [Tier 2 (locked list): NYT Cooking]: 3 eggs and sugar beaten 3-5 min; cooled melted butter; flour, baking powder and salt; more flour if the batter is thin. (Its anise flavouring is left out here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Lemon zest and vanilla instead of anise extract (alcohol-free).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (30). Nutrition worked from USDA FDC (see content/notes/pizzelle-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K3 (melted or browned butter).
Changes made:
- icing sugar, to dust: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine sea salt or table salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
