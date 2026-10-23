# Research: Seven-Layer Bean Dip with Guacamole, Cheddar and Pico de Gallo
Dish: Seven-layer dip / flavour: Classic. Private file, not published.

## Sources actually opened
- [Seven-Layer Dip (NYT Cooking)](https://cooking.nytimes.com/recipes/1019914-seven-layer-dip) [Tier 2 (locked list): NYT Cooking]: Warm refried beans with cumin as the base; Cheddar, olives, avocado mash with lime and jalapeño, salsa and jalapeño sour cream; scallions and coriander on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ultimate Seven-Layer Dip (ATK)](https://www.americastestkitchen.com/recipes/3699-ultimate-seven-layer-dip) [Tier 1 (locked list): America's Test Kitchen]: Fresh tomato salsa salted and drained so it does not weep; bean paste with garlic, lime and chilli powder; sour cream and cheese layer; guacamole; served in a glass dish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Beans made from canned pintos mashed with cumin, chilli and lime instead of canned refried beans.
- Guacamole spread to the edges to stop browning; pico drained as ATK does.
- Layer order set to match the photo, with tortilla chips counted in the nutrition.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 5 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/seven-layer-bean-dip-guacamole-cheddar-pico-de-gallo-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
