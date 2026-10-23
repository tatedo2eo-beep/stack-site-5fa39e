# Research: Tom Kha Gai: Coconut-Poached Chicken Breast with Galangal and Lime
Dish: Tom kha / flavour: Chicken (gai). Private file, not published.

## Sources actually opened
- [Coconut Milk Soup with Chicken, Gai Dom Kha (NYT Cooking)](https://cooking.nytimes.com/recipes/1951-coconut-milk-soup-with-chicken-gai-dom-kha) [Tier 2 (locked list): NYT Cooking]: Paste of lemongrass, galangal, garlic, peppercorns, coriander roots and shallots cooked in boiling coconut milk; sliced chicken simmered in the rest of the coconut milk; chillies, fish sauce, lime juice, lime leaves and coriander to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tom Kha Gai (Serious Eats)](https://www.seriouseats.com/tom-kha-gai-6741858) [Tier 1 (locked list): Serious Eats]: Chicken stock simmered with galangal, lemongrass, shallots and fish sauce; chicken thighs simmered until cooked; galangal-infused stock, makrut lime leaves, chillies and coconut cream added off the boil; lime juice and fish sauce to finish. _(read via search extract (curl 403 to the fetcher); ingredients and steps read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Pounded aromatic paste bloomed in coconut milk.
- Whole breasts poached at a bare simmer to 74 °C, rested and sliced.
- Fish sauce and lime off the heat.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tom-kha-gai-coconut-poached-chicken-breast-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C7 (cutlets).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
