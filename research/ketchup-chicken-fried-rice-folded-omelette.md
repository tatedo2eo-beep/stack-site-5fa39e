# Research: Ketchup Chicken Fried Rice under a Folded Omelette
Dish: Omurice / flavour: Ketchup. Private file, not published.

## Sources actually opened
- [Chicken Omurice (Serious Eats)](https://www.seriouseats.com/japanese-omelette-chicken-ketchup-fried-rice-omurice-recipe) [Tier 1 (locked list): Serious Eats]: Cooked rice toasted in oil in batches; onion and carrot cooked over high heat about 3 min, diced chicken thigh about 3 min until cooked through; rice returned with thinned ketchup until each grain is glossy; scallion, salt and pepper; packed into a bowl and turned out onto a plate; eggs scrambled into a soft open omelette and slid over the rice; ketchup to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Omurice, Japanese Rice Omelet (NYT Cooking)](https://cooking.nytimes.com/recipes/1019430-omurice-japanese-rice-omelet) [Tier 2 (locked list): NYT Cooking]: Onion and carrot cooked in butter about 3 min; more butter, day-old rice 1-2 min until glossy; ketchup and soy sauce 30 s to caramelise; peas; packed into a greased bowl and turned out; 2 eggs per omelette cooked in a small nonstick pan, stirred, then left to set and turned out over the rice with the edges tucked under; ketchup zigzag. (Its cured meat is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Omurice, Japanese Omelet Over Chicken Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17704-omurice-japanese-omelet-over-chicken-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Ketchup, soy sauce, sugar, pepper and garlic powder sauce; chicken thigh pieces browned about 2 min, onion 2-4 min until the chicken is cooked through; rice and sauce about 1 min; rice packed into a bowl and turned out onto 4 plates; each egg whisked with milk and mayonnaise and cooked in butter in an 8-inch nonstick pan, stirred, then slid over the rice; parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Onion and carrot cooked first (SE; NYT); diced chicken thigh cooked through (SE; ATK); butter and cold rice until glossy (NYT); ketchup (all three) and soy sauce (NYT; ATK); peas (NYT); rice packed into a bowl and turned out onto each plate (all three); eggs whisked with milk (ATK) and cooked in butter in a small nonstick pan, stirred into curds (all three), then slid over the rice with the edges tucked under (NYT); ketchup zigzag (NYT; SE) and parsley (ATK). Cooking the omelette under a lid until fully set (71 °C) and the 74 °C checks are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/ketchup-chicken-fried-rice-folded-omelette-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
