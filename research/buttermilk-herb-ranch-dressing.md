# Research: Buttermilk Herb Ranch Dressing
Dish: Ranch dressing / flavour: Classic. Private file, not published.

## Sources actually opened
- [Buttermilk Ranch Dressing (ATK)](https://www.americastestkitchen.com/recipes/16008-buttermilk-ranch-dressing) [Tier 1 (locked list): America's Test Kitchen]: Equal parts buttermilk and mayonnaise whisked with chives, cilantro, dill, distilled white vinegar, garlic, salt, pepper and a pinch of cayenne. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ranch Dressing (Serious Eats)](https://www.seriouseats.com/ranch-dressing-homemade-recipe) [Tier 1 (locked list): Serious Eats]: Buttermilk, sour cream and mayonnaise whisked with parsley, chives, dill, lemon juice, Dijon, onion powder, salt and pepper, then chilled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Buttermilk and mayonnaise base.
- Chives, dill and parsley with garlic and distilled vinegar.
- Chilled 30 min before serving.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/buttermilk-herb-ranch-dressing-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C10 (buttermilk marinade).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
