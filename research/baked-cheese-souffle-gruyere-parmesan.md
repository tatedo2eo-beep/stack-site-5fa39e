# Research: Baked Cheese Soufflé with Gruyère and Parmesan
Dish: Soufflé (savory) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cheese Soufflé (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7670-cheese-souffle) [Tier 1 (locked list): America's Test Kitchen]: Dish greased and coated with Parmesan; flour seasoned with paprika, cayenne, white pepper and nutmeg cooked in butter, milk whisked in and thickened; Gruyère and Parmesan added, yolks whisked in; whites whipped with cream of tartar and folded in; baked at 350F until risen and the centre reaches 170F. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cheese Soufflé (NYT Cooking)](https://cooking.nytimes.com/recipes/1015853-cheese-souffle) [Tier 2 (locked list): NYT Cooking]: Buttered dish dusted with Parmesan; béchamel made with shallot, butter, flour and milk seasoned with salt, white pepper and nutmeg; yolks added; whites beaten with cream of tartar and folded in with Gruyère; baked in a hot oven until risen and golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Dish buttered and coated with grated Parmesan (ATK, NYT)
- Thick béchamel seasoned with white pepper, nutmeg (and paprika, ATK) with Gruyère and Parmesan, yolks added (ATK, NYT)
- Whites beaten with cream of tartar, folded in and baked until risen with the centre hot (ATK 170F, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/baked-cheese-souffle-gruyere-parmesan-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.375 tsp fine salt -> 2 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
