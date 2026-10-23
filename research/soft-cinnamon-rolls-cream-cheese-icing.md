# Research: Soft Cinnamon Rolls with Cream Cheese Icing
Dish: Cinnamon rolls / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ultimate Cinnamon Buns (ATK)](https://www.americastestkitchen.com/recipes/4552-ultimate-cinnamon-buns) [Tier 1 (locked list): America's Test Kitchen]: Rich buttery dough with eggs, a brown-sugar and cinnamon filling over softened butter, and a cream-cheese glaze spread over the warm buns. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Cinnamon Rolls (NYT Cooking)](https://cooking.nytimes.com/recipes/1024652-homemade-cinnamon-rolls) [Tier 2 (locked list): NYT Cooking]: Milk and egg dough, a cinnamon-sugar-butter filling, rolled and sliced, baked in a buttered pan and finished with a cream-cheese frosting. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [One-Bowl, Overnight Cinnamon Rolls (Serious Eats)](https://www.seriouseats.com/bravetart-homemade-cinnamon-rolls-recipe) [Tier 1 (locked list): Serious Eats]: A whipped brown-sugar, cinnamon and butter filling, rolls cut with thread, and cream-cheese frosting spread on straight from the oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No speculoos biscuits or pecans; a plain brown-sugar cinnamon filling, as in the photo.
- Alcohol-free vanilla in the icing.
- 12 rolls in a 23 x 33 cm tin.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 26 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/soft-cinnamon-rolls-cream-cheese-icing-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
