# Research: Chicken Noodle Soup with Fresh Ginger and Spring Onion
Dish: Chicken noodle / flavour: Ginger. Private file, not published.

## Sources actually opened
- [Old-Fashioned Chicken Noodle Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10555-old-fashioned-chicken-noodle-soup) [Tier 1 (locked list): America's Test Kitchen]: Bone-in chicken seasoned and browned in oil; broth, onion, carrot, celery, thyme and bay added and simmered until the chicken is cooked; chicken removed and shredded; broken spaghetti cooked in the broth, chicken returned, parsley stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Easiest Chicken Noodle Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1020746-easiest-chicken-noodle-soup) [Tier 2 (locked list): NYT Cooking]: Ground chicken browned in olive oil with garlic, coriander and celery seed; celery, carrot, shallot and thyme added, then chicken stock simmered; egg noodles or small pasta cooked in the soup; garnished with herbs and lemon zest. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Chicken browned and simmered in broth with vegetables (ATK, NYT)
- Chicken shredded and noodles cooked in the broth (ATK, NYT)
- Flavour variant: ginger, garlic, spring onion, coriander and lime are this recipe's own additions; no locked source opened for the ginger version

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-noodle-soup-fresh-ginger-spring-onion-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
