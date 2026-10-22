# Research: Spiced Minced Beef Keema with Peas
Dish: Keema / flavour: Keema matar (with peas). Private file, not published.

## Sources actually opened
- [Keema Matar (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13686-keema-matar-garam-masala-spiced-ground-beef-with-peas) [Tier 1 (locked list): America's Test Kitchen]: Same keema method with frozen peas stirred in for the last 2 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Keema (Garam Masala-Spiced Ground Beef) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13684-keema-garam-masala-spiced-ground-beef) [Tier 1 (locked list): America's Test Kitchen]: Whole peppercorns, cardamom and cinnamon fried in oil; red onion browned; garlic and ginger; beef cooked until the pan is dry; ground coriander, Kashmiri chilli, turmeric and cumin; tomatoes and yoghurt simmered covered until a spoon leaves a clear trail. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Keema (Spiced Ground Meat) (NYT Cooking)](https://cooking.nytimes.com/recipes/1020913-keema-spiced-ground-meat) [Tier 2 (locked list): NYT Cooking]: Onions browned slowly; garlic, ginger, green chilli and tomatoes; beef cooked about 30 min until the liquid evaporates; chilli powder and salt; coriander, mint and garam masala to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Peas added at the end of the keema method (ATK 13686); base method as the classic keema (ATK 13684, NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spiced-minced-beef-keema-peas-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
