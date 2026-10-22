# Research: Potato and Onion Vareniki with Sour Cream
Dish: Vareniki / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pierogi Ruskie (NYT Cooking)](https://cooking.nytimes.com/recipes/1020983-pierogi-ruskie-potato-and-cheese-pierogi) [Tier 2 (locked list): NYT Cooking]: 255 g flour with butter melted in hot water, then egg; kneaded 5-7 min, rested 30 min; potatoes boiled tender and mashed with onions cooked in butter and cottage cheese; filled, sealed, boiled; sour cream and dill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ukrainian Varenyky (Serious Eats)](https://www.seriouseats.com/varenyky-recipe-8695992) [Tier 1 (locked list): Serious Eats]: Dough of 285 g flour with butter rubbed in, egg, sour cream and water; well-drained cheese filling; rounds folded into half-moons and sealed; boiled and tossed with butter; sour cream and dill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Dough with butter melted in hot water and an egg (NYT), kneaded and rested 30 min.
- Potato, fried onion and cottage cheese filling cooled before shaping; boiled until they float, then 2-3 min.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 70 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/potato-vareniki-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for boiled filled dumplings; the method rests on the locked-list sources above.
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
