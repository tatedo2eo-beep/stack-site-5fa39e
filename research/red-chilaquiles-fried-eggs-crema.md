# Research: Red Chilaquiles with Fried Eggs, Crema and Lime Onions
Dish: Chilaquiles / flavour: Classic. Private file, not published.

## Sources actually opened
- [Shortcut Chilaquiles (NYT Cooking)](https://cooking.nytimes.com/recipes/1019044-shortcut-chilaquiles) [Tier 2 (locked list): NYT Cooking]: Half the onion quick-pickled in lime; onion and garlic browned in oil, tomato wedges cooked until burst and simmered with water to a thick sauce; chips tossed in; fried eggs, crema, coriander and pickled onion on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tortilla Chip Chilaquiles (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/tortilla-chip-chilaquiles-3676476) [Tier 2 (locked list): Food Network Kitchen]: Ancho and unpeeled garlic toasted in a dry cast-iron pan, blended with tomato and cumin, simmered until thickened; chips stirred into the sauce in two batches; topped with fried eggs, red onion and coriander. _(WebFetch 200; byline Food Network Kitchen; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Fresh-tomato sauce, lime onions and crema (NYT)
- Toasted ancho and garlic, blended sauce (FNK)
- Water rather than broth; cheese omitted; yolks cooked firm to 71 °C

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/red-chilaquiles-fried-eggs-crema-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
