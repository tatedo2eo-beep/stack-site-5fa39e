# Research: Champurrado: Thick Mexican Chocolate and Masa Drink
Dish: Champurrado / flavour: Classic. Private file, not published.

## Sources actually opened
- [Champurrado (NYT Cooking)](https://cooking.nytimes.com/recipes/1024849-champurrado) [Tier 2 (locked list): NYT Cooking]: Masa harina toasted until golden and blended with warm water; piloncillo, Mexican chocolate and cinnamon simmered in water, then the masa mixture and milk added and boiled, stirring, until thick. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Champurrado (Serious Eats)](https://www.seriouseats.com/champurrado-mexican-chocolate-atole-recipe) [Tier 1 (locked list): Serious Eats]: Masa harina whisked into warm water, then milk, Mexican chocolate, piloncillo, salt, star anise and cinnamon added and simmered 8-10 minutes until thickened; spices discarded. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Toasted masa (NYT)
- Star anise and cinnamon, simmered 8-10 minutes (SE)
- 6 mugs, frothed before serving

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 20 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/champurrado-thick-mexican-chocolate-masa-drink-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
