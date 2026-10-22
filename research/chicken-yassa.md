# Research: Chicken Yassa
Dish: Yassa / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Yassa (NYT Cooking)](https://cooking.nytimes.com/recipes/1021053-chicken-yassa) [Tier 2 (locked list): NYT Cooking]: Marinate in lime, onion, mustard and Scotch bonnet; sear the chicken; cook the onions down until soft and golden; braise together; serve with rice. _(read via search extract; curl 200)_
- [Chicken Yassa (Serious Eats)](https://www.seriouseats.com/chicken-yassa-senegalese-braised-chicken-with-caramelized-onions-5215703) [Tier 1 (locked list): Serious Eats]: Lemon/lime, onion and mustard marinade; deeply caramelised onions are the sauce; braise until tender. _(read via search extract; curl got 403 bot-block)_
- [Lemony Braised Chicken Yassa (America's Test Kitchen)](https://www.americastestkitchen.com/articles/7791-lemony-braised-chicken-yassa) [Tier 1 (locked list): America's Test Kitchen]: Lemony braise of chicken with lots of onions and mustard. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Green olives (common in Senegalese yassa and in the book photo).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 60 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-yassa-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6.0 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
