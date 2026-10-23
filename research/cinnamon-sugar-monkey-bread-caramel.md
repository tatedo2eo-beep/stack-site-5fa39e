# Research: Cinnamon-Sugar Monkey Bread
Dish: Monkey bread / flavour: Classic. Private file, not published.

## Sources actually opened
- [Monkey Bread (NYT Cooking)](https://cooking.nytimes.com/recipes/1019111-monkey-bread) [Tier 2 (locked list): NYT Cooking]: Milk and egg yeast dough cut into pieces, rolled in melted butter and cinnamon sugar, layered in a Bundt pan with a caramel. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Monkey Bread (ATK)](https://www.americastestkitchen.com/recipes/2130-monkey-bread) [Tier 1 (locked list): America's Test Kitchen]: Soft milk dough balls dipped in butter and brown sugar with cinnamon, baked in a Bundt pan and turned out warm. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Monkey Bread (Serious Eats)](https://www.seriouseats.com/monkey-bread-11918331) [Tier 1 (locked list): Serious Eats]: Dough balls in melted butter and cinnamon sugar with a butter and brown sugar layer, baked and inverted while the caramel is runny. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 64 small balls for even baking.
- Butter and brown sugar caramel poured over before proving.
- Turned out after 5 min while the caramel still flows.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 40 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/cinnamon-sugar-monkey-bread-caramel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
