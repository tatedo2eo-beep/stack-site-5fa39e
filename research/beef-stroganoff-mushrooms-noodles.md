# Research: Beef Stroganoff with Mushrooms and Egg Noodles
Dish: Beef stroganoff / flavour: Classic. Private file, not published.

## Sources actually opened
- [Beef Stroganoff (NYT Cooking)](https://cooking.nytimes.com/recipes/1020862-beef-stroganoff) [Tier 2 (locked list): NYT Cooking]: Beef dredged in flour and paprika and seared in batches; mushrooms browned 12-15 min; shallots; cream; served over egg noodles. (Its wine and Dijon are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Beef Stroganoff (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/130-classic-beef-stroganoff) [Tier 1 (locked list): America's Test Kitchen]: Mushrooms browned first; beef strips seared; onion, tomato paste and flour; stock; soured cream tempered before adding so it does not split. (Its wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Flour-paprika dredge and batch searing (NYT); mushrooms browned hard, tomato paste and flour, stock, tempered soured cream (ATK, NYT); lemon juice and mustard powder in place of wine and Dijon is my substitution.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/beef-stroganoff-mushrooms-noodles-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- plain flour: 1 tbsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 2 tsp fine salt, for the noodle water -> 12 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
