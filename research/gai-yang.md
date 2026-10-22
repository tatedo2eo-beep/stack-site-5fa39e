# Research: Gai Yang (Thai Grilled Chicken) with Jaew
Dish: Gai yang / flavour: Classic. Private file, not published.

## Sources actually opened
- [Thai-Style Grilled Chicken (Gai Yang) (Serious Eats)](https://www.seriouseats.com/thai-style-grilled-chicken-recipe) [Tier 1 (locked list): Serious Eats]: Paste of coriander root, garlic, white pepper and toasted coriander seed with fish sauce, soy and sugar; marinate 2-24 h; grill indirect then direct to crisp. _(read via search extract; curl 200)_
- [Thai BBQ Chicken (Kai Yang) (NYT Cooking)](https://cooking.nytimes.com/recipes/1025249-kai-yang) [Tier 2 (locked list): NYT Cooking]: Garlic, coriander, white pepper and fish sauce marinade; grilled; served with a chilli dipping sauce and sticky rice. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Oven + grill (broiler) method with barbecue as an option; jaew without tamarind.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/gai-yang-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Oven preheat moved to an earlier step (CHECKLIST Preheat)
- brown or palm sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- brown or palm sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
