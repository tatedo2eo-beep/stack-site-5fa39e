# Research: Shredded Beef Chimichangas
Dish: Chimichanga / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chivichangas de Machaca (NYT Cooking)](https://cooking.nytimes.com/recipes/1019638-chivichangas-de-machaca-stewed-brisket-and-cheese-chimichangas) [Tier 2 (locked list): NYT Cooking]: Brisket simmered with aromatics until it shreds, cooked down with a tomato and chile sauce, wrapped with cheese in flour tortillas and fried until crisp. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list source listed above; nothing copied.

## Own cooking judgment
- Much less salt and cheese.
- Fresh tomato, pepper and jalapeño cooked into the beef.
- Shallow-fried to a 74 °C centre.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 195 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/shredded-beef-chimichangas-fried-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
