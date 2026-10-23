# Research: Masala Chai Custard Ice Cream
Dish: Custard-base (French) / flavour: Chai spice. Private file, not published.

## Sources actually opened
- [Chai Ice Cream (Serious Eats)](https://www.seriouseats.com/homemade-chai-tea-flavored-ice-cream-recipe) [Tier 1 (locked list): Serious Eats]: Toasted whole spices, cinnamon and ginger steeped 45 min in cream and milk, black tea steeped 15 min, six-yolk custard. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; quantities sanity-checked independently against the published classic custard base (6 yolks per 720 ml dairy, 77-80 °C).

## Own cooking judgment
- No coriander or allspice; shorter tea steep to avoid bitterness.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/masala-chai-custard-ice-cream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
