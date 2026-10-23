# Research: Cocoa-Dusted Dark Chocolate Truffles
Dish: Truffles / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basic Chocolate Truffles (ATK)](https://www.americastestkitchen.com/recipes/8159-basic-chocolate-truffles) [Tier 1 (locked list): America's Test Kitchen]: About 2:1 bittersweet chocolate to cream with a pinch of salt, melted, set about 45 min, portioned into 24, chilled, rolled and coated in cocoa with a little icing sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chocolate Ganache Truffles (Serious Eats)](https://www.seriouseats.com/chocolate-ganache-truffles) [Tier 1 (locked list): Serious Eats]: Hot cream poured over chopped chocolate at about 2:1, whisked to an emulsion, set, balled and rolled in unsweetened cocoa. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chocolate Truffles (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/chocolate-truffles-recipe) [Tier 1 (locked list): King Arthur Baking]: Ganache chilled to a soft-clay texture, scooped into small balls, rolled roughly round and coated in cocoa. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No alcohol (the optional liquor is left out).
- Stovetop cream instead of microwave.
- Three truffles per serving.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 5 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/cocoa-dusted-dark-chocolate-truffles-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- icing sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
