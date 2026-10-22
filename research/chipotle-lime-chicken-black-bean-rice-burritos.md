# Research: Chipotle-Lime Chicken, Black Bean and Rice Burritos
Dish: Burrito / flavour: Classic. Private file, not published.

## Sources actually opened
- [California Chicken Burritos (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3099-california-chicken-burritos) [Tier 1 (locked list): America's Test Kitchen]: Black beans cooked with chipotle in adobo and garlic; rice, shredded chicken and cheddar rolled in 25 cm flour tortillas with the sides tucked; finished to melt the cheese. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Ultimate Chicken Burrito Bowl (Serious Eats)](https://www.seriouseats.com/ultimate-chicken-burrito-bowl-recipe) [Tier 1 (locked list): Serious Eats]: Chicken breasts gently poached in barely simmering liquid until just cooked, then shredded; cumin-scented black beans and rice; lime and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bean, rice, chicken and cheese filling with chipotle, tucked-roll method (ATK)
- Gentle poaching for juicy shredded chicken, cumin and lime (SE)
- Chicken cooked to 74 °C; no-salt beans and less cheese to keep salt under 2.5 g

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chipotle-lime-chicken-black-bean-rice-burritos-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
