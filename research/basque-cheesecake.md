# Research: Basque Burnt Cheesecake
Dish: Basque burnt (San Sebastián) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basque-Style Cheesecake (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15199-la-vina-style-cheesecake) [Tier 1 (locked list): America's Test Kitchen]: Crumpled, overlapped baking paper lining; no crust or water bath; very hot oven until the top is deeply browned and the centre is still very loose, about 68 °C; cooled at least 2 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Basque Cheesecake (NYT Cooking)](https://cooking.nytimes.com/recipes/1024483-basque-cheesecake) [Tier 2 (locked list): NYT Cooking]: Cream cheese and sugar beaten smooth, eggs one at a time, cream, then a little flour; paper standing well above the rim; hot oven; cooled and served at room temperature. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Crumpled paper lining; no crust or water bath; very dark top; centre 65-68 °C; cooled 2 h.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 60 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/basque-cheesecake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK10 (cheesecake mixing, baking, cracking); 05-CK13 (chocolate and ganache); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine sea salt or table salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
