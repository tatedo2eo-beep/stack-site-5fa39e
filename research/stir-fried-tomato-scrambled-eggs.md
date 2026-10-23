# Research: Stir-Fried Tomato and Scrambled Eggs
Dish: Stir-fried tomato and scrambled eggs / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chinese Scrambled Eggs With Tomato (Serious Eats)](https://www.seriouseats.com/chinese-tomato-scrambled-egg-recipe-5218069) [Tier 1 (locked list): Serious Eats]: Eggs whisked with salt, water and a little oil, set into large curds in a hot wok and removed; scallion whites, garlic and ginger fried; tomatoes cooked with salt until juicy; eggs and white pepper returned; sesame oil and scallion greens to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chinese Stir-Fried Tomatoes and Eggs (NYT Cooking)](https://cooking.nytimes.com/recipes/1018570-chinese-stir-fried-tomatoes-and-eggs) [Tier 2 (locked list): NYT Cooking]: Eggs scrambled with scallions until just set and removed; ginger and tomato wedges stir-fried until softened into a sauce, seasoned with salt and sugar; eggs returned and folded through; served with rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Eggs cooked first in large curds, then returned.
- A pinch of sugar balances the tomatoes.
- Eggs cooked until fully set.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 10 min against the step times.
- Quantities checked against servings (3). Nutrition worked from USDA FDC (see content/notes/stir-fried-tomato-scrambled-eggs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
