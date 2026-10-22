# Research: Adana-Style Spiced Lamb Kebabs with Sumac Onions
Dish: Adana kebabı / flavour: Classic. Private file, not published.

## Sources actually opened
- [Adana Kebab (Serious Eats)](https://www.seriouseats.com/adana-kebab-turkish-ground-lamb-kebab-recipe) [Tier 1 (locked list): Serious Eats]: Lamb kneaded with salt and spices (cumin, sumac, Urfa pepper) until tacky; ice water worked in; chilled; shaped with wet hands flat around wide skewers; grilled over a very hot fire. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Grilled Adana-Style Kebabs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15644-grilled-adana-style-kebabs) [Tier 1 (locked list): America's Test Kitchen]: Pepper paste, paprika, cumin, sumac and cayenne; mixture kneaded 1 min; shaped on wide skewers; grilled 3-4 min a side; served in lavash with a sumac onion salad. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Adana Kebabs (NYT Cooking)](https://cooking.nytimes.com/recipes/5735-adana-kebabs) [Tier 2 (locked list): NYT Cooking]: Lamb with onion, garlic, chilli flakes and parsley pressed onto flat skewers; served with sumac onions, grilled peppers and tomatoes and flatbread. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Knead until tacky, ice water, chill, wet hands, wide flat skewers (SE, ATK); sumac onion, grilled peppers and tomatoes, flatbread (NYT, ATK); cooked to 71 °C as minced meat.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/adana-style-lamb-kebabs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
