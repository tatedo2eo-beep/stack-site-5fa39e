# Research: Potato Gnocchi with Butter-Tomato Sauce
Dish: Gnocchi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Light and Tender Potato Gnocchi (Serious Eats)](https://www.seriouseats.com/light-tender-potato-gnocchi-recipe) [Tier 1 (locked list): Serious Eats]: Russets baked (not boiled) at 232 °C about 45 min; riced and steamed off; optional yolks; about 100 g flour per 1.4 kg potatoes cut in with a bench scraper and fold-pressed, never kneaded; sage-butter sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gnocchi alla Sorrentina (Serious Eats)](https://www.seriouseats.com/gnocchi-alla-sorrentina) [Tier 1 (locked list): Serious Eats]: Same baked-potato gnocchi with 3 yolks and 128 g flour; gnocchi finished in a simple garlic-basil tomato sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Potato Gnocchi, Four Ways (NYT Cooking)](https://cooking.nytimes.com/recipes/1014559-potato-gnocchi-four-ways) [Tier 2 (locked list): NYT Cooking]: Baked potatoes, riced, with 60-90 g flour per 680 g; test-boil one piece and add flour only if it falls apart; ridged on a fork; cooked until they float. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Butter-Onion Tomato Sauce (NYT Cooking adaptation)](https://cooking.nytimes.com/recipes/1015178-marcella-hazans-tomato-sauce) [Tier 2 (locked list): NYT Cooking]: Tomatoes, butter and a halved onion simmered uncovered about 45 min, crushed occasionally; onion discarded; enough for about 450 g pasta. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Potatoes baked at 220 °C (200 °C fan); 140 g flour per 1 kg potatoes with 1 yolk, fold-pressed; test piece boiled.
- Butter-onion tomato sauce on 400 g tomatoes with 50 g butter.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 70 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/potato-gnocchi-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P9 (butter-onion tomato sauce, butter-to-tomato ratio); knowledge gap noted: 04-pasta has no item for gnocchi; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
