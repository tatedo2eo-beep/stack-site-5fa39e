# Research: Classic Cheese Quiche
Dish: Quiche (cheese) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cast Iron Simple Cheese Quiche (ATK)](https://www.americastestkitchen.com/recipes/9166-cast-iron-simple-cheese-quiche) [Tier 1 (locked list): America's Test Kitchen]: Pie dough fluted into the pan, frozen, blind-baked with weights, filled with eggs beaten with half-and-half, salt and pepper plus cheddar, baked until just set and rested an hour; chives to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Easy Mixed-Cheese Quiche (Serious Eats)](https://www.seriouseats.com/cheese-pie-tart-quiche-recipe) [Tier 1 (locked list): Serious Eats]: Pie dough in a tart pan, docked, frozen and blind-baked; cheese scattered over the base and a cream, milk and egg custard poured over, baked at 175 °C until barely set with a jiggle. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Butter shortcrust blind-baked in a fluted tart tin.
- Equal cream and milk with 4 eggs; cheddar and Gruyère-style cheese.
- Baked low at 160 °C to a slight wobble; centre 77-80 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 60 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/classic-cheese-quiche-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
