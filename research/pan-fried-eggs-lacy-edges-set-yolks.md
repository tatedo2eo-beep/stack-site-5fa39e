# Research: Pan-Fried Eggs with Lacy Edges and Set Yolks
Dish: Fried / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Fried Eggs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7554-perfect-fried-eggs) [Tier 1 (locked list): America's Test Kitchen]: Oil preheated in a non-stick skillet on low 5 min; eggs cracked into small bowls and seasoned; heat raised until oil shimmers, chilled butter swirled in, eggs added at once, covered and cooked, then left covered off the heat (yolks cooked fully set here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crispy Fried Eggs (Serious Eats)](https://www.seriouseats.com/crispy-fried-eggs-recipe) [Tier 1 (locked list): Serious Eats]: Oil heated until shimmering in a skillet; eggs broken in from just above the surface and seasoned; pan tilted and hot oil spooned over the whites until puffed, crisp and lacy at the edges (yolks cooked fully set here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs cracked into small bowls and seasoned, then added to the pan together (ATK, SE)
- Fried in shimmering fat until the edges are crisp and lacy (SE, ATK butter-oil)
- Covered to finish cooking the tops (ATK) - here until the yolks are fully set

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 2 min + cook 6 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/pan-fried-eggs-lacy-edges-set-yolks-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
