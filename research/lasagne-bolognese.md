# Research: Lasagne Bolognese (Beef Ragù and Béchamel)
Dish: Sheets/baked (lasagne) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Lasagna Bolognese (Serious Eats)](https://www.seriouseats.com/lasagna-bolognese-al-forno-recipe) [Tier 1 (locked list): Serious Eats]: Béchamel of 60 g butter, 35 g flour, 700 ml milk with nutmeg; layered with ragù and Parmigiano; baked until bubbling and browned; rested before cutting. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Green Lasagna With Bolognese and Béchamel (NYT Cooking)](https://cooking.nytimes.com/recipes/1016660-green-lasagna-with-bolognese-sauce-and-bechamel) [Tier 2 (locked list): NYT Cooking]: Beef-only ragù with milk and tomato simmered about 1½ h; béchamel cooked 5-10 min until no floury taste; thin layers. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Bolognese Sauce (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/536-classic-bolognese-sauce) [Tier 1 (locked list): America's Test Kitchen]: Soffritto in butter until soft; meat crumbled and cooked only until it loses its raw colour; milk simmered away 10-15 min before tomatoes; about 3 h at the barest simmer. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bolognese Sauce (NYT Cooking adaptation)](https://cooking.nytimes.com/recipes/1015181-marcella-hazans-bolognese-sauce) [Tier 2 (locked list): NYT Cooking]: Beef chuck; milk simmered away with a grating of nutmeg before the tomatoes; laziest simmer 3 h or more with water added when it dries; fat separates at the end. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Beef only (no pork) and no wine; milk-before-tomato order and 2½-3 h simmer kept (04-P8).
- Minced beef cooked until no pink remains (71 °C); baked to 74 °C in the centre.
- No-precook sheets, so the ragù is kept loose.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 240 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/lasagne-bolognese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P8 (ragù: milk before tomatoes, long simmer; wine omitted); knowledge gap noted: 04-pasta has no item for lasagne assembly; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
