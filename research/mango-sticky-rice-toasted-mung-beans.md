# Research: Mango Sticky Rice with Coconut Sauce and Toasted Mung Beans
Dish: Mango sticky rice / flavour: Classic. Private file, not published.

## Sources actually opened
- [Mango Sticky Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15488-khao-niaow-ma-muang-sticky-rice-with-mango) [Tier 1 (locked list): America's Test Kitchen]: Soaked glutinous rice steamed in a cloth; sweet salted coconut milk poured over to absorb; thickened salted coconut sauce; toasted mung beans; mango. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sticky Rice With Mango (NYT Cooking)](https://cooking.nytimes.com/recipes/1014806-mango-sticky-rice) [Tier 2 (locked list): NYT Cooking]: Soaked sticky rice steamed; sweetened salted coconut milk stirred in to absorb; salty coconut sauce; ripe mango alongside. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rice soaked at least 1 h and steamed in a cloth.
- Sweet coconut milk absorbed for 15 min.
- Lightly salted thickened sauce and toasted mung beans.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/mango-sticky-rice-toasted-mung-beans-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
