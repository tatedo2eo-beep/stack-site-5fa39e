# Research: Slow-Roast Beef with Yorkshire Puddings and Gravy
Dish: Roast beef / flavour: Classic. Private file, not published.

## Sources actually opened
- [Slow-Roasted Beef (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4021-slow-roasted-beef) [Tier 1 (locked list): America's Test Kitchen]: Eye-of-round salted 18-24 h; seared on all sides; roasted in a 110 °C oven, then the oven switched off to finish; rested before slicing thinly. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Slow-Roasted Beef (NYT Cooking)](https://cooking.nytimes.com/recipes/1021032-slow-roasted-beef) [Tier 2 (locked list): NYT Cooking]: Joint salted and left uncovered in the fridge 1-2 days; roasted very low (about 110 °C) until the centre is just short of target, then browned at high heat; rested and sliced. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Yorkshire Pudding (NYT Cooking)](https://cooking.nytimes.com/recipes/1017129-yorkshire-pudding) [Tier 2 (locked list): NYT Cooking]: Eggs, milk, flour and salt whisked and rested 30 min; 1 tsp fat heated in each hole of a 12-hole muffin tin; filled halfway; baked hot until golden and crisp. (Pork fat option not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Yorkshire Pudding (Serious Eats)](https://www.seriouseats.com/the-best-yorkshire-pudding-popover-recipe) [Tier 1 (locked list): Serious Eats]: Batter rested at least 30 min; fat heated in the tins at 230 °C about 10 min until smoking; wells filled half to three-quarters; baked without opening the door until deep brown and hollow. (Lard option not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Yorkshire Pudding (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6293-yorkshire-pudding) [Tier 1 (locked list): America's Test Kitchen]: Batter rested 1 h; fat heated in the pans until just smoking at about 220 °C; baked about 25 min until golden with crisp edges. (Its salt-pork fat is not used here; neutral oil or beef dripping instead.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Overnight dry-brine, sear, 120 °C slow roast to 63 °C (ATK, NYT); Yorkshire batter rested 30 min, smoking fat, 12-hole tin (NYT, SE); simple pan gravy is my addition.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 4 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 140 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/slow-roast-beef-yorkshire-puddings-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 5. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
