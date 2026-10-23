# Research: Chocolate Hazelnut Gelato (Gianduja)
Dish: Gelato / flavour: Chocolate & hazelnut. Private file, not published.

## Sources actually opened
- [Chocolate Hazelnut (Better than Nutella) Gelato (Serious Eats)](https://www.seriouseats.com/chocolate-hazelnut-nutella-gelato-recipe) [Tier 1 (locked list): Serious Eats]: Roasted hazelnuts ground to a paste with a little oil, Dutch cocoa, sugar and salt blended in, then half-and-half; strained, chilled and churned without cooking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; checked against our gelato base (about 750 ml dairy, 150 g sugar per 8 servings, yolk custards to 77-80 °C) or sorbet base (about 25% sugar by weight of fruit, some corn syrup).

## Own cooking judgment
- 200 g hazelnuts instead of about 450 g; whole milk and cream simmered with cornflour and cocoa, then blended hot with the paste.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 10 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/chocolate-hazelnut-gelato-gianduja-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
