# Research: Pineapple Sorbet with Vanilla
Dish: Sorbet / flavour: Pineapple. Private file, not published.

## Sources actually opened
- [Pineapple Sorbet (NYT Cooking)](https://cooking.nytimes.com/recipes/9526-pineapple-sorbet) [Tier 2 (locked list): NYT Cooking]: Sugar syrup steeped with a vanilla bean, blended with fresh pineapple pulp and lemon juice; served in frozen pineapple shells. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; checked against our gelato base (about 750 ml dairy, 150 g sugar per 8 servings, yolk custards to 77-80 °C) or sorbet base (about 25% sugar by weight of fruit, some corn syrup).

## Own cooking judgment
- Lime instead of lemon, corn syrup added, fibres sieved out; served in scoops rather than shells.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 5 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/vanilla-pineapple-sorbet-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
- No changes needed.
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
