# Research: Tuscan Panzanella with Tomatoes, Cucumber and Basil
Dish: Panzanella / flavour: Classic. Private file, not published.

## Sources actually opened
- [Italian Bread Salad (Panzanella) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6608-italian-bread-salad-panzanella) [Tier 1 (locked list): America's Test Kitchen]: Bread toasted in the oven; tomatoes salted and drained 15 min with juices whisked into the vinaigrette; bread soaked in dressing 10 min before vegetables and basil go in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Panzanella Salad (Serious Eats)](https://www.seriouseats.com/classic-panzanella-salad-recipe) [Tier 1 (locked list): Serious Eats]: Tomatoes salted 15 min; bread dried in a moderate oven about 15 min; dressing built on the tomato juice; salad rested about 30 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Panzanella (NYT Cooking)](https://cooking.nytimes.com/recipes/1017518-panzanella) [Tier 2 (locked list): NYT Cooking]: Bread cubes oven-toasted; tomatoes with capers and a sharp dressing; rested about 30 min so the bread soaks it up. (Its wine vinegar, Dijon and mozzarella are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Salami, wine vinegar and Dijon mustard used by some sources are left out (halal): cider vinegar, lemon and mustard powder take their place.

## Own cooking judgment
- Tomatoes salted and drained 15 min, juice whisked into the dressing (ATK, SE)
- Oven-dried bread soaked in dressing about 10 min (ATK)
- Capers and a 15-30 min rest before serving (NYT, SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tuscan-panzanella-tomato-bread-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
