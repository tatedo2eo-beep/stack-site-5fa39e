# Research: Lamb Tagine with Prunes, Apricots and Almonds
Dish: Tagine / flavour: Classic. Private file, not published.

## Sources actually opened
- [Lamb Tagine (NYT Cooking)](https://cooking.nytimes.com/recipes/1018513-lamb-tagine) [Tier 2 (locked list): NYT Cooking]: Lamb salted ahead and browned in batches; onions softened; ginger, cinnamon, saffron, turmeric and pepper; dried apricots; covered low oven 2.5-3 h; toasted almonds, coriander and lemon to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lamb Tagine with Dried Apricots and Olives (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6253-lamb-tagine-with-dried-apricots-and-olives) [Tier 1 (locked list): America's Test Kitchen]: Lamb shoulder browned in 2 batches; onions with lemon zest; garlic and warm spices bloomed 30 s; covered braise in a 160 °C-range oven; honey; olives and apricots stirred in at the end; lemon juice and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lamb and Prune Tagine (Serious Eats)](https://www.seriouseats.com/lamb-tagine-recipe-11933168) [Tier 1 (locked list): Serious Eats]: Onions sweated; garlic, turmeric, ginger and coriander; lamb with a tied coriander bunch braised gently 2-2.5 h; prunes simmered separately with honey and cinnamon into a dark syrup and spooned over; sesame seeds and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Lamb browned in batches, softened onions, ginger, cinnamon, saffron and turmeric, covered low-oven braise (NYT 1018513, ATK 6253); prunes simmered separately into a honey-cinnamon syrup (SE); apricots and toasted almonds (NYT); sesame and coriander (SE).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 165 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/lamb-tagine-prunes-apricots-almonds-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- honey: 2 tbsp → 42 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
