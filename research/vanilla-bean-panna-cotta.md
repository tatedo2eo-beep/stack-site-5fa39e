# Research: Vanilla Bean Panna Cotta
Dish: Panna cotta / flavour: Vanilla bean. Private file, not published.

## Sources actually opened
- [Classic Panna Cotta With Vanilla Bean (Serious Eats)](https://www.seriouseats.com/classic-panna-cotta-vanilla-bean-recipe) [Tier 1 (locked list): Serious Eats]: Cream and milk steeped with split vanilla bean and sugar, bloomed setting powder dissolved, cooled over ice so the seeds stay suspended, set in moulds. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Panna Cotta (ATK)](https://www.americastestkitchen.com/recipes/641-classic-panna-cotta) [Tier 1 (locked list): America's Test Kitchen]: Milk with bloomed setting powder warmed, hot vanilla cream and sugar added, cooled over ice water until thickened, set in ramekins. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bovine setting powder only; plain presentation with a vanilla pod to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 5 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/vanilla-bean-panna-cotta-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
