# Research: Golden Crab Cakes with Paprika-Lemon Mayonnaise
Dish: Crab cakes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crab Cakes (NYT Cooking)](https://cooking.nytimes.com/recipes/1024493-crab-cakes) [Tier 2 (locked list): NYT Cooking]: Mayonnaise, egg and seasonings whisked smooth; crab, panko and parsley folded in; chilled at least 30 min; 8 patties about 2 cm thick; fried in oil over medium heat 2-3 min a side. (Its Worcestershire and mustard are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Maryland-Style Crab Cakes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16179-maryland-style-crab-cakes) [Tier 1 (locked list): America's Test Kitchen]: Mayonnaise, egg, parsley, seasoning and cayenne whisked, panko stirred in, crab folded in gently; chilled at least 1 h; cooked under the grill; served with a ketchup-based sauce. (Its hot sauce and Worcestershire are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crab Cakes Baltimore-Style (NYT Cooking)](https://cooking.nytimes.com/recipes/3227-crab-cakes-baltimore-style) [Tier 2 (locked list): NYT Cooking]: Eggs, celery, saltines, mayonnaise and seasoning blended, crab folded in lightly; shaped into patties, dredged in crumbs; sautéed in a nonstick pan over medium heat 2-3 min each side. (Its Worcestershire is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Best Crab Cakes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6946-best-crab-cakes) [Tier 1 (locked list): America's Test Kitchen]: Lump crab soaked in milk; panko crushed and toasted; celery, onion and garlic cooked dry; a light binder; cakes coated in toasted crumbs and pan-fried. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Mayonnaise and egg binder whisked with seasonings, then crab folded in gently to keep lumps whole (NYT 1024493; ATK 16179; NYT 3227); panko in the mix (NYT 1024493; ATK 16179); chilled at least 30 min to firm (NYT 1024493; ATK 16179 1 h); 8 cakes about 2 cm thick (NYT 1024493); crumb coating (NYT 3227; ATK 6946); fried over medium heat 2-3 min a side (NYT 1024493; NYT 3227); a ketchup-based sauce (ATK 16179). My own: mustard powder, paprika and cayenne in place of a seasoning blend and bottled sauces; a short oven finish so the egg-bound centre reaches 71 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/golden-crab-cakes-paprika-lemon-mayonnaise-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
