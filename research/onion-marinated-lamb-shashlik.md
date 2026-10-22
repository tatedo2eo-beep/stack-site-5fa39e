# Research: Onion-Marinated Lamb Shashlik
Dish: Shashlik / flavour: Classic. Private file, not published.

## Sources actually opened
- [Shashlik (Grilled Lamb) (NYT Cooking)](https://cooking.nytimes.com/recipes/4665-shashlik-grilled-lamb) [Tier 2 (locked list): NYT Cooking]: Lamb marinated at least 3 h with lemon, oil and bay; threaded and grilled about 10 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Shashlik-Style Beef Kebabs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11860-shashlik-style-beef-kebabs) [Tier 1 (locked list): America's Test Kitchen]: Blended onion marinade with cumin, coriander, cinnamon and bay, 1-2 h; turned every 2-3 min on the grill; onion served alongside. (Its wine vinegar and soy are not used; cider vinegar instead.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Long onion-and-acid marinade with bay, cumin and coriander (ATK, NYT); onion between the meat and turning every 2-3 min (ATK); iced-water onion rings and dill are my serving choice to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/onion-marinated-lamb-shashlik-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
