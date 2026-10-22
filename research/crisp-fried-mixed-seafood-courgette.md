# Research: Crisp Fried Mixed Seafood and Courgette with Lemon
Dish: Fritto misto / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fritto Misto (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16580-fritto-misto) [Tier 1 (locked list): America's Test Kitchen]: Thin flour, cornstarch and baking powder batter with water and oil; seafood patted dry, salted and floured; batter chilled 45 min; vegetables, then shrimp, cod and calamari fried at 175 °C for 2-3 min; kept warm on racks in a low oven. (Its aioli is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fritto Misto di Mare (NYT Cooking)](https://cooking.nytimes.com/recipes/1017127-fritto-misto-di-mare) [Tier 2 (locked list): NYT Cooking]: Seafood (shrimp, squid, scallops, whitebait) and lemon slices floured, then dipped in a rested batter with soda added just before frying; fried at about 190 °C for 3-4 min in small batches; sea salt, parsley and lemon. (Its wine batter is not used; sparkling water instead.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Seafood patted dry and dusted in flour, then dipped in a thin flour, cornflour and baking-powder batter (ATK) made with fizzy water (NYT 1017127, which uses soda alongside wine); vegetables fried first, then prawns, fish and squid in small batches at 180 °C for 2-3 min (both); kept warm in a low oven (ATK); flaky salt, parsley and lemon (NYT 1017127). Courgette matches the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-fried-mixed-seafood-courgette-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C4 (crisp skin); 02-C5 (wings); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
