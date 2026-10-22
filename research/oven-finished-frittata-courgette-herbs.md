# Research: Oven-Finished Frittata with Courgette and Herbs
Dish: Frittata / flavour: Zucchini. Private file, not published.

## Sources actually opened
- [Zucchini Frittata with Parmesan and Herbs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1121-zucchini-frittatta-with-parmesan-and-herbs) [Tier 1 (locked list): America's Test Kitchen]: Courgette shredded and squeezed dry, cooked with garlic in oil about 7 min until tender, herbs added; eggs beaten with Parmesan and the courgette stirred in; cooked over medium until almost set, 4-5 min, then grilled until set and browned and turned out. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Frittata With Zucchini, Goat Cheese and Dill (NYT Cooking)](https://cooking.nytimes.com/recipes/1013528-frittata-with-zucchini-goat-cheese-and-dill) [Tier 2 (locked list): NYT Cooking]: Grated courgette wilted with garlic; eggs beaten with cheese, courgette and dill; poured into a hot oiled pan, edges lifted to let egg run underneath, then covered on low about 10 min and finished under the grill until set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Courgette cooked with garlic until tender and dry (ATK; NYT wilted grated courgette)
- Eggs beaten with cheese and herbs and the courgette stirred in (ATK, NYT)
- Cooked until almost set, then finished under the grill until set (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/oven-finished-frittata-courgette-herbs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
