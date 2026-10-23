# Research: Honey Whole-Wheat Sandwich Loaf
Dish: Whole wheat / flavour: Classic. Private file, not published.

## Sources actually opened
- [Whole-Wheat Sandwich Bread (ATK)](https://www.americastestkitchen.com/recipes/6402-whole-wheat-sandwich-bread) [Tier 1 (locked list): America's Test Kitchen]: Whole-wheat and bread flours with milk, honey and butter; the whole-wheat flour is soaked ahead to soften the bran; shaped and baked in loaf pans. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [All Whole-Wheat Sandwich Bread (NYT Cooking)](https://cooking.nytimes.com/recipes/1015493-all-whole-wheat-sandwich-bread) [Tier 2 (locked list): NYT Cooking]: Whole-wheat flour, instant yeast, a little sugar or honey, oil or butter and milk; kneaded, risen and baked in a loaf pan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- One-third white bread flour for a lighter loaf, with no added vital gluten or wheat germ.
- A 20-minute soak before kneading, after ATK.
- One loaf rather than two.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 40 min against the step times.
- Quantities checked against servings (14). Nutrition worked from USDA FDC (see content/notes/honey-whole-wheat-sandwich-loaf-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
