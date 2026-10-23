# Research: Poutine (Fries, Cheese Curds and Gravy)
Dish: Poutine / flavour: Classic. Private file, not published.

## Sources actually opened
- [The Ultimate Poutine (Serious Eats)](https://www.seriouseats.com/ultimate-perfect-poutine-fries-cheese-curds-gravy-recipe) [Tier 1 (locked list): Serious Eats]: Butter roux cooked golden, beef stock whisked in and reduced to 2 cups, finished with vinegar; fries soaked until the water runs clear and fried twice; fresh cheese curds at room temperature. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Poutine (NYT Cooking)](https://cooking.nytimes.com/recipes/1025426-poutine) [Tier 2 (locked list): NYT Cooking]: Fries soaked at least 1 h; gravy of butter, shallot, garlic and flour with beef and chicken stock and thyme simmered until it coats a spoon; curds scattered on hot fries and covered with hot gravy. (Its Worcestershire is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Perfect Thin and Crispy French Fries (Serious Eats)](https://www.seriouseats.com/perfect-french-fries-recipe) [Tier 1 (locked list): Serious Eats]: Batons rinsed; simmered 10 min in water with vinegar and salt; first fry at 204 °C dropping to about 182 °C for 50 s; cooled or frozen; second fry until crisp. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- beef and chicken stock; no Worcestershire; cider vinegar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 50 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/poutine-fries-curds-gravy-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G11 (roux-thickened sauces); 06-G10 (stocks).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
