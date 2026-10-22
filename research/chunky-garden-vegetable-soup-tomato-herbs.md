# Research: Chunky Garden Vegetable Soup with Tomato and Herbs
Dish: Vegetable / flavour: Classic. Private file, not published.

## Sources actually opened
- [Vegetable Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1024427-vegetable-soup) [Tier 2 (locked list): NYT Cooking]: Onion, carrots and celery softened in olive oil with garlic, thyme, oregano and a pinch of chilli; potatoes and tomato paste added, then vegetable broth and canned tomatoes simmered; green beans, corn, peas and spinach added near the end; finished with parsley and an acid. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hearty Vegetable Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/833-hearty-vegetable-soup) [Tier 1 (locked list): America's Test Kitchen]: Aromatic vegetables roasted for a deeper broth with tomato paste, leeks, herbs and porcini simmered in broth; potatoes, carrots, celeriac and tomatoes simmered in the strained broth; escarole and optional lima beans added; finished with parsley and seasoned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Onion, carrot and celery softened in olive oil with garlic and dried herbs, tomato paste cooked in (NYT, ATK)
- Potatoes, canned tomatoes and broth simmered until tender (NYT, ATK)
- Quick-cooking green vegetables added near the end, finished with parsley and acid - lemon here (NYT, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/chunky-garden-vegetable-soup-tomato-herbs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
