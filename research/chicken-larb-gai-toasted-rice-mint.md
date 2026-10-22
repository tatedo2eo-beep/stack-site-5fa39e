# Research: Chicken Larb (Laab Gai) with Toasted Rice and Mint
Dish: Larb / flavour: Chicken. Private file, not published.

## Sources actually opened
- [Thai Laab Gai (NYT Cooking)](https://cooking.nytimes.com/recipes/1012588-thai-laab-gai-chicken-with-lime-chili-and-fresh-herbs) [Tier 2 (locked list): NYT Cooking]: Raw rice toasted dark and ground; chopped chicken cooked quickly in a very hot wok with a little water; dressed while warm with chilli powder, fish sauce, lime, red onion and herbs; served with lettuce, cucumber and sticky rice. Notes that lean beef can replace the chicken. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Laab (NYT Cooking)](https://cooking.nytimes.com/recipes/10373-chicken-laab) [Tier 2 (locked list): NYT Cooking]: Minced chicken cooked gently, toasted ground rice, nam pla, lime, a little sugar and dried chilli; served on lettuce with red onion, spring onion and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Pork, ham, Dijon mustard, wine or sherry vinegar and vermouth used by some sources are left out (halal): beef, lemon and mustard powder take their place.

## Own cooking judgment
- Minced chicken cooked fast in a hot pan with water and dressed while warm (NYT 1012588)
- Toasted rice, lime, fish sauce, a little sugar and chilli; red onion and herbs (NYT 10373, 1012588)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-larb-gai-toasted-rice-mint-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- sugar: 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
