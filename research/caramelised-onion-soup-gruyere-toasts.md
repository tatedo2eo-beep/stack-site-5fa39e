# Research: Caramelised Onion Soup with Gruyère Toasts
Dish: French onion / flavour: Classic. Private file, not published.

## Sources actually opened
- [French Onion Soup (Soupe à l'Oignon Gratinée) (Serious Eats)](https://www.seriouseats.com/french-onion-soup-recipe) [Tier 1 (locked list): Serious Eats]: About 1.4 kg sliced onions cooked in butter with salt until deeply browned, scraping the fond; deglazed (sherry in the source, omitted here) and simmered with stock, thyme and bay; finished with a little vinegar (lemon here); garlic-rubbed toasts topped with Gruyère and grilled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [French Onion Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12325-french-onion-soup) [Tier 1 (locked list): America's Test Kitchen]: Onions cooked covered in butter with salt and sugar until they release liquid and turn translucent, then uncovered until well browned; deglazed (red wine in the source, omitted here), beef broth, thyme and bay simmered; baguette croutons topped with Gruyère and Parmesan and grilled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [French Onion Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1017256-french-onion-soup) [Tier 2 (locked list): NYT Cooking]: Onions softened covered in butter with salt, then caramelised uncovered; a tablespoon of flour stirred in; beef stock simmered (wine and sherry in the source, omitted here); bread slices topped with Gruyère and grilled over the soup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Onions cooked covered with salt (and sugar) until they release their liquid, then uncovered until deep brown, scraping the fond (ATK, NYT, SE)
- A little flour stirred in, stock, thyme and bay simmered; all three sources deglaze with wine or sherry, replaced here by extra stock and lemon juice (NYT, ATK, SE)
- Bread toasted, topped with Gruyère over the soup and grilled until bubbling (SE, ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 90 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/caramelised-onion-soup-gruyere-toasts-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- plain flour: 1 tbsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
