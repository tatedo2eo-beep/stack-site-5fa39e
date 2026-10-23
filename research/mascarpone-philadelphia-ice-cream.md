# Research: Mascarpone Ice Cream (No Egg)
Dish: Philadelphia (no egg) / flavour: Mascarpone. Private file, not published.

## Sources actually opened
- [Mascarpone No-Churn Ice Cream (Serious Eats)](https://www.seriouseats.com/mascarpone-no-churn-ice-cream-recipe) [Tier 1 (locked list): Serious Eats]: Mascarpone whipped with cream and vanilla; eggs, white and brown sugar whisked over steam into a foam; the two folded together and frozen without churning. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; quantities sanity-checked against our churned Philadelphia base (about 600 ml dairy, 100-150 g sugar, 60-80 g glucose syrup per 8 servings, no eggs).

## Own cooking judgment
- Egg-free and churned: mascarpone whisked into cream and a warmed sweet-milk base; brown sugar kept.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 10 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/mascarpone-philadelphia-ice-cream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
