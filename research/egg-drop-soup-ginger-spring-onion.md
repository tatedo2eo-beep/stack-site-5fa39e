# Research: Egg Drop Soup with Ginger and Spring Onion
Dish: Egg drop soup / flavour: Classic. Private file, not published.

## Sources actually opened
- [Egg Drop Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1017284-egg-drop-soup) [Tier 2 (locked list): NYT Cooking]: Chicken stock infused 20 minutes with garlic, coriander, ginger and peppercorns, strained and salted; cornstarch slurry whisked in; eggs beaten with a little cornstarch poured through fork tines into a gently stirred simmer, left 10 seconds, then broken up; scallions and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Drop Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5142-egg-drop-soup) [Tier 1 (locked list): America's Test Kitchen]: Ginger-scallion chicken stock simmered with soy sauce and salt; cornstarch slurry whisked in until slightly thickened; scallions and cilantro; beaten eggs poured in a slow stream into stock moving in a circle, left to set, then broken up with a fork. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egg Drop Soup (Serious Eats)](https://www.seriouseats.com/chinese-egg-drop-soup-recipe) [Tier 1 (locked list): Serious Eats]: Stock simmered 30 minutes with aromatics (ginger, scallion whites, white peppercorns), strained and salted; cornstarch slurry; eggs beaten with extra cornstarch for tender ribbons, drizzled in after one swirl, left 15 seconds, then stirred gently. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> No Shaoxing wine or sherry (NYT) and no ham (SE); the slurry is made with water. Soy sauce from ATK.

## Own cooking judgment
- Broth infused with ginger, garlic, coriander and peppercorns, then strained (NYT, SE)
- Light cornflour slurry, plus a little cornflour beaten into the eggs for tender ribbons (NYT, SE)
- Eggs poured in a thin stream into a gently moving barely-simmering soup, left to set, then broken up (NYT, ATK, SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/egg-drop-soup-ginger-spring-onion-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
