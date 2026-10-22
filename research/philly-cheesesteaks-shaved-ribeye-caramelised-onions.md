# Research: Philly Cheesesteaks with Shaved Ribeye and Soft Onions
Dish: Philly cheesesteak / flavour: Classic. Private file, not published.

## Sources actually opened
- [Philly Cheesesteak (NYT Cooking)](https://cooking.nytimes.com/recipes/1024855-philly-cheesesteak) [Tier 2 (locked list): NYT Cooking]: Thinly shaved ribeye seared on a hot griddle with onions, topped with cheese to melt, then scooped into a long roll. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Philly Cheesesteaks (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6910-philly-cheesesteaks) [Tier 1 (locked list): America's Test Kitchen]: Partly frozen steak shaved and chopped, seared in batches, drained, then topped with white American cheese and piled into toasted sub rolls. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Steak partly frozen for paper-thin slices
- Meat drained after searing so the roll stays crisp
- No added salt: cheese and roll season it; beef cooked to at least 63 °C

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/philly-cheesesteaks-shaved-ribeye-caramelised-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
