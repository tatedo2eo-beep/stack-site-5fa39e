# Research: Soft Layered Wholemeal Chapati
Dish: Chapati / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chapati (NYT Cooking)](https://cooking.nytimes.com/recipes/1024092-chapati) [Tier 2 (locked list): NYT Cooking]: Flour, salt, oil and water kneaded and rested, stretched thin, oiled, rolled into a rope and coiled, then rolled out and cooked in a skillet with oil until golden and puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Kenyan Chapati (Serious Eats)](https://www.seriouseats.com/flatbread-kenyan-chapati-recipe-11888312) [Tier 1 (locked list): Serious Eats]: All-purpose and whole-wheat flour with salt, water and oil, rolled into a rectangle, oiled, rolled into a log, cut and pressed into rounds, rested, rolled thin and cooked in a hot skillet. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chapati (Whole-Wheat Wraps) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17577-chapati-whole-wheat-wraps) [Tier 1 (locked list): America's Test Kitchen]: Whole-wheat and all-purpose flour with salt, warm water and oil, rested 30 min, rolled into 9-inch rounds and cooked in a lightly oiled cast-iron skillet until spotty brown and puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Part wholemeal for the speckled look in the photo
- Log-and-slice layering (SE method)
- Oil only, no milk or lard

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 20 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/soft-layered-wholemeal-chapati-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
