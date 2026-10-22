# Research: Harira: Moroccan Lentil and Chickpea Soup with Herbs
Dish: Harira / flavour: Classic. Private file, not published.

## Sources actually opened
- [Harira Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1018190-harira-soup) [Tier 2 (locked list): NYT Cooking]: Onion softened in olive oil; garlic, ginger, pepper, turmeric, cumin, cayenne, saffron and cinnamon cooked in; tomatoes, celery leaves and cilantro; brown and red lentils and favas or chickpeas simmered in water until soft; broken vermicelli; lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Moroccan Lentil and Chickpea Soup - Harira (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10605-moroccan-lentil-and-chickpea-soup-harira) [Tier 1 (locked list): America's Test Kitchen]: Onion and celery browned in olive oil; garlic and ginger, then coriander, paprika, cumin, cinnamon and pepper flakes; half the cilantro and parsley cooked in; broth, water, chickpeas and lentils simmered 20 minutes; crushed tomatoes and orzo, then chard; lemon juice and remaining herbs off the heat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Spinach is my swap for chard (easier to find). Saffron left out to keep cost down.

## Own cooking judgment
- Onion and celery softened, garlic, ginger and warm spices cooked in before the herbs (ATK, NYT)
- Lentils and chickpeas simmered in broth and water, then tomatoes and small pasta (ATK, NYT)
- Greens near the end - spinach here in place of chard - and lemon plus fresh herbs off the heat (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 45 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/harira-moroccan-lentil-chickpea-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
