# Research: Cuban Citrus and Garlic Mojo
Dish: Mojo / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cuban Mojo Sauce (ATK)](https://www.americastestkitchen.com/recipes/12241-cuban-mojo-sauce) [Tier 1 (locked list): America's Test Kitchen]: Olive oil, garlic, lime zest and juice, orange zest and juice, cumin, dried oregano, salt and pepper flakes brought to a simmer and cooled completely. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mojo de Ajo (NYT Cooking)](https://cooking.nytimes.com/recipes/7300-mojo-de-ajo-cuban-citrus-garlic-barbecue-sauce) [Tier 2 (locked list): NYT Cooking]: Sliced garlic cooked in olive oil until pale golden, then sour orange (or lime) juice, water, cumin, oregano, salt and pepper added and brought to a boil; cooled and finished with cilantro or parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Sliced garlic warmed in olive oil until pale gold.
- Orange and lime juice with cumin and oregano, brought just to a simmer.
- Cooled; coriander stirred in.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 5 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/cuban-citrus-garlic-mojo-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
