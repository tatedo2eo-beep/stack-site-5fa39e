# Research: Mee Goreng (Spicy Fried Noodles with Prawns, Tofu and Fried Egg)
Dish: Mee goreng / flavour: Classic. Private file, not published.

## Sources actually opened
- [Mee Goreng (NYT Cooking)](https://cooking.nytimes.com/recipes/1019458-mee-goreng-southeast-asian-fried-noodles) [Tier 2 (locked list): NYT Cooking]: Fresh yellow noodles fried in a cooked chilli sambal with tofu and pak choi, a splash of water if they stick; prawns until pink and opaque; tomato and bean sprouts last; sweet soy, lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mie Goreng (NYT Cooking)](https://cooking.nytimes.com/recipes/1026253-mie-goreng) [Tier 2 (locked list): NYT Cooking]: Very hot wok; protein seared, egg scrambled in, aromatics softened, cooked noodles tossed with oyster sauce, sambal and kecap manis. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Home-made sambal fried until the oil separates; homemade sweet soy (soy sauce and brown sugar) in place of bottled kecap manis.
- Fried egg on top.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/mee-goreng-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- light brown sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- dark brown sugar: 1.5 tbsp → 18 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
