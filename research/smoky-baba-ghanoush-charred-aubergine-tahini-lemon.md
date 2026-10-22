# Research: Smoky Baba Ghanoush with Charred Aubergine, Tahini and Lemon
Dish: Baba ghanoush / flavour: Classic. Private file, not published.

## Sources actually opened
- [Baba Ghanouj (NYT Cooking)](https://cooking.nytimes.com/recipes/1014030-baba-ghanouj) [Tier 2 (locked list): NYT Cooking]: Aubergines charred over a flame or grill until collapsed, drained in a colander, puréed with lemon, tahini, a little yoghurt and garlic, finished with olive oil and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Baba Ghanoush (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/14009-baba-ghanoush) [Tier 1 (locked list): America's Test Kitchen]: Pricked aubergines broiled or grilled 30 min until charred, flesh chopped by hand into a lemon-garlic-salt mixture, then whisked with tahini and olive oil and rested 20 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Hand-chopped rather than puréed for texture (ATK)
- A spoon of yoghurt for roundness (NYT)
- Garlic mellowed in lemon juice first

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/smoky-baba-ghanoush-charred-aubergine-tahini-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
