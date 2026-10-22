# Research: Persian Cucumber and Tomato Salad (Salad-e Shirazi)
Dish: Shirazi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Salad-e Shirazi (Serious Eats)](https://www.seriouseats.com/salad-e-shirazi-persian-cucumber-and-tomato-salad-recipe-8385448) [Tier 1 (locked list): Serious Eats]: Sour liquid (verjuice, vinegar, lemon or lime), oil, dried mint, salt and pepper whisked; diced tomato, cucumber and finely diced onion tossed in; rested 15 min so juices release; sumac on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Salad-e Shirazi (NYT Cooking)](https://cooking.nytimes.com/recipes/1020212-salad-e-shirazi-persian-cucumber-tomato-and-onion-salad) [Tier 2 (locked list): NYT Cooking]: Cucumbers striped-peeled and diced small with onion and herbs; dried mint crumbled in; tomatoes diced; lime juice, oil, salt and pepper dressing added just before serving; bright, crunchy and tart; leftovers up to 2 days. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own (salt kept low because feta, olives and capers are salty); the core method matches the locked-list sources listed above; nothing copied. Red wine vinegar, sherry or balsamic in the sources is replaced by cider vinegar or citrus (no wine products).

## Own cooking judgment
- Small even dice of cucumber, tomato and onion (NYT, SE)
- Lime, oil, dried mint, salt and pepper dressing (NYT; SE allows lime)
- 15 min rest and sumac on top (SE); fresh mint sprigs are this recipe's own

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/persian-cucumber-tomato-salad-shirazi-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
