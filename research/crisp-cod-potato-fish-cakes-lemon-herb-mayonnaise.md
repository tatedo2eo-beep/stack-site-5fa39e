# Research: Crisp Cod and Potato Fish Cakes with Lemon-Herb Mayonnaise
Dish: Fish cakes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Nova Scotia Fish Cakes (NYT Cooking)](https://cooking.nytimes.com/recipes/12752-nova-scotia-fish-cakes) [Tier 2 (locked list): NYT Cooking]: Haddock or cod poached in milk 5-7 min until flaky; mashed potato, egg, scallions and parsley; chilled; egg-and-crumb coating; shallow-fried a few minutes a side. (Its Worcestershire is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cod and Potato Cakes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11525-cod-and-potato-cakes) [Tier 1 (locked list): America's Test Kitchen]: Cod cooked in butter until it just flakes, folded into firmly packed riced potato with egg; mounds frozen 15 min or chilled to firm; crushed panko coating; pan-fried. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fish Cakes With Herbs and Chiles (NYT Cooking)](https://cooking.nytimes.com/recipes/1017091-fish-cakes-with-herbs-and-chiles) [Tier 2 (locked list): NYT Cooking]: White fish gently cooked and flaked; potatoes cooked and roughly mashed; bound with egg, herbs, lime zest and panko; chilled 3 h; floured and shallow-fried until golden; served with mayonnaise and lime. (Its vermouth is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- White fish poached in milk until it flakes (NYT 12752) and folded into dry mashed potato with egg so flakes stay whole (ATK, NYT 12752); shaped cakes chilled to firm (all three); egg-and-panko coating (NYT 12752, ATK) and shallow-fried until golden, then finished in the oven to 71 °C because of the raw-egg binder (site rule); lemon-herb mayonnaise (NYT 1017091) and salad to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 50 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-cod-potato-fish-cakes-lemon-herb-mayonnaise-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
