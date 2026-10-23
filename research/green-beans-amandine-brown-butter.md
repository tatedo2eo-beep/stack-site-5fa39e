# Research: Green Beans Amandine with Brown Butter
Dish: Green beans almondine / flavour: Classic. Private file, not published.

## Sources actually opened
- [Green Beans Amandine (ATK)](https://www.americastestkitchen.com/recipes/3974-green-beans-amandine) [Tier 1 (locked list): America's Test Kitchen]: Sliced almonds toasted, butter browned with them, lemon juice added; beans cooked covered with water and salt 8-10 min, then uncovered to evaporate; tossed with the almond butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Haricots Verts Amandine (Serious Eats)](https://www.seriouseats.com/green-beans-amandine-french-almondine-recipe) [Tier 1 (locked list): Serious Eats]: Beans blanched and chilled; butter and almonds browned, shallot and garlic added, lemon juice and water emulsified into a glossy sauce; beans tossed and reheated. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Almonds toasted then browned in butter.
- Beans steam-braised in the pan.
- Lemon juice and a lemon wedge to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/green-beans-amandine-brown-butter-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
