# Research: Pasta e Fagioli (Bean and Pasta Soup with Rosemary)
Dish: Pasta e fagioli / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pasta e Fagioli (Serious Eats)](https://www.seriouseats.com/pasta-e-fagioli-italian-bean-pasta-soup-recipe) [Tier 1 (locked list): Serious Eats]: Beans cooked with aromatics and rosemary or sage; part of the beans blended with cooking liquid for a creamy body; small pasta; thinned to a lightly creamy soup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta e Fagioli (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11137-pasta-e-fagioli) [Tier 1 (locked list): America's Test Kitchen]: Tinned cannellini, one tin puréed; soffritto softened about 10 min; tomato paste and garlic; ditalini cooked in the soup about 12 min; Parmesan and basil off the heat. (Its pancetta is left out here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Vegetarian: no pancetta, water instead of chicken stock; a third of the soup blended for body.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pasta-e-fagioli-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
