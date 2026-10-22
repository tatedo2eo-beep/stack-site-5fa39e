# Research: Nashville Hot Chicken
Dish: Nashville hot chicken / flavour: Classic. Private file, not published.

## Sources actually opened
- [Nashville Hot Chicken Sandwich (Serious Eats)](https://www.seriouseats.com/nashville-hot-chicken-sandwich-recipe-8403635) [Tier 1 (locked list): Serious Eats]: Buttermilk + hot sauce brine; rest dredged chicken ~15 min so flour hydrates; oil ~175 °C; thighs to 80 °C; cayenne/brown sugar bloomed in hot oil and basted on immediately. _(read via search extract; curl got 403 bot-block)_
- [Nashville-Style Hot Chicken (Bon Appétit)](https://www.bonappetit.com/recipe/nashville-style-hot-chicken) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Heat comes from a cayenne hot oil added after frying, not from the breading; oil 163 °C; double flour dredge. _(read via search extract; curl 200)_
- [5-Ingredient Fried Chicken Sandwiches (Serious Eats)](https://www.seriouseats.com/five-ingredient-fried-chicken-sandwich-recipe) [Tier 1 (locked list): Serious Eats]: Boneless thighs; buttermilk dip; drizzle ~3 tbsp buttermilk into the flour for shaggy clumps, press on firmly; hold oil 150-177 °C after the drop. _(opened; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Boneless thighs on white bread with pickles to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/nashville-hot-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C2 (dry brine); 02-C3 (wet brine); 02-C4 (crisp skin); 02-C5 (wings); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C10 (buttermilk marinade).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3.0 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Frying hold temperature set to 150-165 °C (02-C6)
- brown sugar: 1.5 tbsp → 18 g (CHECKLIST 1, weights in grams)
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).

## Salt re-check
Re-checked 22 Oct: salt = sodium x 2.5 from the USDA rows in the nutrition note, no double counting (brine, rub and pasta-water salt are counted only for the share absorbed). Brine salt is 0.63 % of the chicken and counted at two-thirds absorbed (02-C2/06-G1 range 0.5-0.7 %); dredge 1.4 g and spice oil 0.5 g. 3.06 g per serving includes the bread and pickles served with it. Left as is.
