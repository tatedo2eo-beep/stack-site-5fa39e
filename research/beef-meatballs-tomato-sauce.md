# Research: Beef Meatballs in Tomato Sauce
Dish: Meatballs / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Italian American Meatballs (NYT Cooking)](https://cooking.nytimes.com/recipes/1027192-classic-italian-american-meatballs) [Tier 2 (locked list): NYT Cooking]: Bread-and-milk panade, egg, Parmesan, garlic and parsley; meatballs browned then simmered in tomato sauce until cooked through. (Its pork is not used; all beef.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Easiest-Ever Meatballs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15621-easiest-ever-meatballs) [Tier 1 (locked list): America's Test Kitchen]: Panko-and-milk panade with Parmesan; meatballs browned in a hot oven rather than fried, then simmered 15-18 min in the sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Bread-milk panade with Parmesan (NYT); oven-browned then simmered in sauce to 71 °C (ATK); all beef.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/beef-meatballs-tomato-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
