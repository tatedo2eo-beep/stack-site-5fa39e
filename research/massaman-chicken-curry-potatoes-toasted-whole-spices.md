# Research: Massaman Chicken Curry with Potatoes and Toasted Whole Spices
Dish: Massaman / flavour: Classic. Private file, not published.

## Sources actually opened
- [Massaman Curry (NYT Cooking)](https://cooking.nytimes.com/recipes/1024644-massaman-curry) [Tier 2 (locked list): NYT Cooking]: Toasted cardamom, coriander, cumin, cinnamon and cloves ground into red curry paste; paste fried in coconut cream; potatoes then chicken thighs, peanuts, fish sauce, sugar and tamarind. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gaeng Massaman Neua (Serious Eats)](https://www.seriouseats.com/massaman-curry-with-beef-gaeng-massaman-neua-5190704) [Tier 1 (locked list): Serious Eats]: Paste worked into coconut milk until the fat separates; palm sugar, tamarind and fish sauce; potatoes simmered until the curry is thick with separated fat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Chicken is browned first for colour.
- Fish sauce cut to 4 tsp for 6 servings to keep salt near 2 g.
- Extra chopped peanuts and coriander to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/massaman-chicken-curry-potatoes-toasted-whole-spices-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C9 (curry base).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
