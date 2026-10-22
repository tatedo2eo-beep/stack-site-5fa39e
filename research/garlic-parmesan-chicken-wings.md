# Research: Garlic Parmesan Chicken Wings
Dish: Chicken wings / flavour: Garlic-parmesan. Private file, not published.

## Sources actually opened
- [Oven-Fried Chicken Wings (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7583-oven-fried-chicken-wings) [Tier 1 (locked list): America's Test Kitchen]: Toss dried wings with baking powder + salt; wire rack; 120 °C (250 °F) 30 min on the lower-middle rack to render, then 220 °C (425 °F) 40-50 min, rotating; rest 5 min; toss in sauce. _(read via search extract; curl 200)_
- [Garlic-Parmesan Air-Fryer Chicken Wings (Serious Eats)](https://www.seriouseats.com/garlic-parmesan-air-fryer-chicken-wings-recipe-11895227) [Tier 1 (locked list): Serious Eats]: Dry wings with salt + baking powder; toss hot wings in garlic butter, then Parmesan and parsley. _(read via search extract; curl 200)_
- [Garlic Parmesan Wings (NYT Cooking)](https://cooking.nytimes.com/recipes/1026475-garlic-parmesan-wings) [Tier 2 (locked list): NYT Cooking]: Crisp wings tossed in garlic butter and finely grated Parmesan right before serving. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Chilli flakes and lemon wedges.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 80 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/garlic-parmesan-chicken-wings-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C4 (crisp skin); 02-C5 (wings); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Oven preheat stated 20 min ahead (CHECKLIST Preheat)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
