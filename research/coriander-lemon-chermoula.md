# Research: Coriander and Lemon Chermoula
Dish: Chermoula / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chermoula Sauce (ATK)](https://www.americastestkitchen.com/recipes/8795-chermoula-sauce) [Tier 1 (locked list): America's Test Kitchen]: Cilantro, garlic, cumin, paprika, cayenne and salt pulsed, lemon juice added, then extra-virgin olive oil whisked in by hand. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chermoula (Serious Eats)](https://www.seriouseats.com/chermoula-sauce-recipe) [Tier 1 (locked list): Serious Eats]: Cilantro, parsley and garlic chopped in a processor, lemon juice (preserved or fresh), paprika, cumin, cayenne and saffron added, then olive oil drizzled in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Coriander and parsley with garlic, paprika, cumin and cayenne.
- Fresh lemon juice rather than preserved lemon; saffron left out.
- Oil whisked in by hand; rested 15 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/coriander-lemon-chermoula-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
