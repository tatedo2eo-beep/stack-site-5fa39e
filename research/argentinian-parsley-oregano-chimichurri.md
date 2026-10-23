# Research: Argentinian Parsley and Oregano Chimichurri
Dish: Chimichurri / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chimichurri (Serious Eats)](https://www.seriouseats.com/sauced-chimichurri-sauce-recipe) [Tier 1 (locked list): Serious Eats]: Dried oregano and chilli flakes softened in boiling water, then finely minced parsley, garlic, vinegar and oil stirred in with salt and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Argentinian Chimichurri Sauce (ATK)](https://www.americastestkitchen.com/recipes/8805-argentinian-chimichurri-sauce) [Tier 1 (locked list): America's Test Kitchen]: Oregano and salt softened in hot water; parsley, cilantro, garlic and pepper flakes chopped, vinegar added and extra-virgin olive oil whisked in by hand; rested at least 1 hour. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Oregano, salt and chilli flakes bloomed in hot water.
- Hand-chopped parsley and garlic; olive oil whisked in by hand.
- Distilled white vinegar in place of wine vinegar; rested 30 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/argentinian-parsley-oregano-chimichurri-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C7 (cutlets).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
