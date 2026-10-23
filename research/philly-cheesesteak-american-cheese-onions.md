# Research: Philly Cheesesteak with American Cheese
Dish: Philly cheesesteak / flavour: American. Private file, not published.

## Sources actually opened
- [Philly Cheesesteaks (Serious Eats)](https://www.seriouseats.com/philly-cheesesteak-recipe-7546830) [Tier 1 (locked list): Serious Eats]: Part-frozen rib-eye shaved thin, browned with diced onion in a very hot pan, cheese melted over and the roll flipped onto the meat; American cheese named as an option. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list source(s) listed above; nothing copied.

## Own cooking judgment
- American cheese only.
- Smaller rolls and no added salt.
- Two portions.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 10 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/philly-cheesesteak-american-cheese-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
