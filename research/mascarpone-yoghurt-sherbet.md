# Research: Mascarpone and Yoghurt Sherbet
Dish: Sherbet / flavour: Mascarpone. Private file, not published.

## Sources actually opened
- [Mascarpone Sherbet (NYT Cooking)](https://cooking.nytimes.com/recipes/2184-mascarpone-sherbet) [Tier 2 (locked list): NYT Cooking]: A sugar syrup boiled 10 min and chilled, beaten into yoghurt, mascarpone and lemon juice, churned and served with sweetened berries. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities, step structure and wording are my own and differ from the source; checked against our sorbet base (mango-lime-sorbet) or sherbet base (fresh-orange-sherbet-creamy: about 500 ml juice, 150-200 ml cream, no eggs).

## Own cooking judgment
- Syrup simmered 5 min; 350 g yoghurt, 225 g mascarpone; berries served plain.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 10 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/mascarpone-yoghurt-sherbet-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
- No changes needed.
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
