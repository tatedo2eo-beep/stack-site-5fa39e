# Research: Chicken Pot Pie with Puff Pastry
Dish: Chicken pot pie / flavour: Classic. Private file, not published.

## Sources actually opened
- [Easy Weeknight Chicken Pot Pie (Serious Eats)](https://www.seriouseats.com/easy-chicken-pot-pie-recipe-8715975) [Tier 1 (locked list): Serious Eats]: Brown chicken, soften carrot/celery/onion in butter, cook flour 1 min, whisk in broth and cream to thicken, peas at the end; top with puff pastry, egg wash, vent, bake at 200 °C about 30 min. _(read via search extract; curl got 403 bot-block)_
- [Skillet Chicken Pot Pie with Puff Pastry Crust (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13178-skillet-chicken-pot-pie-with-puff-pastry-crust) [Tier 1 (locked list): America's Test Kitchen]: Same roux-thickened filling made in an ovenproof skillet; puff pastry baked on top 30-35 min until puffed and golden. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Thighs instead of breast; cooling the filling 10-15 min before the pastry goes on.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 60 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-pot-pie-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Oven preheat moved to the first step (CHECKLIST Preheat)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
