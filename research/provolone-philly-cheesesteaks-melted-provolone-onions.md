# Research: Provolone Philly Cheesesteaks with Golden Onions
Dish: Philly cheesesteak / flavour: Provolone. Private file, not published.

## Sources actually opened
- [Philly Cheesesteak (Serious Eats)](https://www.seriouseats.com/philly-cheesesteak-recipe-7546830) [Tier 1 (locked list): Serious Eats]: Rib eye frozen until firm and shaved thin; seared hard in a preheated cast-iron pan with onions; torn provolone stirred through the meat, whole slices laid on top and covered to melt, then the open roll flipped over the pile. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Quick Cheesesteak Subs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5926-quick-cheesesteak-subs) [Tier 1 (locked list): America's Test Kitchen]: Thin-sliced beef and onions cooked quickly, piled into sub rolls and topped with provolone melted under the grill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Onions cooked separately to golden to match the photo
- Beef cooked through to 63 °C or more
- No added salt; the provolone seasons it

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/provolone-philly-cheesesteaks-melted-provolone-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
