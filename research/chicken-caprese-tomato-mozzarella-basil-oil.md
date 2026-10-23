# Research: Chicken Caprese with Tomato, Mozzarella and Basil Oil
Dish: Caprese / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Grilled Chicken Caprese (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6664-grilled-chicken-caprese) [Tier 1 (locked list): America's Test Kitchen]: Basil-garlic vinaigrette; grilled chicken cutlets and tomato slices; mozzarella tossed in vinaigrette laid on top under foil. _(fetched 200; recipe (ingredients and steps) read)_
- [Grilled Chicken Caprese (Serious Eats)](https://www.seriouseats.com/grilled-chicken-caprese-recipe-12058220) [Tier 1 (locked list): Serious Eats]: Pounded breasts dry-brined; grilled; tomato and mozzarella melted on top on the grill; grilled bread; balsamic glaze and basil. _(fetched 200; recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Two locked sources compared; wording, ingredient order and step structure are our own.

## Own cooking judgment
- Lemon-basil oil, no vinegar or balsamic glaze
- Chicken cooked to 74 °C
- Melted under foil or a lid, no grilled bread

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-caprese-tomato-mozzarella-basil-oil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C7 (cutlets).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
