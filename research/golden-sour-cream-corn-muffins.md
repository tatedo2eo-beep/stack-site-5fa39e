# Research: Golden Sour Cream Corn Muffins
Dish: Corn muffin / flavour: Classic. Private file, not published.

## Sources actually opened
- [Corn Muffins (ATK)](https://www.americastestkitchen.com/recipes/387-corn-muffins) [Tier 1 (locked list): America's Test Kitchen]: About 2:1 flour to fine cornmeal, eggs whisked with sugar, melted butter, sour cream and milk folded in, 12 muffins baked until golden and a toothpick comes out clean. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cornbread (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/cornbread-recipe) [Tier 1 (locked list): King Arthur Baking]: Flour and yellow cornmeal with baking powder and a little soda, milk, melted butter, oil and an egg stirred in just until combined, baked until golden and a toothpick comes out clean. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- About 2:1 flour to cornmeal, sweetened with sugar only.
- Soured cream and milk for a tender crumb.
- Baked at 200 °C to deep golden domes.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/golden-sour-cream-corn-muffins-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C4 (crisp skin); 02-C5 (wings); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
