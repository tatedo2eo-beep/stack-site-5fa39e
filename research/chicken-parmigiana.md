# Research: Chicken Parmigiana with Spaghetti
Dish: Chicken parmigiana / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Parmesan (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/926-chicken-parmesan) [Tier 1 (locked list): America's Test Kitchen]: Cutlets pounded thin, salted; flour, egg, breadcrumb-parmesan coating; shallow-fried until golden; topped with cheese and a little sauce and melted under the grill so the crust stays crisp. _(read via search extract; curl 200)_
- [Best Chicken Parmesan (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7323-best-chicken-parmesan) [Tier 1 (locked list): America's Test Kitchen]: Panko-parmesan breading; cheese placed on the chicken before the sauce to protect the crunch; sauce served alongside or on spaghetti. _(read via search extract; curl 200)_
- [The Best Chicken Parmesan (Serious Eats)](https://www.seriouseats.com/the-best-chicken-parmesan-recipe) [Tier 1 (locked list): Serious Eats]: Parmesan-and-breadcrumb coating; fried cutlets; sauce and cheese added and melted on top. _(read via search extract; seriouseats.com blocked curl (403) on this page, URL confirmed by search)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Served on spaghetti to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-parmigiana-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 1 pinch salt, only if needed -> 0.5 g
- Salt given in grams (06-G1): 1 tbsp salt for the pasta water -> 18.0 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Cutlets pounded to 6 mm (02-C7)
- Shallow-fry oil depth set to about 1 cm (02-C7)
- Shallow-frying oil listed as 400 ml (about 1 cm deep); absorbed oil in the nutrition unchanged at 40 g
- Salt given in grams (06-G1): 1 tbsp salt for the pasta water -> 18 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
