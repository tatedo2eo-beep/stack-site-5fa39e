# Research: Golden Braised Endive with Lemon and Thyme
Dish: Braised endive / flavour: Classic. Private file, not published.

## Sources actually opened
- [Braised Endive (ATK)](https://www.americastestkitchen.com/recipes/5697-braised-endive) [Tier 1 (locked list): America's Test Kitchen]: Halved endive browned cut side down in butter with sugar and salt, braised covered with liquid and thyme until tender, liquid reduced and finished with butter, lemon and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Braised Belgian Endive (ATK)](https://www.americastestkitchen.com/recipes/139-braised-belgian-endive) [Tier 1 (locked list): America's Test Kitchen]: Endive halves browned in butter, then braised covered in a little liquid until the core is tender. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Braised Belgian Endive (NYT Cooking)](https://cooking.nytimes.com/recipes/7060-braised-belgian-endive) [Tier 2 (locked list): NYT Cooking]: Endive braised slowly with shallots in a little liquid until the liquid reduces to a syrupy glaze. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Water and lemon as the braising liquid.
- Browned on both sides before braising.
- Juices boiled to a glaze and mounted with butter.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/golden-braised-endive-lemon-thyme-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- sugar: 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
