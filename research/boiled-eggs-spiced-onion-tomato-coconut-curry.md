# Research: Boiled Eggs in Spiced Onion, Tomato and Coconut Curry
Dish: Egg curry / flavour: Classic. Private file, not published.

## Sources actually opened
- [Egg Curry (NYT Cooking)](https://cooking.nytimes.com/recipes/1020912-egg-curry) [Tier 2 (locked list): NYT Cooking]: Onions caramelized slowly in oil 25-30 min, garlic and ginger fried, whole cinnamon and cardamom toasted, then coriander, turmeric and peppercorns; tomatoes, salt and water cooked down until thick; garam masala and hard-boiled eggs added and warmed; finished with coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ande ki Kari (Eggs in Spicy Tomato Sauce) (NYT Cooking)](https://cooking.nytimes.com/recipes/1018673-ande-ki-kari-eggs-in-spicy-tomato-sauce) [Tier 2 (locked list): NYT Cooking]: Eggs boiled 9-10 min and peeled; onions browned in ghee and coconut oil with garlic, ginger, cumin seed, cinnamon and cardamom; ground coriander, cumin, turmeric and chilli added, then grated tomato and water; garam masala and eggs added; served with rice or flatbread. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Curry with Tomato, Coconut Milk, and Peas (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17089-egg-curry-with-tomato-coconut-milk-and-peas) [Tier 1 (locked list): America's Test Kitchen]: Eggs cooked in boiling water and cooled; cardamom and coriander seed toasted and ground; onion softened in ghee with curry leaves, ginger, garlic, chillies and turmeric; crushed tomatoes and coconut milk simmered, peas and halved eggs added; finished with coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs boiled, cooled and peeled (NYT Ande ki Kari, ATK)
- Onions browned in ghee or oil with garlic, ginger, whole cardamom and ground spices (NYT, NYT, ATK)
- Tomatoes cooked down, coconut milk added (ATK), garam masala and eggs added and warmed through (NYT, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/boiled-eggs-spiced-onion-tomato-coconut-curry-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
