# Research: Pad See Ew with Chicken and Chinese Broccoli
Dish: Pad see ew / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pad See Ew (Serious Eats)](https://www.seriouseats.com/pad-see-ew-recipe-8784741) [Tier 1 (locked list): Serious Eats]: Rice noodles hydrated, rinsed and coated in black soy sauce and oil before cooking; garlic, protein and Chinese broccoli; cooked one portion at a time over very high heat for char; chilli vinegar to serve. (Its pork and Shaoxing wine are not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pad See Ew with Chicken and Broccolini (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7029-thai-style-stir-fried-noodles-with-chicken-and-broccolini) [Tier 1 (locked list): America's Test Kitchen]: Chicken soaked in water with bicarbonate 15 min and rinsed; noodles soaked in just-boiled water until almost tender; oyster sauce, soy, brown sugar, vinegar and fish sauce; eggs scrambled in a clearing; chilli vinegar with serrano. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pad See Ew (NYT Cooking)](https://cooking.nytimes.com/recipes/1023043-pad-see-ew) [Tier 2 (locked list): NYT Cooking]: Noodles soaked in hot tap water 30-40 min until limp and bouncy; meat seared undisturbed in a smoking wok; garlic, gai lan, eggs, noodles and sugar added in order; oyster, soy and fish sauce with white pepper; dark soy to colour. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Noodles pre-coated in dark soy and oil (SE); chicken velveted with bicarbonate and rinsed (ATK); 2 batches for char.
- Chicken instead of pork; no Shaoxing wine.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pad-see-ew-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 02-C11 (stir-fry marinade; probe 74 °C, C1); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- light brown sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
