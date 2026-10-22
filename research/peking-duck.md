# Research: Peking-Style Roast Duck with Pancakes
Dish: Peking duck / flavour: Classic. Private file, not published.

## Sources actually opened
- [Peking Duck with Mandarin Pancakes and Plum Sauce (Serious Eats)](https://www.seriouseats.com/peking-duck-mandarin-pancakes-plum-sauce-recipe) [Tier 1 (locked list): Serious Eats]: Skin scalded, glazed, air-dried uncovered in the fridge 12-36 h until dry and leathery; roasted at about 175 °C (350 °F) for 1 h then about 120 °C (250 °F) for about 30 min until the fat stops dripping; served in pancakes with scallion and cucumber. _(read via search extract; curl 200)_
- [Peking Duck With Honey and Five-Spice Glaze (NYT Cooking)](https://cooking.nytimes.com/recipes/1019963-peking-duck-with-honey-and-five-spice-glaze) [Tier 2 (locked list): NYT Cooking]: Home method: duck seasoned with five-spice, glazed with honey, dried, roasted until the skin is lacquered and crisp. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Roasted flat on a rack over water rather than upright (the upright method in the source uses a beer can, which is not used here).
- Optional 220 °C blast to crisp; 74 °C (USDA poultry) as the doneness check.
- Duck edible weight after rendering is an estimate.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 100 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/peking-duck-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6.0 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Oven preheat given 20 min ahead in the drying step (CHECKLIST Preheat)
- honey: 2 tbsp → 42 g (CHECKLIST 1, weights in grams)
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
