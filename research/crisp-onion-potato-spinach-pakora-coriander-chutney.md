# Research: Crisp Onion, Potato and Spinach Pakora with Green Chutney
Dish: Pakora / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pakoras (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/14901-pakoras-south-asian-spiced-vegetable-fritters) [Tier 1 (locked list): America's Test Kitchen]: Red onion, shredded potato, spinach and serrano tossed with cumin, coriander, ajwain, salt, Kashmiri chile and fenugreek and squeezed until they release liquid; besan, baking powder and turmeric then a little water stirred in; heaped tablespoons fried at 370-380 °F, 1.5-2 minutes per side. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pakora (NYT Cooking)](https://cooking.nytimes.com/recipes/1025493-pakora) [Tier 2 (locked list): NYT Cooking]: Chickpea flour, cornstarch, cilantro, chiles, salt, cumin, ginger and turmeric tossed with sliced onion and potato and carrot matchsticks, bound with cold water to a thick batter, spoonfuls fried at 350 °F until golden; served with mint chutney. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Squeeze the salted vegetables so their juice makes the batter (ATK)
- Cornflour for extra crispness (NYT)
- Coriander-mint chutney with lime

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-onion-potato-spinach-pakora-coriander-chutney-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
