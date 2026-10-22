# Research: Louisiana-Style Crayfish Tail Stew with Rice
Dish: Crawfish étouffée / flavour: Classic. Private file, not published.

## Sources actually opened
- [Shrimp Étouffée (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7888-shrimp-etouffee) [Tier 1 (locked list): America's Test Kitchen]: Flour toasted then cooked with butter to a deep brown roux; trinity softened 10-12 min; paprika, cayenne, garlic, thyme and tomato; stock whisked in and simmered 25 min; shrimp simmered until cooked; scallions; rice, hot sauce and lemon. (Its Worcestershire is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crawfish Étouffée (NYT Cooking)](https://cooking.nytimes.com/recipes/1018588-crawfish-etouffee) [Tier 2 (locked list): NYT Cooking]: Onion, poblano, celery and garlic softened in butter; thyme and cayenne; simmered 30 min; thawed crawfish tails and green onions added for 10 min, then parsley; served over rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [New Crawfish Etouffee (NYT Cooking)](https://cooking.nytimes.com/recipes/11509-new-crawfish-etouffee) [Tier 2 (locked list): NYT Cooking]: Seasoning mix of paprika, garlic, onion, peppers and cayenne; onion, peppers and celery cooked to a glaze; browned flour stirred to a paste; stock brought to the boil; crawfish tails added and brought back to a full boil; rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Butter-and-flour roux cooked to a peanut-butter colour (ATK 7888 deep-brown roux; NYT 11509 browned flour); onion, green pepper and celery (all three); paprika, cayenne, thyme, garlic and a little tomato (ATK, NYT 11509); stock simmered to thicken (ATK, NYT 11509); precooked crayfish tails and spring onions added last and heated through (NYT 1018588, NYT 11509) to 74 °C by the site reheating rule; rice, lemon and hot sauce.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 50 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/louisiana-style-crayfish-tail-stew-rice-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
