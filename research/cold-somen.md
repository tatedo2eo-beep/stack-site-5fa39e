# Research: Chilled Somen with Dipping Sauce
Dish: Somen / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cold Somen with Dipping Sauce (Serious Eats)](https://www.seriouseats.com/cold-somen-noodles-with-dipping-sauce-recipe) [Tier 1 (locked list): Serious Eats]: Dip of light soy sauce, sugar and dashi with bonito flakes steeped off the heat and strained, then chilled; somen boiled about 1 min, rinsed cold and held in iced water; served on ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cold Soba with Dipping Sauce (NYT Cooking)](https://cooking.nytimes.com/recipes/10549-cold-soba-noodles-with-dipping-sauce) [Tier 2 (locked list): NYT Cooking]: Noodles cooked until tender, rinsed under cold running water and drained well; dashi and soy dip with ginger and spring onions alongside. (Its mirin is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cold Soba Noodle Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5201-cold-soba-noodle-salad-zaru-soba) [Tier 1 (locked list): America's Test Kitchen]: Noodles boiled about 4 min, rinsed under cold water until cool; soy-based dressing with ginger; spring onions and nori to finish. (Its mirin is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Kombu and bonito dip with soy sauce and sugar, no mirin.
- Noodles rinsed and rubbed under cold water, then iced.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/cold-somen-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
