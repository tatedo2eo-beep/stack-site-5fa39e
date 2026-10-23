# Research: Homemade Sauerkraut
Dish: Sauerkraut / flavour: Classic. Private file, not published.

## Sources actually opened
- [Sauerkraut (ATK)](https://www.americastestkitchen.com/recipes/8662-sauerkraut) [Tier 1 (locked list): America's Test Kitchen]: Shredded cabbage kneaded with salt and juniper, packed under parchment and a bag of brine, cloth-covered, fermented 6-13 days at 10-21 °C with daily skimming; refrigerated up to 2 months. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Sauerkraut (Serious Eats)](https://www.seriouseats.com/homemade-fermented-sauerkraut-recipe) [Tier 1 (locked list): Serious Eats]: Cabbage with 2% salt by weight and optional caraway or juniper, kneaded until brine forms, packed under outer leaves and weights, topped with 2% brine if needed, fermented at 18-21 °C for weeks. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Salt weighed at 2% of the cabbage.
- Kneaded until brine forms, held under brine with leaves, paper and a brine bag.
- Fermented 1-3 weeks at 18-21 °C, then refrigerated.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 0 min against the step times.
- Quantities checked against servings (24). Nutrition worked from USDA FDC (see content/notes/homemade-sauerkraut-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
