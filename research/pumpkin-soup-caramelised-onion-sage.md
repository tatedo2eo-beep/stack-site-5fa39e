# Research: Pumpkin Soup with Caramelised Onion and Crisp Sage
Dish: Pumpkin soup / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pumpkin Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1021618-pumpkin-soup) [Tier 2 (locked list): NYT Cooking]: Onions and rosemary caramelised slowly in butter, garlic added, deglazed with cider or apple juice; broth, tinned pumpkin purée, warm spices, salt and pepper simmered 10 minutes, puréed, finished with cream and fried sage leaves. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Roasted Pumpkin Soup With Brown Butter and Thyme (Serious Eats)](https://www.seriouseats.com/roasted-pumpkin-soup-brown-butter-thyme-recipe) [Tier 1 (locked list): Serious Eats]: Roasted pumpkin flesh simmered with sweated leeks, onion and stock, blended very smooth and finished at the table with nutty browned butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Slow-caramelised onion base deglazed with apple juice and a short simmer with tinned purée (NYT)
- Browned-butter finish (SE), here poured from the pan used to crisp the sage
- No sweetener and no curry powder, keeping the Classic distinct from the Curried flavour
- Half broth, half water to keep salt within 2.5 g per serving

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/pumpkin-soup-caramelised-onion-sage-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
