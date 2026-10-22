# Research: Tomato and Mozzarella Caprese with Basil
Dish: Caprese / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Caprese Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1018849-classic-caprese-salad) [Tier 2 (locked list): NYT Cooking]: Mozzarella sliced cold and left to come to room temperature; tomatoes sliced and salted on the board; mozzarella, tomato and whole basil overlapped on a platter with the board juices, salt, pepper and plenty of oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Caprese Salad (Serious Eats)](https://www.seriouseats.com/classic-caprese-salad-recipe) [Tier 1 (locked list): Serious Eats]: Room-temperature tomatoes cut into slices and chunks in a single overlapping layer; mozzarella tucked in; olive oil, coarse salt, pepper and torn basil on top; served at once. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cherry Tomato Caprese Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4851-cherry-tomato-caprese-salad) [Tier 1 (locked list): America's Test Kitchen]: Tomatoes salted 30 min to draw out liquid; mozzarella patted dry; dressed with oil and basil. (Its balsamic reduction is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own (salt kept low because feta, olives and capers are salty); the core method matches the locked-list sources listed above; nothing copied. Red wine vinegar, sherry or balsamic in the sources is replaced by cider vinegar or citrus (no wine products).

## Own cooking judgment
- Mozzarella sliced cold, then brought up from fridge temperature (NYT)
- Tomatoes sliced and salted, board juices poured over (NYT, ATK salts too)
- Overlapping layout with basil, oil, salt and pepper (NYT, SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tomato-mozzarella-caprese-basil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
