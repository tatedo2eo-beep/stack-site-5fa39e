# Research: Swedish-Style Meatballs with Cream Gravy and Lingonberries
Dish: Meatballs / flavour: Swedish (allspice-nutmeg). Private file, not published.

## Sources actually opened
- [The Best Swedish Meatballs (Serious Eats)](https://www.seriouseats.com/the-best-swedish-meatballs-recipe) [Tier 1 (locked list): Serious Eats]: Bread-milk panade; onion partly cooked, partly grated; allspice, nutmeg and white pepper; mixture beaten until sticky; small balls fried in butter; butter-flour gravy with stock and cream; lingonberry jam. (Its pork is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Swedish Meatballs (NYT Cooking)](https://cooking.nytimes.com/recipes/1018534-swedish-meatballs) [Tier 2 (locked list): NYT Cooking]: Allspice and nutmeg in the mixture; balls browned, then a cream gravy made in the same pan. (Its brandy and pork are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Swedish Meatballs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4595-swedish-meatballs) [Tier 1 (locked list): America's Test Kitchen]: Nutmeg and allspice; meatballs fried at about 175 °C; gravy of stock and cream finished with lemon; served with lingonberry preserves. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Allspice, nutmeg and white pepper, beaten panade mixture, pan gravy with cream, lingonberries (SE, ATK); all beef; no brandy or soy.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/swedish-meatballs-cream-gravy-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
