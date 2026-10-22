# Research: Folded Butter Omelette with Melted Cheese
Dish: Omelette / flavour: Cheese. Private file, not published.

## Sources actually opened
- [Perfect French Omelets (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4594-perfect-french-omelets) [Tier 1 (locked list): America's Test Kitchen]: Pan preheated low with oil wiped out; eggs and an extra yolk beaten about 80 strokes with frozen butter cubes; scrambled with chopsticks over medium-high in foaming butter, spread, cheese and chives added and the pan covered off the heat to finish cooking; rolled out onto the plate. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic French Omelette (Serious Eats)](https://www.seriouseats.com/classic-french-omelette-recipe) [Tier 1 (locked list): Serious Eats]: Three eggs beaten with a fork just until no white remains and seasoned; butter melted until foamy but not browned in an unscratched 20 cm non-stick pan; eggs stirred rapidly while shaking the pan until softly scrambled, spread evenly, then rolled and folded out of the pan (cooked through here until set). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs beaten and seasoned (ATK, SE)
- Stir-and-shake cooking in foaming butter, then spread evenly (ATK, SE)
- Grated cheese scattered on and the pan covered so the cheese melts and the eggs finish cooking, then rolled out (ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 5 min against the step times.
- Quantities checked against servings (1). Nutrition worked from USDA FDC (see content/notes/folded-butter-omelette-melted-cheese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
