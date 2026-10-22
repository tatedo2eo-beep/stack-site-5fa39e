# Research: Silky Hummus with Tahini, Lemon and Cumin
Dish: Hummus / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ultracreamy Hummus (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12228-ultracreamy-hummus) [Tier 1 (locked list): America's Test Kitchen]: Canned chickpeas simmered with baking soda until skins float, skins swished off, then blended with strained garlic-lemon liquid, cumin, tahini and oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Hummus (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6873-classic-hummus) [Tier 1 (locked list): America's Test Kitchen]: Chickpeas processed with garlic, salt and cumin, then a lemon-water mix and a tahini-oil mix streamed in for a creamy texture. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hummus (NYT Cooking)](https://cooking.nytimes.com/recipes/12703-hummus) [Tier 2 (locked list): NYT Cooking]: Chickpeas, tahini, olive oil, garlic, lemon and cumin processed smooth, loosened with cooking liquid and finished with oil, cumin and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Bicarbonate simmer and skin removal for silkiness
- Strained garlic-lemon infusion for gentle garlic
- Served with warm pita as in the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 25 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/silky-hummus-tahini-lemon-cumin-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
