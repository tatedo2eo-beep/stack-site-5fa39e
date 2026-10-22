# Research: Tandoori Chicken
Dish: Tandoori / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tandoori Chicken (NYT Cooking)](https://cooking.nytimes.com/recipes/1025388-tandoori-chicken) [Tier 2 (locked list): NYT Cooking]: Two-stage marinade: lemon and salt first, then yoghurt with ginger, garlic, Kashmiri chilli and garam masala; very hot oven or grill until charred. _(read via search extract; curl 200)_
- [Tandoori Chicken (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4590-tandoori-chicken) [Tier 1 (locked list): America's Test Kitchen]: Skinless bone-in pieces slashed; salt-spice rub, then a yoghurt marinade; roasted at moderate heat, then finished under the grill to char. _(read via search extract; curl 200)_
- [Broiled Tandoori-Style Chicken (Serious Eats)](https://www.seriouseats.com/broiled-tandoori-style-chicken-with-almonds-and-couscous) [Tier 1 (locked list): Serious Eats]: Yoghurt, lemon and spice marinade at least 1 h; cooked close to a hot grill (broiler) element, turning once, to char. _(read via search extract; seriouseats.com blocked curl (403) on this page, URL confirmed by search)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- 240 °C top-shelf roast, then the grill for char; green chutney recipe.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tandoori-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C2 (dry brine); 02-C3 (wet brine); 02-C9 (curry base); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6.0 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1.0 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Oven preheat moved into the marinating step, 30 min ahead (CHECKLIST Preheat)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
