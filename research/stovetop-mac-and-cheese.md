# Research: Creamy Stovetop Macaroni Cheese
Dish: Mac and cheese / flavour: Stovetop. Private file, not published.

## Sources actually opened
- [Stovetop Mac and Cheese (NYT Cooking)](https://cooking.nytimes.com/recipes/1025254-stovetop-mac-and-cheese) [Tier 2 (locked list): NYT Cooking]: Warm milk whisked into a butter-flour roux; cheddar-based cheese mix melted in; macaroni folded in on the hob. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Stovetop Macaroni and Cheese (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9474-simple-stovetop-macaroni-and-cheese) [Tier 1 (locked list): America's Test Kitchen]: Mustard and a pinch of cayenne in the sauce; toasted panko-and-oil topping. (Its Dijon is replaced with mustard powder.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [3-Ingredient Stovetop Mac and Cheese (Serious Eats)](https://www.seriouseats.com/ingredient-stovetop-mac-and-cheese-recipe) [Tier 1 (locked list): Serious Eats]: Cheese added over low heat so it melts smoothly; context for the creamy texture. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written as an extra flavour for the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Melting the cheese off the heat and the quantities are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/stovetop-mac-and-cheese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
