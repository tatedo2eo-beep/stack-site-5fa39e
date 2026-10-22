# Research: Italian Bean and Vegetable Soup with Small Pasta and Basil
Dish: Minestrone / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Minestrone (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/918-classic-minestrone) [Tier 1 (locked list): America's Test Kitchen]: Leeks, carrots, onions, celery, potato, courgette, spinach and chopped canned tomatoes simmered in water with a Parmesan rind about an hour; canned cannellini beans added near the end; finished with pesto or basil and seasoned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Minestrone Soup (Serious Eats)](https://www.seriouseats.com/the-best-minestrone-soup-recipe) [Tier 1 (locked list): Serious Eats]: Dried beans simmered with aromatics for a bean broth; onion, carrot, celery, rosemary and garlic sweated in olive oil (optional cured pork omitted here); tomatoes, bean broth, seasonal vegetables and small pasta added; finished with olive oil and grated cheese. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Minestrone (NYT Cooking)](https://cooking.nytimes.com/recipes/1043-minestrone) [Tier 2 (locked list): NYT Cooking]: Cannellini beans soaked and simmered; onion, garlic and leeks softened in olive oil, celery, carrots, courgette, string beans, potato and tomatoes added with stock and simmered; beans added; finished with parsley and grated Parmesan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Onion, leek, carrot and celery softened in olive oil (SE, NYT; ATK simmers them raw)
- Potato, courgette and tomatoes simmered in water or stock (ATK, NYT, SE)
- Cannellini beans and small pasta added, finished with basil and grated cheese (ATK, SE, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/italian-bean-vegetable-soup-small-pasta-basil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
