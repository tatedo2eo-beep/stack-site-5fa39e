# Research: Thai Yellow Coconut Curry with Prawns, Potatoes and Crispy Shallots
Dish: Thai yellow curry (kaeng kari) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gaeng Garee Makheua Yao (Serious Eats)](https://www.seriouseats.com/gaeng-garee-makheua-yao-yellow-curry-with-eggplant-5190990) [Tier 1 (locked list): Serious Eats]: Potatoes parboiled; paste fried in thick coconut milk added in stages until the fat separates; thinned coconut milk, palm sugar; cherry tomatoes; fried shallots on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Shrimp in Yellow Curry (NYT Cooking)](https://cooking.nytimes.com/recipes/6515-shrimp-in-yellow-curry) [Tier 2 (locked list): NYT Cooking]: Yellow curry and coconut milk cooked down, shrimp added and cooked until pink, fish sauce to taste. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Prawns instead of aubergine, cooked to 63 °C.
- Crispy shallots fried at home.
- Fish sauce instead of soy sauce, limited to 2 tsp for 4.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/thai-yellow-coconut-curry-prawns-potatoes-crispy-shallots-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C9 (curry base).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
