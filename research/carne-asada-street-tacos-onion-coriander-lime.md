# Research: Carne Asada Street Tacos with Onion, Coriander and Lime
Dish: Taco / flavour: Classic. Private file, not published.

## Sources actually opened
- [Grilled Carne Asada for Tacos (NYT Cooking)](https://cooking.nytimes.com/recipes/8219-grilled-carne-asada-for-tacos) [Tier 2 (locked list): NYT Cooking]: Skirt steak rubbed with garlic, cumin, oregano, cayenne, salt and pepper; grilled hot 3-4 min per side; sliced for tacos. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Carne Asada (Serious Eats)](https://www.seriouseats.com/carne-asada-food-lab-recipe-kenji) [Tier 1 (locked list): Serious Eats]: Skirt steak marinated 3-12 h in a citrus (orange and lime) chilli marinade; grilled over very high heat; rested and sliced against the grain; served with warm tortillas, onion, coriander and lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Garlic, cumin, oregano and cayenne rub, quick high-heat sear (NYT)
- Orange and lime in the marinade, slicing against the grain and taco-stand toppings (SE)
- Soy and fish sauce left out; steak cooked to 63 °C

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/carne-asada-street-tacos-onion-coriander-lime-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
