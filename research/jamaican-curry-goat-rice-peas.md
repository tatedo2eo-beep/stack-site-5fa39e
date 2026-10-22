# Research: Jamaican Curry Goat with Rice and Peas
Dish: Curry goat / flavour: Classic. Private file, not published.

## Sources actually opened
- [Curried Goat (NYT Cooking)](https://cooking.nytimes.com/recipes/1019848-curried-goat) [Tier 2 (locked list): NYT Cooking]: Homemade curry powder (cumin, coriander, turmeric, fenugreek, allspice, pepper); goat marinated 12 h+ with onion, garlic, Scotch bonnet and thyme; water; potatoes; 1.5-2 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Jamaican Goat Curry (Serious Eats)](https://www.seriouseats.com/jamaican-goat-curry-recipe) [Tier 1 (locked list): Serious Eats]: Goat browned in batches; curry powder bloomed 30 s; ginger and chilli; water; 1.5 h, then potatoes 30-60 min; fat skimmed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Homemade curry powder and long marinade with Scotch bonnet and thyme (NYT); curry bloomed in oil, 1.5 h then potatoes (SE); rice and peas with kidney beans and coconut milk is my side to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 150 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/jamaican-curry-goat-rice-peas-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
