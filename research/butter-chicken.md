# Research: Butter Chicken
Dish: Butter chicken / flavour: Classic. Private file, not published.

## Sources actually opened
- [Stovetop Butter Chicken (Serious Eats)](https://www.seriouseats.com/stovetop-butter-chicken) [Tier 1 (locked list): Serious Eats]: Yoghurt-spice marinated thighs charred under a grill; sauce of butter, aromatics and bloomed spices, tomato, blended, finished with cream and fenugreek; chicken finishes cooking in the sauce. _(read via search extract; curl 200)_
- [Butter Chicken (NYT Cooking)](https://cooking.nytimes.com/recipes/1016754-butter-chicken) [Tier 2 (locked list): NYT Cooking]: Marinated chicken cooked, then simmered in a spiced tomato, butter and cream sauce; kasuri methi to finish. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Onion in the sauce; optional sugar only if the tomatoes are sharp.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/butter-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.
