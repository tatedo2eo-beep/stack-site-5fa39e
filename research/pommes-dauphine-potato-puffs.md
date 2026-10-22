# Research: Pommes Dauphine (Potato and Choux Puffs)
Dish: Pommes dauphine / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pommes Dauphine (Serious Eats)](https://www.seriouseats.com/pommes-dauphine-recipe-5217321) [Tier 1 (locked list): Serious Eats]: Potatoes rinsed until clear, simmered about 10 min, hot-rinsed, dried and riced; melted butter; folded with half a batch of choux made with milk and water; 15 ml scoops fried at 171 °C about 3½ min until puffed and golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pommes Dauphine (NYT Cooking)](https://cooking.nytimes.com/recipes/11273-pommes-dauphine) [Tier 2 (locked list): NYT Cooking]: Potatoes boiled, milled and dried in a low oven; choux of butter, water, salt, flour and eggs; combined and deep-fried until puffed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- About 2:1 potato to choux; 170 °C so they puff before browning.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/pommes-dauphine-potato-puffs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G7 (emulsions: butter and cheese folded over low heat); 06-G9 (eggs cooked until set, 71 °C for egg dishes); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
