# Research: Palak Paneer (Golden Paneer in Spinach Sauce)
Dish: Palak paneer / flavour: Classic. Private file, not published.

## Sources actually opened
- [Palak Paneer (Serious Eats)](https://www.seriouseats.com/palak-paneer-recipe-5705785) [Tier 1 (locked list): Serious Eats]: Spinach wilted covered with a little water and blended smooth; paneer fried golden in ghee in batches; cumin and mustard seeds popped in ghee with garlic; purée seasoned with salt and Kashmiri chilli, paneer and cream stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Palak Paneer (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/palak-paneer-3364682) [Tier 2 (locked list): Food Network Kitchen]: Paneer made by curdling milk with lemon juice; spinach blanched and puréed; paneer browned in ghee; cumin seeds toasted in ghee with onion, ginger-garlic and spices; spinach purée simmered, finished with cream and the paneer. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Spinach wilted and blended rather than blanched.
- Paneer fried golden before going into the sauce.
- Cumin and mustard seed tempering; cream to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/palak-paneer-golden-paneer-spinach-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
