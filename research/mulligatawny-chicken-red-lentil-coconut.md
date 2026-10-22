# Research: Mulligatawny with Chicken, Red Lentils and Coconut
Dish: Mulligatawny / flavour: Classic. Private file, not published.

## Sources actually opened
- [Mulligatawny Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1022958-mulligatawny-soup) [Tier 2 (locked list): NYT Cooking]: Onion softened in oil; garlic and ginger, then mustard seeds, turmeric, curry powder, cayenne and cumin fried until popping; carrot, celery and apple, tomato paste and flour; chicken thighs, red lentils and broth simmered about 30 minutes; coconut milk and lime juice to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mulligatawny Soup (Serious Eats)](https://www.seriouseats.com/mulligatawny-soup-recipe) [Tier 1 (locked list): Serious Eats]: Toasted whole spices, browned chicken thighs, onion, carrot and celery with curry powder, garlic, ginger, sweet potato, apple, tomato and red lentils simmered in broth until thick. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mulligatawny Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1831-mulligatawny-soup) [Tier 1 (locked list): America's Test Kitchen]: Flour-thickened curry base with onion, coconut, garlic and ginger; chicken broth, carrots and celery simmered and puréed smooth. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bloom-the-spices method with chicken thighs, red lentils and coconut milk (NYT)
- Apple and lentils for body (SE)
- Flour roux for a velvety texture (ATK)
- Half broth, half water for salt

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/mulligatawny-chicken-red-lentil-coconut-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets).
Changes made:
- black or brown mustard seeds: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- plain flour: 3 tbsp → 24 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
