# Research: Slow-Cooked Crisp Duck Legs with Fried Potatoes and Frisée Salad
Dish: Duck confit / flavour: Classic. Private file, not published.

## Sources actually opened
- [Easy Duck Confit (NYT Cooking)](https://cooking.nytimes.com/recipes/1013002-easy-duck-confit) [Tier 2 (locked list): NYT Cooking]: Light cure of salt, pepper, thyme and bay for 24 h; legs rendered skin side down on the hob until fat pools, then covered and oven-cooked in their own fat 2 h, uncovered 1 h until golden; served with potatoes or sturdy greens. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Duck Leg Confit (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15226-duck-leg-confit) [Tier 1 (locked list): America's Test Kitchen]: Duck legs salt-cured 24 h or more; cooked submerged in fat in a low oven 2-2.5 h until a knife meets little resistance; skin crisped skin side down in a covered pan. Its heavier cure is not used. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Duck Confit (NYT Cooking)](https://cooking.nytimes.com/recipes/7041-duck-confit) [Tier 2 (locked list): NYT Cooking]: Spice and salt cure, garlic, slow oven in fat about 3 h until very tender; cooled and stored in the fat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Light salt-pepper-thyme-bay cure 24 h, then legs cooked in their own rendered fat, covered then uncovered (NYT 1013002); low-oven slow cook until very tender (ATK, NYT 7041); potatoes and a sturdy salad (NYT 1013002) to match the photo; poultry checked to at least 74 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 200 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/slow-cooked-duck-legs-crisp-potatoes-frisee-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
