# Research: Curry Laksa with Chicken, Prawns and Tofu Puffs
Dish: Laksa / flavour: Classic. Private file, not published.

## Sources actually opened
- [Laksa (NYT Cooking)](https://cooking.nytimes.com/recipes/1026616-chicken-curry-laksa) [Tier 2 (locked list): NYT Cooking]: Chicken thighs poached in stock and shredded; a chilli, shallot, garlic, lemongrass, candlenut and belacan paste fried in oil until it separates; coconut milk and stock; prawns and tofu puffs; noodles. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Curry Laksa (Serious Eats)](https://www.seriouseats.com/curry-laksa-recipe-11796414) [Tier 1 (locked list): Serious Eats]: Laksa paste fried, simmered with stock and coconut milk; soy puffs, rice vermicelli, bean sprouts, boiled eggs and herbs to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Poached-chicken stock and long-fried paste (NYT)
- Rice vermicelli, boiled eggs and herbs (SE)
- Low-salt broth part-diluted with water, no added salt; belacan alone seasons it

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 60 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/curry-laksa-chicken-prawn-coconut-noodle-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base).
Changes made:
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
