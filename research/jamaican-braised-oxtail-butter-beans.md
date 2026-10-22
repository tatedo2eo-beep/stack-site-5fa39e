# Research: Jamaican Braised Oxtail with Butter Beans
Dish: Oxtail stew / flavour: Classic. Private file, not published.

## Sources actually opened
- [Jamaican Oxtail Stew (NYT Cooking)](https://cooking.nytimes.com/recipes/1013460-jamaican-oxtail-stew) [Tier 2 (locked list): NYT Cooking]: Brown sugar burnt in the pot for colour; oxtail browned; onion, garlic, ginger, Scotch bonnet, thyme, allspice and spring onion; water; about 2 h; butter beans. (Its Worcestershire and ketchup are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Jamaican Oxtail (Serious Eats)](https://www.seriouseats.com/jamaican-oxtail-recipe-7505218) [Tier 1 (locked list): Serious Eats]: Blended aromatic marinade up to 24 h with soy, salt and thyme; browned; long simmer; butter beans; served with rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Braised Oxtails (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12639-braised-oxtails) [Tier 1 (locked list): America's Test Kitchen]: Oxtails browned then braised low and slow about 3 h; fat removed from the liquid before serving. (Its wine is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Blended marinade with soy and thyme (SE); burnt brown sugar for colour, Scotch bonnet, allspice, butter beans (NYT); long gentle braise and removing the fat (ATK); carrots to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 225 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/jamaican-braised-oxtail-butter-beans-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- dark brown sugar: 2 tbsp → 24 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
