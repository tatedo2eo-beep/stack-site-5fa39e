# Research: Breaded Veal Schnitzel with Warm Potato Salad
Dish: Wiener schnitzel / flavour: Classic. Private file, not published.

## Sources actually opened
- [Wiener Schnitzel (NYT Cooking)](https://cooking.nytimes.com/recipes/6055-wiener-schnitzel) [Tier 2 (locked list): NYT Cooking]: Veal top round pounded thin and seasoned with salt and white pepper; flour, egg-and-cream, then breadcrumbs, shaken off; shallow-fried about 1 min a side in hot oil with butter, swirling the pan so the coating puffs; kept warm in a low oven; lemon wedges and salad. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Schnitzel (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12371-chicken-schnitzel) [Tier 1 (locked list): America's Test Kitchen]: Cutlets pounded to about 6 mm; flour, thin egg coat and breadcrumbs; frying oil at about 175 °C; shaking the pot continuously so the coating wrinkles and puffs, 1-1.5 min a side; drained and kept warm in a low oven. (Method only; this site recipe uses veal.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Veal pounded thin, salt and white pepper, flour-egg-crumb coating left loose, shallow-fried with butter while swirling the pan, kept warm in a low oven, lemon (NYT 6055); oil temperature and continuous shaking for a puffed coating (ATK 12371); warm potato salad with cider vinegar and lingonberry sauce are my sides to match the photo; cooked to at least 63 °C with a 3 min rest.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/breaded-veal-schnitzel-potato-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
