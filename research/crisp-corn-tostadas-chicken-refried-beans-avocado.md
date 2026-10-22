# Research: Crisp Corn Tostadas with Chicken, Refried Beans and Avocado
Dish: Tostada / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Tomatillo Chicken Tostadas (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9105-tomatillo-chicken-tostadas) [Tier 1 (locked list): America's Test Kitchen]: Shredded cooked chicken and onion cooked 5 min with tomatillo salsa until thickened; refried beans heated and spread on corn tostadas, topped with the chicken, lettuce, tomato, soured cream and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tostadas de Tinga de Pollo (NYT Cooking)](https://cooking.nytimes.com/recipes/1026796-tostadas-de-tinga-de-pollo-shredded-chicken-and-salsa-tostadas) [Tier 2 (locked list): NYT Cooking]: Onion browned about 6 min, black beans simmered about 5 min and mashed until thick and creamy; shredded cooked chicken warmed in salsa; beans spread over tostadas and topped with chicken, queso fresco, coriander and onion (bacon in the source not used). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Tostadas with Spicy Mashed Black Beans (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8320-chicken-tostadas-with-spicy-mashed-black-beans) [Tier 1 (locked list): America's Test Kitchen]: Sliced chicken breast tossed with cumin, salt and pepper and cooked 5-7 min in a hot pan; black beans mashed in the pan with tomatoes and coriander about 5 min until thick; tostadas topped with beans, chicken, feta, radishes and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Onion browned, beans simmered about 5 min and mashed until thick and creamy (NYT; ATK Spicy mashes beans in the pan about 5 min)
- Sliced chicken breast seasoned with cumin, salt and pepper and cooked 5-7 min (ATK Spicy)
- Beans spread on crisp corn shells, topped with chicken, lettuce, fresh cheese and coriander (ATK Tomatillo, NYT, ATK Spicy)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-corn-tostadas-chicken-refried-beans-avocado-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
