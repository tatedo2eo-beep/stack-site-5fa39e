# Research: Provençal Vegetable Tian with Thyme and Garlic
Dish: Tian / flavour: Classic. Private file, not published.

## Sources actually opened
- [Squash, Eggplant and Tomato Tian (NYT Cooking)](https://cooking.nytimes.com/recipes/1017841-squash-eggplant-and-tomato-tian) [Tier 2 (locked list): NYT Cooking]: Baking dish rubbed with garlic and oiled; onion on the base; rounds of squash, aubergine and tomato stood on edge in rings, seasoned with salt, pepper, chilli flakes and thyme; baked about 200 °C 25 min, basted, then 25 min more. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Zucchini and Tomato Tian with Caramelized Onions (ATK)](https://www.americastestkitchen.com/recipes/4060-zucchini-and-tomato-tian-with-caramelized-onions-tian-de-courgettes-aux-tomates) [Tier 1 (locked list): America's Test Kitchen]: Onions cooked down as a base; overlapping rounds of courgette and tomato shingled on top, oiled, seasoned with garlic and thyme and baked until tender and browned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No cheese topping.
- Green and yellow courgette with aubergine and tomato.
- Basted halfway for even browning.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 50 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/provencal-vegetable-tian-thyme-garlic-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
