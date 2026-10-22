# Research: Green Chilli and Tomatillo Chicken Soup with Hominy
Dish: Pozole verde / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Posole (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8692-chicken-posole) [Tier 1 (locked list): America's Test Kitchen]: Onion softened covered with salt, garlic and oregano added; broth, rinsed canned hominy and green chillies simmered about 15 min until the hominy softens; shredded chicken added and heated through; coriander and a little chilli brine stirred in off the heat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pozole Verde (NYT Cooking)](https://cooking.nytimes.com/recipes/1026486-pozole-verde) [Tier 2 (locked list): NYT Cooking]: Tomatillos, poblanos, jalapeño, onion, garlic and coriander stems roasted hot until browned; diced onion, garlic, cumin and oregano cooked in oil with greens; roasted vegetables blended into a green base and simmered with broth and hominy; served with cabbage, radish, jalapeño and avocado (vegetarian version; chicken added here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Tomatillos, poblanos and jalapeño charred or roasted and blended into a green base with coriander (NYT)
- Aromatics, oregano and cumin cooked in oil; broth and rinsed hominy simmered until the hominy softens (ATK, NYT)
- Shredded chicken added and heated through; served with cabbage, radish and avocado (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 70 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/green-chilli-tomatillo-chicken-hominy-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
