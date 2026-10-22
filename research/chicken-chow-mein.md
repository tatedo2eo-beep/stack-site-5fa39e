# Research: Chicken Chow Mein with Bean Sprouts and Cabbage
Dish: Chow mein/lo mein / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Chicken Chow Mein (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8075-chicken-chow-mein) [Tier 1 (locked list): America's Test Kitchen]: Fresh noodles boiled, rinsed cold and tossed with sesame oil; chicken sliced thin with cornflour; shiitake, carrot and celery; stock, soy and oyster sauce thickened with cornflour; bean sprouts and noodles tossed in last. (Its rice wine is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Stir-Fried Chow Mein With Four Vegetables (Serious Eats)](https://www.seriouseats.com/stir-fried-chow-mein-four-vegetables) [Tier 1 (locked list): Serious Eats]: Hong Kong-style noodles loosened, fried in a smoking wok until a little crispy, then kept moving once the light and dark soy sauce mixture goes in; sprouts and carrot until just translucent. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Vegetable Chow Mein (NYT Cooking)](https://cooking.nytimes.com/recipes/1023036-vegetable-chow-mein) [Tier 2 (locked list): NYT Cooking]: Fresh pan-fried noodles boiled 1 min, rinsed very cold, oiled and spread on a tray; onion and peppers charred; noodles fried until toasty and dry before the sauce goes in and is tossed to an even colour. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Same noodle preparation as the crispy chow mein; noodles fried loose in short undisturbed spells and tossed.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-chow-mein-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 02-C11 (stir-fry marinade; probe 74 °C, C1); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
