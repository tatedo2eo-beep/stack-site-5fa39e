# Research: Black Forest Cake
Dish: Black Forest / flavour: Classic. Private file, not published.

## Sources actually opened
- [Black Forest Cake (Serious Eats)](https://www.seriouseats.com/black-forest-cake-recipe-11905530) [Tier 1 (locked list): Serious Eats]: Cherries poached in sugar syrup; chocolate sponge layers soaked with syrup; whipped cream and chocolate shavings. (Its kirsch is not used here; cherry juice replaces it.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Black Forest Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/1020807-black-forest-cake) [Tier 2 (locked list): NYT Cooking]: Dutch cocoa whisked into boiling water; oil and buttermilk batter; two base-lined tins; cherries and whipped cream between split layers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Black Forest Cake (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/black-forest-cake-recipe) [Tier 1 (locked list): King Arthur Baking]: Dutch cocoa and cake flour layers with baking powder and bicarbonate; cherry filling thickened with starch; stabilised whipped cream. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Alcohol-free: cherry juice from the jar for soaking (no kirsch).
- Starch-thickened cherry filling (KA); bloomed-cocoa oil cake (NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 35 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/black-forest-cake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C10 (buttermilk marinade); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK3 (creaming); 05-CK6 (sponge and chiffon); 05-CK12 (buttercreams and cream cheese frosting); 05-CK13 (chocolate and ganache); 05-CK1 (base ratios); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
