# Research: Fluffy Couscous with Olive Oil and Parsley
Dish: Couscous / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basic Couscous (ATK)](https://www.americastestkitchen.com/recipes/6324-basic-couscous) [Tier 1 (locked list): America's Test Kitchen]: Couscous toasted in foaming butter about 5 min until starting to brown, then water, broth and salt added, covered off the heat 7 min and fluffed with a fork. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Perfect Couscous (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/perfect-couscous-8668138) [Tier 2 (locked list): Food Network Kitchen]: Equal volumes of water or broth and instant couscous: liquid boiled with olive oil and salt, couscous stirred in off the heat, covered 5 min and fluffed thoroughly. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Couscous toasted in olive oil.
- Boiling water stirred in, covered off the heat 7 min.
- Fluffed well and finished with oil and parsley.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/fluffy-couscous-olive-oil-parsley-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
