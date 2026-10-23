# Research: Moroccan Chicken Pastilla
Dish: Pastilla / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken B'stilla (ATK)](https://www.americastestkitchen.com/recipes/13757-chicken-b-stilla) [Tier 1 (locked list): America's Test Kitchen]: Chicken thighs simmered with onion, ginger, turmeric and paprika; the reduced liquid scrambled with eggs and coriander; layered in a pinwheel of oiled phyllo with a cinnamon-sugar almond layer, closed, baked golden and dusted with cinnamon sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Pastilla (NYT Cooking)](https://cooking.nytimes.com/recipes/1025905-chicken-pastilla) [Tier 2 (locked list): NYT Cooking]: Onions softened with coriander, garlic, turmeric, ginger and saffron; chicken simmered in them, shredded; onions cooked down with honey and cinnamon; layered with set scrambled eggs and sweet cinnamon almonds in buttered phyllo, folded over, egg-glazed, baked and dusted with cinnamon sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Chicken thighs simmered in softened spiced onions, then shredded (at least 74 °C).
- Onions reduced with honey until jammy; eggs scrambled until fully set.
- Buttered filo pinwheel, closed and baked at 180 °C; icing sugar with a cinnamon lattice.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 5 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 150 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/moroccan-chicken-pastilla-almonds-cinnamon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- runny honey: 1 tbsp → 21 g (CHECKLIST 1, weights in grams)
- caster sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- icing sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
