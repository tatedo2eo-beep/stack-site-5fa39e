# Research: Nuoc Cham Dipping Sauce with Carrot
Dish: Nuoc cham / flavour: Classic. Private file, not published.

## Sources actually opened
- [Vietnamese Dipping Sauce (ATK)](https://www.americastestkitchen.com/recipes/11900-vietnamese-dipping-sauce-nuoc-cham) [Tier 1 (locked list): America's Test Kitchen]: Chilli, garlic and sugar mashed to a paste, dissolved in hot water, then fish sauce and lime juice stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Nuoc Cham With Carrots and Daikon (NYT Cooking)](https://cooking.nytimes.com/recipes/4783-nuoc-cham-with-carrots-and-daikon) [Tier 2 (locked list): NYT Cooking]: Fish sauce, water, lime, sugar, chilli and garlic with shredded carrot. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; quantities sanity-checked independently.

## Own cooking judgment
- Less fish sauce for 8 smaller servings.
- Carrot shreds softened 10 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/carrot-nuoc-cham-dipping-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 2.5 tbsp → 31 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
