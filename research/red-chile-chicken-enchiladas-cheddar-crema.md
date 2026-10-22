# Research: Red Chile Chicken Enchiladas with Cheddar and Lime Crema
Dish: Enchilada / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Enchiladas with Red Chile Sauce (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/67-chicken-enchiladas-with-red-chile-sauce) [Tier 1 (locked list): America's Test Kitchen]: Chicken thighs simmered in a chilli powder, coriander and cumin tomato sauce, strained and shredded; mixed with cheddar, coriander and jalapeños; rolled in oiled, oven-warmed corn tortillas, sauced, topped with cheese and baked covered then uncovered. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Red Enchilada Sauce (NYT Cooking)](https://cooking.nytimes.com/recipes/1023768-red-enchilada-sauce) [Tier 2 (locked list): NYT Cooking]: Onion, garlic and dried red chillies simmered in water, blended and strained, then cooked in a little oil until thickened and seasoned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cook-the-chicken-in-the-sauce and strain method, oven-softened tortillas, covered then uncovered bake (ATK)
- Red chilli sauce built on onion and garlic simmered down (NYT)
- No-salt passata and a lime crema topping to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 40 min against the step times.
- Quantities checked against servings (5). Nutrition worked from USDA FDC (see content/notes/red-chile-chicken-enchiladas-cheddar-crema-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
