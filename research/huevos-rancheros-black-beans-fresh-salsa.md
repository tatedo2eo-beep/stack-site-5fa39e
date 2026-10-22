# Research: Huevos Rancheros with Refried Black Beans, Ranchero Sauce and Fresh Salsa
Dish: Huevos rancheros / flavour: Classic. Private file, not published.

## Sources actually opened
- [Huevos Rancheros (NYT Cooking)](https://cooking.nytimes.com/recipes/1023168-huevos-rancheros) [Tier 2 (locked list): NYT Cooking]: One fresh tomato salsa split: part cooked into ranchero sauce, part mashed into black beans with cumin and smoked paprika, the rest served fresh; eggs fried in batches; tortillas, beans, egg, sauce, avocado and queso fresco. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Huevos Rancheros (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/2801-huevos-rancheros) [Tier 1 (locked list): America's Test Kitchen]: Tomato, jalapeño and onion sauce with lime and cilantro; eggs covered and cooked 6-7 min for set yolks; served on tortillas with lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Split-salsa method and refried black beans (NYT)
- Covered pan and timing for set yolks, lime (ATK)
- Yolks fully set (71 °C)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/huevos-rancheros-black-beans-fresh-salsa-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
