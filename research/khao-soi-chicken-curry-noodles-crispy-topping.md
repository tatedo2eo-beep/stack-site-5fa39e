# Research: Khao Soi Chicken Curry Noodles with Crispy Noodle Topping
Dish: Khao soi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Khao Soi (NYT Cooking)](https://cooking.nytimes.com/recipes/8144-khao-soi-northern-chicken-curry-noodles) [Tier 2 (locked list): NYT Cooking]: Red curry paste, curry powder and turmeric fried; coconut milk cracked in stages; chicken legs simmered with stock, sugar and fish sauce; egg noodles boiled plus a portion fried crisp; served with shallots, pickled mustard greens, coriander and lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source.

## Own cooking judgment
- Chicken cooked to 74 °C at the bone.
- Frying temperature given.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 70 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/khao-soi-chicken-curry-noodles-crispy-topping-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C9 (curry base).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
