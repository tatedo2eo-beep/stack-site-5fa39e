# Research: Soft Creamy Polenta with Butter
Dish: Polenta / flavour: Classic. Private file, not published.

## Sources actually opened
- [Creamy Polenta (ATK)](https://www.americastestkitchen.com/recipes/16482-weeknight-creamy-polenta) [Tier 1 (locked list): America's Test Kitchen]: Coarse polenta whisked into boiling water with salt and a pinch of baking soda, covered on the lowest heat 5 min, whisked, then cooked about 25 min more until loose; butter and Parmesan whisked in off the heat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Smooth and Creamy Polenta (Serious Eats)](https://www.seriouseats.com/smooth-creamy-polenta-recipe) [Tier 1 (locked list): Serious Eats]: About 8:1 liquid to medium or coarse cornmeal, optional overnight presoak, boiled then cooked low with frequent stirring until thick and pulling from the pan; butter or olive oil beaten in until glossy. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- About 7:1 water to coarse polenta with a pinch of bicarbonate.
- Covered on the lowest heat, whisked every 8-10 min, about 30 min.
- Butter only; cheese left out of the base version.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/soft-creamy-polenta-butter-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
