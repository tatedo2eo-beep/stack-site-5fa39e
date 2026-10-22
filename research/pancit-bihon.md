# Research: Pancit Bihon (Filipino Rice Vermicelli with Chicken and Vegetables)
Dish: Pancit bihon / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pancit Bihon (Serious Eats)](https://www.seriouseats.com/pancit-bihon-5196328) [Tier 1 (locked list): Serious Eats]: Garlic and red onion, grated carrot and mangetout stir-fried; rice vermicelli cooked in chicken stock with oyster and soy sauce until the liquid is absorbed; chicken returned. (Its fish sauce is left out here to keep salt down.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pancit (NYT Cooking)](https://cooking.nytimes.com/recipes/1024747-pancit) [Tier 2 (locked list): NYT Cooking]: Rice vermicelli soaked in hot water only as long as the packet says so it does not turn mushy; stock, soy, oyster sauce and sugar mixed; chicken cooked and lifted out, vegetables stir-fried, noodles tossed in the sauce until absorbed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- Short soak so the vermicelli stays firm (NYT); noodles absorb stock with oyster and soy sauce (SE).
- No fish sauce, to keep salt down.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pancit-bihon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G5 (heat control: smoking-hot wok for stir-frying); 06-G4 (browning: cook in batches, do not crowd); 02-C11 (stir-fry marinade; probe 74 °C, C1); 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
