# Research: Ensaladilla Rusa (Spanish Potato Salad) with Tuna and Roasted Peppers
Dish: Ensaladilla rusa / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ensaladilla Rusa (Serious Eats)](https://www.seriouseats.com/russian-salad-recipe-11975761) [Tier 1 (locked list): Serious Eats]: Whole potatoes and carrots started in cold salted water and simmered until tender; peas cooked in the same water; skins rubbed off; diced and folded with chopped hard-boiled eggs, oil-packed tuna and mayonnaise; chilled at least 30 min; topped with olives. (Its sherry vinegar is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Russian Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1021893-russian-salad) [Tier 2 (locked list): NYT Cooking]: Potatoes and carrots boiled whole and peeled under running water, peas and eggs cooked in the same pot; everything diced small and even; mayonnaise dressing; chilled before serving. (Its ham and cornichon brine are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Pork, ham, Dijon mustard, wine or sherry vinegar and vermouth used by some sources are left out (halal): beef, lemon and mustard powder take their place.

## Own cooking judgment
- Whole potatoes and carrots started in cold salted water, peas in the same water (SE, NYT)
- Skins rubbed off; small even dice (NYT)
- Eggs, tuna and mayonnaise folded in; chilled before serving; olive topping (SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 30 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/ensaladilla-rusa-tuna-peppers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tbsp fine salt, for the cooking water -> 18 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
