# Research: Beef Chow Fun (Wok-Fried Rice Noodles with Beef)
Dish: Beef chow fun / flavour: Classic. Private file, not published.

## Sources actually opened
- [Beef Chow Fun (NYT Cooking)](https://cooking.nytimes.com/recipes/1024415-beef-chow-fun) [Tier 2 (locked list): NYT Cooking]: Dried wide rice noodles soaked in hot water changed every 10 min, 30-40 min; steak marinated with cornflour, sesame oil, soy and optional bicarbonate; seared undisturbed 1-2 min; onion, sprouts and spring onion; sauce of dark and light soy. (Its Shaoxing wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Beef Ho Fun (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16202-beef-ho-fun) [Tier 1 (locked list): America's Test Kitchen]: Flank sliced against the grain, tossed with water and bicarbonate, then soy, oyster sauce and cornflour; seared in a smoking wok and set aside; onion, garlic, ginger and sprouts; fresh ho fun folded in with dark soy until evenly coloured. (Its Shaoxing wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Dry-Fried Chow Fun (Serious Eats)](https://www.seriouseats.com/dry-fried-chow-fun-with-chinese-broccoli-recipe) [Tier 1 (locked list): Serious Eats]: Noodles fried in a smoking wok, lifted and separated until lightly charred; folded carefully to avoid breaking; finished dry with no sauce pooling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Noodles soaked in changed hot water (NYT); beef velveted and seared then set aside (ATK); noodles folded, not stirred, and finished dry (SE).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/beef-chow-fun-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- sugar: 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
