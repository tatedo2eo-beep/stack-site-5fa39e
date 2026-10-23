# Research: Scotch Broth with Lamb, Barley and Kale
Dish: Scotch broth / flavour: Classic. Private file, not published.

## Sources actually opened
- [Scotch Broth with Kale (NYT Cooking)](https://cooking.nytimes.com/recipes/1014446-scotch-broth-with-kale) [Tier 2 (locked list): NYT Cooking]: Bone-in lamb salted ahead, simmered about 2 hours with potato, carrots, turnips, leek, pearl barley, celery, thyme and bay, skimming; kale added for the last 15 minutes; parsley and a little vinegar or lemon to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Scotch Broth (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5151-scotch-broth) [Tier 1 (locked list): America's Test Kitchen]: Lamb shank stock simmered about 2 hours, meat removed from the bones and diced, stock defatted, then leeks, carrots, celery, turnip, thyme and pearl barley simmered in it with parsley to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- One-pot bone-in lamb simmer with barley and kale (NYT)
- Meat taken off the bone and the broth defatted (ATK)
- No wine, so 

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 140 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/scotch-broth-lamb-barley-kale-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
