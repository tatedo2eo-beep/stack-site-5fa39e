# Research: Sizzling Garlic Prawns (Gambas al Ajillo) with Chilli and Parsley
Dish: Tapas (gambas al ajillo) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gambas al Ajillo (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16000-gambas-al-ajillo-spanish-style-sizzling-garlic-shrimp) [Tier 1 (locked list): America's Test Kitchen]: Shrimp salted 15 min; oil, garlic and pepper flakes heated slowly in cast iron until garlic is light gold, shrimp cooked 2 min per side, parsley stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gambas al Ajillo (NYT Cooking)](https://cooking.nytimes.com/recipes/1025800-gambas-al-ajillo-spanish-garlic-shrimp) [Tier 2 (locked list): NYT Cooking]: Garlic and dried chillies simmered gently in olive oil, shrimp cooked in one layer and turned once, finished with parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gambas al Ajillo (Serious Eats)](https://www.seriouseats.com/spanish-style-garlic-shrimp-gambas-al-ajillo-recipe) [Tier 1 (locked list): Serious Eats]: Garlic oil infused gently, shrimp cooked briefly over high heat until barely done, finished with an acid and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No wine or sherry vinegar; lemon juice instead
- Prawns to 63 °C
- Bread served for the oil, as in the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/sizzling-garlic-prawns-gambas-al-ajillo-chilli-parsley-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
