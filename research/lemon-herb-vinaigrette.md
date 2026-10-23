# Research: Lemon-Herb Vinaigrette
Dish: Vinaigrette / flavour: Lemon-herb. Private file, not published.

## Sources actually opened
- [Lemon-Herb Vinaigrette (ATK)](https://www.americastestkitchen.com/recipes/7139-lemon-herb-vinaigrette) [Tier 1 (locked list): America's Test Kitchen]: Lemon juice and minced shallot rested 5 min, then olive oil, thyme, mint, honey, a little mayonnaise, mustard, lemon zest, salt and pepper shaken in a jar until emulsified. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lemon Herb Vinaigrette (NYT Cooking)](https://cooking.nytimes.com/recipes/6985-lemon-herb-vinaigrette) [Tier 2 (locked list): NYT Cooking]: Lemon juice, mustard, shallot, salt and pepper with olive oil, then tarragon, parsley, basil, chives and capers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Lemon juice and zest with shallot rested 5 min.
- Mild yellow mustard, olive oil shaken to emulsify.
- Parsley, chives and thyme.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/lemon-herb-vinaigrette-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
