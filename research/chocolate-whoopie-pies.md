# Research: Chocolate Whoopie Pies
Dish: Whoopie pie / flavour: Classic. Private file, not published.

## Sources actually opened
- [Whoopie Pies (NYT Cooking)](https://cooking.nytimes.com/recipes/1012447-whoopie-pies) [Tier 2 (locked list): NYT Cooking]: Butter and brown sugar creamed; egg and vanilla; flour, cocoa, bicarbonate and salt alternated with buttermilk; mounds baked and sandwiched with a whipped filling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Double Chocolate Whoopie Pies (Serious Eats)](https://www.seriouseats.com/double-chocolate-whoopie-pie-recipes) [Tier 1 (locked list): Serious Eats]: Flour, sugar, cocoa, baking powder and bicarbonate with milk, oil, egg and butter; scooped onto lined trays; two shelves. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Creamed brown sugar and buttermilk batter (NYT); gelatine-free whipped butter filling instead of marshmallow crème.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 24 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/chocolate-whoopie-pies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C10 (buttermilk marinade); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK3 (creaming); 05-CK12 (buttercreams and cream cheese frosting); 05-CK13 (chocolate and ganache); 05-CK1 (base ratios); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Salt given in grams (06-G1): 0.125 tsp fine sea salt or table salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
