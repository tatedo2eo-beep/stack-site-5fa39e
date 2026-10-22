# Research: Cheesy Potato Gratin
Dish: Gratin / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Rich and Silky Potato Gratin (Serious Eats)](https://www.seriouseats.com/classic-potato-gratin-recipe) [Tier 1 (locked list): Serious Eats]: Cream and milk steeped 1 h with garlic, shallot, thyme, nutmeg and pepper, then strained hot; potatoes sliced 1.5 mm straight into it; layered with Gruyère and Parmesan; baked at 177 °C. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Potatoes au Gratin (NYT Cooking)](https://cooking.nytimes.com/recipes/12831-potatoes-au-gratin) [Tier 2 (locked list): NYT Cooking]: Seasoned layers in a skillet with butter and half-and-half; simmered on the hob, then baked and finished with grated cheese until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Steeped cream and unrinsed slices (SE); covered then uncovered bake; rest 15 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 85 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/cheesy-potato-gratin-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G7 (emulsions: butter and cheese folded over low heat); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
