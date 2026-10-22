# Research: Madeleines
Dish: Madeleines (cake-like) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Madeleines (NYT Cooking)](https://cooking.nytimes.com/recipes/1015598-madeleines) [Tier 2 (locked list): NYT Cooking]: Sugar, flour, baking powder, salt and orange zest; eggs stirred in without much air; melted butter; batter rested before baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Vanilla Madeleine Cookies (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/vanilla-madeleine-cookies-recipe) [Tier 1 (locked list): King Arthur Baking]: Eggs, sugar and salt beaten until light and very thick; flour folded in, then cooled melted butter; buttered and floured tins. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Madeleines (Serious Eats)](https://www.seriouseats.com/madeleines-6951118) [Tier 1 (locked list): Serious Eats]: Flour, sugar, 1/2 tsp baking powder and salt whisked with eggs; melted butter; batter chilled, then baked hot for the hump. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Honey and lemon zest; batter chilled at least 1 h.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 22 min against the step times.
- Quantities checked against servings (20). Nutrition worked from USDA FDC (see content/notes/madeleines-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C4 (crisp skin); 02-C5 (wings); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K3 (melted or browned butter); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- honey: 1 tbsp → 21 g (CHECKLIST 1, weights in grams)
- plain flour, for the tins: 1 tbsp → 8 g (CHECKLIST 1, weights in grams)
- icing sugar, to dust: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
