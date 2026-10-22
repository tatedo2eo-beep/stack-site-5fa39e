# Research: Classic Deviled Eggs with Paprika and Chives
Dish: Deviled eggs / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Deviled Eggs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/570-classic-deviled-eggs) [Tier 1 (locked list): America's Test Kitchen]: Seven eggs steamed 13 min and iced, yolks mashed with mustard, mayonnaise and cider vinegar, piped through a star tip, best two halves discarded. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Best Deviled Eggs (NYT Cooking)](https://cooking.nytimes.com/recipes/6866-classic-deviled-eggs) [Tier 2 (locked list): NYT Cooking]: Hard-cooked eggs halved, yolks mashed with mustard, hot sauce, salt, pepper, chives and mayonnaise, piped and dusted with paprika. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Great Deviled Eggs (Serious Eats)](https://www.seriouseats.com/great-deviled-eggs-recipe) [Tier 1 (locked list): Serious Eats]: Eggs steamed 12 min for easy peeling; yolks processed with mayonnaise, mustard, vinegar and hot sauce, finished with chives and paprika. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Steamed 13 min so yolks are fully set
- English mustard powder instead of Dijon
- Cider vinegar; no Worcestershire

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/classic-deviled-eggs-paprika-chives-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
