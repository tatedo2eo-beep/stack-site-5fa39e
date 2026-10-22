# Research: Vegetable Fried Rice with Red Pepper, Peas and Sweetcorn
Dish: Fried rice / flavour: Vegetable. Private file, not published.

## Sources actually opened
- [Easy Fried Rice (Serious Eats)](https://www.seriouseats.com/easy-vegetable-fried-rice-recipe) [Tier 1 (locked list): Serious Eats]: 350 g cold rice toasted in two batches in a smoking wok; onion, carrot, scallion and garlic stir-fried in a well in the centre about 1 min; soy sauce and sesame oil tossed through; egg cooked in the cleared side of the wok; frozen peas added. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Vegetable Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4113-vegetable-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Soy sauce, rice vinegar, hot sauce and ginger mixture; eggs scrambled until just set and set aside; scallion whites, cabbage and red bell pepper cooked about 1 min; rice and sauce cooked 2-4 min until hot; eggs and scallion greens stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/14576-simple-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Eggs scrambled in a nonstick skillet and set aside; carrot and scallion whites cooked; 4 cups room-temperature cooked jasmine rice stir-fried; peas added; eggs returned and broken up; seasoned with salt. (Its ham is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs scrambled until set and set aside (ATK 4113; ATK 14576); carrot (SE; ATK 14576), red pepper (ATK 4113), garlic and scallion (SE), ginger (ATK 4113) stir-fried briefly; cold rice stir-fried until hot (all three); soy sauce (all three); peas (SE; ATK 14576); egg and scallion greens returned (ATK 4113). Sweetcorn, keeping one pan of rice rather than toasting in batches, and the 71/74 °C checks are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/vegetable-fried-rice-red-pepper-peas-sweetcorn-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
