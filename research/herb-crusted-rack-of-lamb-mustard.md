# Research: Herb-Crusted Rack of Lamb with a Mustard Layer
Dish: Rack of lamb/persillade / flavour: Mustard-herb crust. Private file, not published.

## Sources actually opened
- [Crumb-Crusted Rack of Lamb (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10837-crumb-crusted-rack-of-lamb) [Tier 1 (locked list): America's Test Kitchen]: Racks seasoned and seared on all sides, cooled 5 min so the crust sticks; brushed with mustard and coated with herb, garlic and lemon-zest crumbs; roasted fat side up on a wire rack; rested before cutting into chops. (Its Dijon and anchovies are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Rack of Lamb (NYT Cooking)](https://cooking.nytimes.com/recipes/9914-rack-of-lamb) [Tier 2 (locked list): NYT Cooking]: Racks coated with a mustard, oil and rosemary paste, then pressed with a dry crumb layer and roasted in a very hot oven; rested before carving. (Its coarse-grain mustard is replaced by mustard powder and seeds.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Rack of Lamb With Sage Crust (NYT Cooking)](https://cooking.nytimes.com/recipes/294-rack-of-lamb-with-sage-crust) [Tier 2 (locked list): NYT Cooking]: Racks seared very hot in cast iron; herb, garlic, breadcrumb and oil paste made in a processor and pressed onto the fat side; roasted on a rack in a hot oven; rested covered. (Its Dijon and balsamic are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Inside-Out Lamb Persillade (NYT Cooking)](https://cooking.nytimes.com/recipes/1013171-inside-out-lamb-persillade) [Tier 2 (locked list): NYT Cooking]: Persillade of parsley, rosemary, garlic, lemon zest and olive oil puréed in a processor and spread over lamb; hot oven roast checked with a thermometer; rested; lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Mustard layer under the crumb crust (ATK 10837, NYT 9914), made with mustard powder and seeds because Dijon contains wine; base method as the classic rack (ATK, NYT 294, NYT 1013171).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/herb-crusted-rack-of-lamb-mustard-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- honey: 1 tsp → 7 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
