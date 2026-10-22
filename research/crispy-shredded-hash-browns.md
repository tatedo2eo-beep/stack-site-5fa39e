# Research: Crispy Shredded Hash Browns
Dish: Hash browns / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Hash Browns (NYT Cooking)](https://cooking.nytimes.com/recipes/1019209-perfect-hash-browns) [Tier 2 (locked list): NYT Cooking]: Grated potato rinsed until the water runs nearly clear and squeezed dry; thin layer in hot fat and butter; cooked without moving 5-8 min, flipped in sections. (Its bacon fat is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crispy Hash Browns (NYT Cooking)](https://cooking.nytimes.com/recipes/1023166-crispy-hash-browns) [Tier 2 (locked list): NYT Cooking]: Long shreds soaked twice in cold water, wrung out in a towel, seasoned and fried in oil and butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Hash Browns (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/921-classic-hash-browns) [Tier 1 (locked list): America's Test Kitchen]: Shredded potatoes squeezed dry; pressed into a cake in a hot pan, slid out and flipped. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rinse, wring dry, thin layer, no stirring; no bacon fat (halal).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crispy-shredded-hash-browns-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
