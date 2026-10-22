# Research: Mushroom Lasagne with Porcini Béchamel
Dish: Sheets/baked (lasagne) / flavour: Mushroom. Private file, not published.

## Sources actually opened
- [Ultra-Creamy Spinach and Mushroom Lasagna (Serious Eats)](https://www.seriouseats.com/ultra-creamy-spinach-and-mushroom-lasagna-recipe) [Tier 1 (locked list): Serious Eats]: Finely chopped mushrooms cooked until their liquid evaporates and they sizzle, then shallots and thyme; béchamel; mozzarella and Parmigiano; 200 °C oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mushroom Lasagna (NYT Cooking)](https://cooking.nytimes.com/recipes/1014291-mushroom-lasagna) [Tier 2 (locked list): NYT Cooking]: Dried porcini soaked, squeezed and the liquid strained of grit; fresh and soaked mushrooms cooked with shallot, garlic and thyme, then the soaking liquid reduced; olive-oil béchamel; Parmesan layers. (Its red wine is omitted here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lasagna Bolognese (Serious Eats)](https://www.seriouseats.com/lasagna-bolognese-al-forno-recipe) [Tier 1 (locked list): Serious Eats]: Béchamel of 60 g butter, 35 g flour, 700 ml milk with nutmeg; layered with ragù and Parmigiano; baked until bubbling and browned; rested before cutting. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Same béchamel, layering and bake as the bolognese lasagne (one base method).
- Red wine in one source omitted; porcini liquid reduced instead.
- No soy sauce, so the filling stays free of fermented-alcohol traces.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 80 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/mushroom-lasagne-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for lasagne assembly; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
