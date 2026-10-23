# Research: Chana Masala (Chickpeas in Spiced Tomato Gravy)
Dish: Chickpeas (chana masala, falafel) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chana Masala (ATK)](https://www.americastestkitchen.com/recipes/13153-chana-masala) [Tier 1 (locked list): America's Test Kitchen]: Onion, cilantro stems, ginger, garlic and serrano chopped and cooked in oil until sticking; Kashmiri chilli, cumin, turmeric and fennel added, then canned chickpeas and puréed tomatoes simmered; garam masala and salt to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Channa Masala (Serious Eats)](https://www.seriouseats.com/channa-masala-recipe) [Tier 1 (locked list): Serious Eats]: Garlic, ginger and chilli pounded with lemon juice; mustard and cumin seeds bloomed in oil or ghee, onion browned deeply with water deglazing; coriander, pepper, turmeric and garam masala, crushed tomatoes and chickpeas simmered about 30 min; lemon and more garam masala to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Garlic, ginger and chilli paste; cumin seeds and deeply browned onion.
- Kashmiri chilli, coriander, turmeric and garam masala in two stages.
- Canned tomatoes and chickpeas simmered 25-30 min; lemon and coriander to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chana-masala-chickpeas-tomato-gravy-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
