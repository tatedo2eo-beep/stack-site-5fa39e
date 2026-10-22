# Research: Pad Thai with Prawns and Tofu
Dish: Pad thai / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pad Thai (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/283-pad-thai) [Tier 1 (locked list): America's Test Kitchen]: Rice sticks soaked in hot tap water about 20 min until limp but not fully tender; tamarind soaked in boiling water and pushed through a sieve, mixed with fish sauce and sugar; shrimp seared, garlic and shallot, eggs scrambled, noodles and sauce tossed, sprouts and peanuts last. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pad Thai (NYT Cooking)](https://cooking.nytimes.com/recipes/1023042-pad-thai) [Tier 2 (locked list): NYT Cooking]: Noodles soaked 20-30 min until white and limp; fish sauce, tamarind and palm sugar simmered until dissolved; ingredients lined up in cooking order with a cup of hot water by the stove; tofu and shrimp; cook in 2 batches in a smaller pan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork. The Serious Eats pad thai page returned 403 to curl and timed out twice by WebFetch, so it is not cited.

## Own cooking judgment
- 250 g noodles soaked, not boiled; 3 tbsp fish sauce (kept to 3 for salt).
- Prawns until opaque; tofu fried first and returned.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pad-thai-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
