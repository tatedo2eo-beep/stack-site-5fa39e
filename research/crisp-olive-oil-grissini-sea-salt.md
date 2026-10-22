# Research: Crisp Olive Oil Grissini with Sea Salt
Dish: Grissini / flavour: Classic. Private file, not published.

## Sources actually opened
- [Everything Bagel Grissini (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15282-everything-bagel-grissini) [Tier 1 (locked list): America's Test Kitchen]: Plain flour, instant yeast, salt, warm water and olive oil dough risen until doubled, rolled into rectangles, cut into strips, rolled into thin 20-inch ropes, sprayed with oil, topped and baked until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Semolina and Sesame Grissini (Serious Eats)](https://www.seriouseats.com/semolina-and-sesame-grissini-breadsticks-recipe) [Tier 1 (locked list): Serious Eats]: Yeasted olive oil dough rolled into thin ropes on an oiled tray, sprinkled with salt and baked at 400 °F 14-20 minutes until evenly golden, cooled on the trays and stored airtight up to two weeks. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Whole-Wheat Breadsticks With Sesame (NYT Cooking)](https://cooking.nytimes.com/recipes/1013636-whole-wheat-breadsticks-with-sesame) [Tier 2 (locked list): NYT Cooking]: Olive oil dough rolled into a rectangle, risen, cut crosswise and rolled into ropes the length of the baking sheet, baked at 400 °F 25 minutes, switching pans halfway. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cut strips from a rolled rectangle, then roll into ropes (ATK/NYT)
- Olive oil and flaky salt only to match the plain photo
- Bake until crisp right through

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 20 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/crisp-olive-oil-grissini-sea-salt-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
