# Research: One-Pot Chicken and Rice with Peppers, Peas and Olives
Dish: Arroz con pollo / flavour: Classic. Private file, not published.

## Sources actually opened
- [Arroz con Pollo (NYT Cooking)](https://cooking.nytimes.com/recipes/1021438-arroz-con-pollo) [Tier 2 (locked list): NYT Cooking]: Boneless thighs marinated in a garlic, vinegar, oregano, salt and pepper adobo; rice rinsed until clear; chicken browned in batches; sofrito, bay and annatto or paprika cooked to a paste, tomato sauce cooked until darker, rice, olives and capers folded in; hot stock added and rice cooked with minimal stirring; finished with peas and lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [One-Pot Classic Arroz con Pollo (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13224-one-pot-classic-arroz-con-pollo) [Tier 1 (locked list): America's Test Kitchen]: Chicken briefly marinated with garlic, vinegar, oregano, salt and pepper; onion and green pepper softened, chicken lightly browned, simmered in broth and tomato sauce; medium-grain rice, olives and capers added and baked covered at 175 °C until rice is tender and the chicken cooked; chicken shredded and returned with pimentos and coriander; extra water if the pot looks dry. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Arroz con Pollo (Rice with Chicken) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8990-arroz-con-pollo-rice-with-chicken) [Tier 1 (locked list): America's Test Kitchen]: Herb sofrito processed from coriander, onion, pepper, garlic and cumin; chicken browned and set aside; rice toasted with onion and seasoning until translucent at the edges; broth, olives, bay and sofrito added, chicken nestled in, brought to a vigorous simmer and baked covered at 175 °C 20 min; rested covered 15 min, fluffed and peas stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Chicken seasoned with a garlic, acid, oregano, salt and pepper adobo (NYT, ATK One-Pot; lime used here instead of vinegar)
- Chicken browned, sofrito and paprika cooked down, tomato sauce cooked until darker, rice coated (NYT, ATK)
- Liquid brought to the boil, chicken nestled in and baked covered at about 175-180 °C until rice is tender; rested covered, chicken shredded, peas folded in (ATK One-Pot, ATK Rice with Chicken)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 55 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/one-pot-chicken-rice-peppers-peas-olives-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
