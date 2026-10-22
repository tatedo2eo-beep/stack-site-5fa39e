# Research: Creamy Potato Salad with Celery and Red Onion
Dish: Potato salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Potato Salad (Serious Eats)](https://www.seriouseats.com/classic-potato-salad-recipe) [Tier 1 (locked list): Serious Eats]: Cubes cooked in water with salt, sugar and vinegar; spread out and sprinkled with vinegar while hot; folded into mayonnaise with celery, red onion, mustard and herbs; rested in the fridge at least 1 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Potato Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1022276-classic-potato-salad) [Tier 2 (locked list): NYT Cooking]: Salted cold-water start until just fork-tender; mayonnaise, mustard and onion dressing; diced hard-boiled eggs and celery; chilled at least 2 h. (Its sweet relish is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Vinegar on the hot potatoes (SE); eggs and celery (NYT) to match the photo; wine-free mustard (halal).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/creamy-potato-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G9 (eggs cooked until set, 71 °C for egg dishes).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
