# Research: Classic Shallot Vinaigrette
Dish: Vinaigrette / flavour: Classic. Private file, not published.

## Sources actually opened
- [Foolproof Vinaigrette (ATK)](https://www.americastestkitchen.com/recipes/4887-foolproof-vinaigrette) [Tier 1 (locked list): America's Test Kitchen]: Vinegar, minced shallot, a little mayonnaise and mustard, salt, then oil drizzled in slowly while whisking for a stable emulsion. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Basic Vinaigrette (ATK)](https://www.americastestkitchen.com/recipes/7137-basic-vinaigrette) [Tier 1 (locked list): America's Test Kitchen]: Cider vinegar and shallot rested 5 min, then oil, mayonnaise, mustard, salt and pepper shaken until emulsified. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Basic Vinaigrette (NYT Cooking)](https://cooking.nytimes.com/recipes/1018740-basic-vinaigrette) [Tier 2 (locked list): NYT Cooking]: Vinegar and salt, olive oil whisked in gradually, optional mustard and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cider vinegar in place of wine vinegar.
- Mild yellow mustard and a little mayonnaise to emulsify.
- Oil drizzled in while whisking.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/classic-shallot-vinaigrette-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.375 tsp fine salt -> 2 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
