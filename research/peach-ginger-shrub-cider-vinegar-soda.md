# Research: Peach and Ginger Shrub with Cider Vinegar and Soda
Dish: Shrubs / flavour: Peach. Private file, not published.

## Sources actually opened
- [Peach Shrub Syrup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13456-peach-shrub-syrup) [Tier 1 (locked list): America's Test Kitchen]: Peaches, sugar and water boiled then simmered covered about 10 minutes, mashed, strained, and cider vinegar whisked in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Peach-Ginger Shrub (Serious Eats)](https://www.seriouseats.com/peach-ginger-shrub-recipe) [Tier 1 (locked list): Serious Eats]: Mashed peaches macerated overnight with sugar and grated ginger, pressed through a sieve and mixed with vinegars, stored and served with seltzer. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cooked method (ATK) with ginger (SE)
- Cider vinegar only (no balsamic or wine vinegar)
- Less sugar; 50 ml syrup to 200 ml soda per glass

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 15 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/peach-ginger-shrub-cider-vinegar-soda-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
