# Research: Tuna, Butter Bean and Courgette Ribbon Salad
Dish: Tuna salad / flavour: Zucchini. Private file, not published.

## Sources actually opened
- [Tuna, White Bean, and Zucchini Salad (Serious Eats)](https://www.seriouseats.com/zucchini-butter-bean-tuna-salad-recipe-12062817) [Tier 1 (locked list): Serious Eats]: Shaved zucchini salted 15 min and spun dry; shallot macerated in lemon with garlic and herbs, oil whisked in; butter beans and oil-packed tuna; rest 30 min. _(fetched 200; recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> SINGLE SOURCE: one locked publisher recipe used; wording, ingredient order and step structure clearly differ from it.

## Own cooking judgment
- Metric quantities and our own wording
- Fewer, regrouped steps in a different order
- Less salt and oil

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tuna-butter-bean-courgette-ribbon-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt, for the courgettes (liquid discarded) -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
