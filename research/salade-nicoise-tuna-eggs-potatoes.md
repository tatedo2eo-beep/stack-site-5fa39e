# Research: Salade Niçoise with Tuna, Jammy-Firm Eggs and New Potatoes
Dish: Niçoise / flavour: Classic. Private file, not published.

## Sources actually opened
- [Salade Nicoise (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/281-salade-nicoise) [Tier 1 (locked list): America's Test Kitchen]: Lemon-herb vinaigrette; eggs brought to a boil then left off the heat 10 min and chilled in ice water; quartered new potatoes boiled and dressed while warm; green beans cooked in the same water and shocked; lettuce, tuna and tomato-onion each dressed separately and arranged on a platter with olives, anchovies and capers. (Its vermouth and Dijon are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Salade Niçoise (NYT Cooking)](https://cooking.nytimes.com/recipes/11684-salade-nicoise) [Tier 2 (locked list): NYT Cooking]: Lettuce topped with flaked oil-packed tuna, new potatoes, green beans, tomatoes, halved eggs, anchovies, olives and capers, with a whisked garlic vinaigrette and herbs. (Its tarragon vinegar and Dijon are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Pork, ham, Dijon mustard, wine or sherry vinegar and vermouth used by some sources are left out: beef, lemon and mustard powder take their place.

## Own cooking judgment
- Off-heat cooked eggs chilled in ice water (ATK)
- Potatoes dressed warm; beans cooked in the same water and shocked (ATK)
- Each component dressed and arranged on lettuce with tuna, olives, anchovies and capers (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/salade-nicoise-tuna-eggs-potatoes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tbsp fine salt, for the cooking water -> 18 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
