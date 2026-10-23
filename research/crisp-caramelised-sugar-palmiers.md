# Research: Crisp Caramelised Sugar Palmiers
Dish: Palmiers / flavour: Classic. Private file, not published.

## Sources actually opened
- [Palmiers (ATK)](https://www.americastestkitchen.com/recipes/10997-palmiers) [Tier 1 (locked list): America's Test Kitchen]: Home-made puff pastry rolled out on sugar, the short sides rolled to meet in the middle, frozen briefly, sliced 1 cm thick and baked at 190 °C, flipped part-way until golden and crisp. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Palmiers (King Arthur)](https://www.kingarthurbaking.com/recipes/palmiers-recipe) [Tier 1 (locked list): King Arthur Baking]: Puff pastry rolled thin on sugar, folded from both short ends to meet in the centre, chilled 30 min, sliced, dipped in sugar and baked at 190 °C, flipped after 12-14 min and baked until deep golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Shop-bought all-butter puff pastry, 130 g sugar.
- Folded to the centre, chilled, sliced 1 cm.
- 190 °C, flipped, cooled on the tray to crisp.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 22 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/crisp-caramelised-sugar-palmiers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
