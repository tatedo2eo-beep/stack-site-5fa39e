# Research: Triple-Cooked Chips
Dish: Pont-Neuf/triple-cooked chips / flavour: Classic. Private file, not published.

## Sources actually opened
- [British Chips (Serious Eats)](https://www.seriouseats.com/british-chips-recipe-8605265) [Tier 1 (locked list): Serious Eats]: 1.3 cm chips boiled about 12 min with vinegar and salt until fully tender; dried on a rack and frozen; first fry at 130 °C about 3 min until a crust forms; final fry hot until deep golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Perfect Thin and Crispy French Fries (Serious Eats)](https://www.seriouseats.com/perfect-french-fries-recipe) [Tier 1 (locked list): Serious Eats]: Batons rinsed; simmered 10 min in water with vinegar and salt; first fry at 204 °C dropping to about 182 °C for 50 s; cooled or frozen; second fry until crisp. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Simmer to cracking, 130 °C fry, 190 °C fry, chilling between (SE British chips); thick squared Pont-Neuf cut to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/triple-cooked-chips-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
