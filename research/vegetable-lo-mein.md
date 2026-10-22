# Research: Vegetable Lo Mein with Mushrooms and Greens
Dish: Lo mein / flavour: Vegetable. Private file, not published.

## Sources actually opened
- [Lo Mein (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4411-pork-stir-fry-with-noodles-lo-mein) [Tier 1 (locked list): America's Test Kitchen]: Soy, oyster and hoisin sauce base with stock and cornflour; meat browned in batches; shiitake, spring onions and cabbage; noodles boiled, drained and tossed with the sauce. (Its pork and wine are not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Stir-Fried Lo Mein With Beef and Broccoli (Serious Eats)](https://www.seriouseats.com/stir-fried-lo-mein-beef-broccoli-recipe) [Tier 1 (locked list): Serious Eats]: Beef marinated with soy and cornflour, seared in a smoking wok and set aside; broccoli stir-fried then steamed with a splash of water; fresh lo mein noodles boiled about 3 min and tossed with light and dark soy and oyster sauce. (Its Shaoxing wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Browned shiitake for savoury depth; no oyster sauce so it is vegetarian.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/vegetable-lo-mein-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 02-C11 (stir-fry marinade; probe 74 °C, C1); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
