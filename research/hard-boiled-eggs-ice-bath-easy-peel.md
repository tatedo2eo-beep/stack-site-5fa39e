# Research: Hard-Boiled Eggs with an Ice Bath for Easy Peeling
Dish: Boiled (soft/hard) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Hard-Boiled Eggs (Serious Eats)](https://www.seriouseats.com/perfect-boiled-eggs-recipe) [Tier 1 (locked list): Serious Eats]: Eggs lowered into a large pot of boiling water, boiled 30 s, then covered at a bare simmer 11 min; transferred to iced water if serving cold; peeled under water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Boiled Eggs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12165-boiled-eggs) [Tier 1 (locked list): America's Test Kitchen]: Eggs lowered into 12 cups boiling water with a spider and cooked 7 min for soft or 13 min for hard-cooked; cooled in an ice bath 5 min; shell cracked all over and peeled from the wider end, breaking the membrane. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs lowered into a large pot of already-boiling water (SE, ATK)
- Cooked to hard-cooked: 30 s boil then 11 min at a bare simmer (SE) or 13 min boil (ATK)
- Chilled in an ice bath, cracked all over and peeled (SE, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 2 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/hard-boiled-eggs-ice-bath-easy-peel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
