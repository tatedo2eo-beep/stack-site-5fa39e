# Research: Soft Norwegian Potato Lefse
Dish: Lefse / flavour: Classic. Private file, not published.

## Sources actually opened
- [Lefse (NYT Cooking)](https://cooking.nytimes.com/recipes/1016973-lefse) [Tier 2 (locked list): NYT Cooking]: Riced potatoes mixed with oil, evaporated milk, sugar and salt, chilled, then flour added, rolled very thin and cooked on a dry griddle. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Midwestern Lefse (Serious Eats)](https://www.seriouseats.com/midwestern-lefse-recipe-11874647) [Tier 1 (locked list): Serious Eats]: Cold riced potato dough rolled paper-thin on a floured cloth, cooked on a very hot griddle until spotted and stacked under towels. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Potato chilled overnight so the dough needs less flour.
- Served rolled with butter and sugar.
- 16 rounds; 1 tsp salt in total.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 40 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/soft-norwegian-potato-lefse-butter-sugar-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
