# Research: Egusi Soup with Beef and Greens
Dish: Egusi soup / flavour: Classic. Private file, not published.

## Sources actually opened
- [Nigerian Egusi Soup (Serious Eats)](https://www.seriouseats.com/nigerian-egusi-soup-5271598) [Tier 1 (locked list): Serious Eats]: Beef simmered with onion to make the stock; ground egusi mixed with blended onion and chilli and fried in palm oil in clumps, then simmered in the stock into curds; beef returned; greens added at the end. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Egusi Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1024288-egusi-soup) [Tier 2 (locked list): NYT Cooking]: Egusi paste cooked in palm oil with a pepper base and stock; Scotch bonnet; spinach stirred in at the end. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Beef stock, palm-oil-fried egusi curds and beef (SE)
- Scotch bonnet heat and spinach finish (NYT)
- Crayfish and iru left out (shellfish-free); kale and spinach as the greens

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 110 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/egusi-soup-beef-spinach-palm-oil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C7 (cutlets).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
