# Research: Gingerbread Pancakes
Dish: Pancakes (American) / flavour: Gingerbread. Private file, not published.

## Sources actually opened
- [Gingerbread Pancakes (NYT Cooking)](https://cooking.nytimes.com/recipes/1019065-gingerbread-pancakes) [Tier 2 (locked list): NYT Cooking]: Molasses, dark brown sugar, ground and fresh ginger, cinnamon, allspice and lemon zest in a milk batter, cooked over medium-low heat and kept warm at 120 °C. _(curl 200 or fetched; recipe ingredients and steps read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source.

## Own cooking judgment
- Metric quantities; kosher salt converted to fine salt at half the volume.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/gingerbread-pancakes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- dark brown sugar: 2 tbsp → 24 g (CHECKLIST 1, weights in grams)
- butter or oil, for the pan: 1 tsp → 5 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
