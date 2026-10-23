# Research: Country Sourdough Boule
Dish: Sourdough boule / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tartine’s Country Bread (NYT Cooking)](https://cooking.nytimes.com/recipes/1016277-tartines-country-bread) [Tier 2 (locked list): NYT Cooking]: Young leaven, white and whole-wheat flours, autolyse, salt added later, turns during bulk, cold retard and a covered bake in a cast-iron pot. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Sourdough Bread (ATK)](https://www.americastestkitchen.com/recipes/9082-classic-sourdough-bread-pain-au-levain) [Tier 1 (locked list): America's Test Kitchen]: Levain built from starter, whole-wheat and white flour with water, stretch-and-folds, shaped round and baked in a Dutch oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Small levain built the night before from 10 g starter.
- Rice flour in the banneton so the loaf releases.
- Lid on for 20 min, then off to colour; 1 3/4 tsp salt for 12 slices.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 45 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/open-crumb-country-sourdough-boule-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.75 tsp fine salt -> 10.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
