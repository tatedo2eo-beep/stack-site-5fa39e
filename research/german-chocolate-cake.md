# Research: German Chocolate Cake with Coconut-Pecan Filling
Dish: German chocolate cake / flavour: Classic. Private file, not published.

## Sources actually opened
- [German Chocolate Cake (Serious Eats)](https://www.seriouseats.com/german-chocolate-cake-recipe-11916175) [Tier 1 (locked list): Serious Eats]: Toasted coconut and pecans in a cooked custard filling of milk, brown sugar and yolks; filling made first so it cools. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [German Chocolate Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/1018497-german-chocolate-cake) [Tier 2 (locked list): NYT Cooking]: Three base-lined 20 cm tins; creamed butter batter with buttermilk; coconut-pecan filling between layers and on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Cooked coconut-pecan custard filling made first (SE), taken to 80 °C; three layers with bare sides; whites folded into the batter for lightness.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 50 min + cook 30 min against the step times.
- Quantities checked against servings (14). Nutrition worked from USDA FDC (see content/notes/german-chocolate-cake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C10 (buttermilk marinade); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK3 (creaming); 05-CK5 (whipping whites); 05-CK6 (sponge and chiffon); 05-CK13 (chocolate and ganache); 05-CK1 (base ratios); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine sea salt or table salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
