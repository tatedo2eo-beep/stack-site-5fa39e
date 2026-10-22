# Research: Avgolemono: Greek Chicken and Rice Soup with Egg and Lemon
Dish: Avgolemono / flavour: Classic. Private file, not published.

## Sources actually opened
- [Avgolemono (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9476-avgolemono-greek-chicken-and-rice-soup-with-egg-and-lemon) [Tier 1 (locked list): America's Test Kitchen]: Chicken breasts halved and salted; lemon zest, dill, coriander seeds, peppercorns and garlic tied in cheesecloth; broth, rice and bundle boiled then covered 5 minutes; chicken poached off the heat 15 minutes and shredded; cooked rice blended with lemon juice, eggs and yolks and stirred into the simmering soup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Katherine Polyzo's Avgolemono (NYT Cooking)](https://cooking.nytimes.com/recipes/10556-katherine-polyzos-avgolemono) [Tier 2 (locked list): NYT Cooking]: Rice simmered in chicken broth; egg yolks whisked frothy with lemon juice; hot broth and rice ladled slowly into the egg-lemon mixture while beating; seasoned and served. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Food safety: the egg mixture is brought to 71 °C and the chicken checked at 74 °C (FSIS). Salt reduced for low-salt broth.

## Own cooking judgment
- Spice-and-zest bundle, rice cooked briefly then chicken poached off the heat and shredded (ATK)
- Egg-lemon mixture tempered with hot broth before going into the pot (NYT, ATK)
- Some cooked rice blended into the eggs to thicken and stabilise the soup (ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/avgolemono-greek-chicken-rice-soup-egg-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
