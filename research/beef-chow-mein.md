# Research: Beef and Broccoli Chow Mein
Dish: Chow mein/lo mein / flavour: Beef. Private file, not published.

## Sources actually opened
- [Stir-Fried Lo Mein With Beef and Broccoli (Serious Eats)](https://www.seriouseats.com/stir-fried-lo-mein-beef-broccoli-recipe) [Tier 1 (locked list): Serious Eats]: Beef marinated with soy and cornflour, seared in a smoking wok and set aside; broccoli stir-fried then steamed with a splash of water; fresh lo mein noodles boiled about 3 min and tossed with light and dark soy and oyster sauce. (Its Shaoxing wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Beef Ho Fun (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16202-beef-ho-fun) [Tier 1 (locked list): America's Test Kitchen]: Flank sliced against the grain, tossed with water and bicarbonate, then soy, oyster sauce and cornflour; seared in a smoking wok and set aside; onion, garlic, ginger and sprouts; fresh ho fun folded in with dark soy until evenly coloured. (Its Shaoxing wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Vegetable Chow Mein (NYT Cooking)](https://cooking.nytimes.com/recipes/1023036-vegetable-chow-mein) [Tier 2 (locked list): NYT Cooking]: Fresh pan-fried noodles boiled 1 min, rinsed very cold, oiled and spread on a tray; onion and peppers charred; noodles fried until toasty and dry before the sauce goes in and is tossed to an even colour. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Flank velveted with bicarbonate (ATK, NYT); broccoli steamed in the wok with a splash of water (SE).
- Same noodle preparation and loose fry as the chicken chow mein.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/beef-chow-mein-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
