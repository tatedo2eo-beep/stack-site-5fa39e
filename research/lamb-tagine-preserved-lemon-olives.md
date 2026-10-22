# Research: Lamb Tagine with Preserved Lemon and Green Olives
Dish: Tagine / flavour: Preserved lemon and olive. Private file, not published.

## Sources actually opened
- [Chicken Tagine With Olives and Preserved Lemons (NYT Cooking)](https://cooking.nytimes.com/recipes/6555-chicken-tagine-with-olives-and-preserved-lemons) [Tier 2 (locked list): NYT Cooking]: Ginger, saffron, turmeric and cumin spice rub; slowly browned onions; preserved lemon pulp removed and the rind cut into strips; green olives; braised covered; parsley. (Method for the lemon and olives only; this site recipe uses lamb.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lamb Tagine With Green Olives (NYT Cooking)](https://cooking.nytimes.com/recipes/1014073-lamb-tagine-with-green-olives) [Tier 2 (locked list): NYT Cooking]: Lamb browned; onion, garlic and ginger; warm spices and saffron; covered oven braise; green olives added at the end; toasted almonds and sesame. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lamb Tagine with Dried Apricots and Olives (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6253-lamb-tagine-with-dried-apricots-and-olives) [Tier 1 (locked list): America's Test Kitchen]: Lamb shoulder browned in 2 batches; onions with lemon zest; garlic and warm spices bloomed 30 s; covered braise in a 160 °C-range oven; honey; olives and apricots stirred in at the end; lemon juice and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lamb Tagine (NYT Cooking)](https://cooking.nytimes.com/recipes/1018513-lamb-tagine) [Tier 2 (locked list): NYT Cooking]: Lamb salted ahead and browned in batches; onions softened; ginger, cinnamon, saffron, turmeric and pepper; dried apricots; covered low oven 2.5-3 h; toasted almonds, coriander and lemon to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Preserved lemon rind strips with green olives (NYT 6555); olives added late in a lamb tagine (NYT 1014073, ATK 6253); base method as the classic tagine (NYT 1018513, ATK 6253).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 165 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/lamb-tagine-preserved-lemon-olives-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
