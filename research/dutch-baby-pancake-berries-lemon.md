# Research: Dutch Baby Pancake with Berries, Lemon and Icing Sugar
Dish: Dutch baby / flavour: Classic. Private file, not published.

## Sources actually opened
- [Dutch Baby (NYT Cooking)](https://cooking.nytimes.com/recipes/6648-dutch-baby) [Tier 2 (locked list): NYT Cooking]: Eggs, flour, milk, sugar and nutmeg blended smooth; poured into butter melted in a hot 25 cm pan in the oven; baked 20 min until puffed, then 5 min at a lower heat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Dutch Baby (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5825-dutch-baby) [Tier 1 (locked list): America's Test Kitchen]: Pan preheated in a hot oven; batter with vanilla and salt poured in; baked until deep golden; finished with lemon juice and icing sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Blended batter, butter pan and two-stage bake (NYT)
- Vanilla, salt, lemon and icing sugar finish (ATK)
- Berries to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/dutch-baby-pancake-berries-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- icing sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
