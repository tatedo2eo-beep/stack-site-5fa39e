# Research: Korean Rice Bowl with Beef, Vegetables, Crisp Rice and Chilli Sauce
Dish: Bibimbap (dolsot) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Bibimbap With Beef, Winter Squash, Spinach and Cucumber (NYT Cooking)](https://cooking.nytimes.com/recipes/1015418-bibimbap-with-beef-winter-squash-spinach-and-cucumber) [Tier 2 (locked list): NYT Cooking]: Top sirloin thinly sliced across the grain and marinated with soy, sugar, sesame oil, sesame seeds, garlic, ginger, scallion and pepper; vinegar, sesame oil and garlic dressing; spinach wilted and shiitakes cooked separately with soy; hot rice topped with each element and fried eggs, nori strips and sesame seeds. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bibimbap (NYT Cooking)](https://cooking.nytimes.com/recipes/1024852-bibimbap) [Tier 2 (locked list): NYT Cooking]: Bowl of rice topped with marinated beef, separately seasoned vegetable side dishes and an egg, with a chilli-paste sauce, mixed together at the table. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Sirloin sliced thinly across the grain and marinated with soy, sugar, sesame oil, garlic and ginger (NYT 1015418; NYT 1024852); separately seasoned vegetables including spinach and shiitakes (both); hot rice topped with each element and an egg and mixed at the table (both). The grated pear, the chilli-flake sauce instead of chilli paste (which often contains alcohol), the crisp rice in a cast-iron pan, the fully set eggs and the probe temperatures are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/korean-rice-bowl-beef-vegetables-crisp-rice-chilli-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- light brown sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
