# Research: Japchae (Korean Glass Noodles with Beef and Vegetables)
Dish: Japchae / flavour: Classic. Private file, not published.

## Sources actually opened
- [Japchae with Vegetables and Beef (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15175-japchae-korean-sweet-potato-starch-noodles-with-vegetables-and-beef) [Tier 1 (locked list): America's Test Kitchen]: Beef in thin strips marinated in soy sauce, sugar, garlic and pepper; spinach blanched 5-10 s, rinsed and squeezed; dangmyeon boiled and tossed with the seasoning in a large bowl; vegetables cooked separately. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Japchae (Serious Eats)](https://www.seriouseats.com/japchae-recipe) [Tier 1 (locked list): Serious Eats]: Each vegetable cooked separately in a little oil with a pinch of salt; spinach blanched, squeezed and seasoned; glass noodles boiled, drained and tossed with everything. (Its pork and soju are not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spring Vegetable Japchae (NYT Cooking)](https://cooking.nytimes.com/recipes/1022115-spring-vegetable-japchae-korean-glass-noodles) [Tier 2 (locked list): NYT Cooking]: Sauce of soy sauce, garlic, sugar and sesame oil; noodles boiled 8-10 min until translucent, rinsed cold and tossed with half the sauce first; vegetables cooked in stages and added. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Beef instead of pork; no soju or rice wine.
- Noodles seasoned first (NYT); each vegetable cooked on its own (SE, ATK).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/japchae-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- sugar: 1.5 tbsp → 19 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt for the vegetables -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
