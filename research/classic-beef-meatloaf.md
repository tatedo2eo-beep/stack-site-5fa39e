# Research: Classic Beef Meatloaf with a Savoury Tomato Top
Dish: Meatloaf / flavour: Classic. Private file, not published.

## Sources actually opened
- [Glazed All-Beef Meatloaf (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/2808-glazed-all-beef-meatloaf) [Tier 1 (locked list): America's Test Kitchen]: Free-form loaf baked on a perforated foil sheet over a rack so fat drains and the outside browns; glaze of ketchup, cider vinegar and brown sugar simmered, brushed on in stages and finished under the grill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Meatloaf (NYT Cooking)](https://cooking.nytimes.com/recipes/1020853-meatloaf) [Tier 2 (locked list): NYT Cooking]: Bread-and-milk panade; onion sautéed and cooled first; Worcestershire; free-form loaf; ketchup-based glaze brushed on during baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Perforated foil on a rack (ATK); sautéed onion and panade (NYT); tomato purée top instead of a sweet glaze.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 75 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/classic-beef-meatloaf-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
