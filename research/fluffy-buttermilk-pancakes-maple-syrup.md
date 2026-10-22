# Research: Fluffy Buttermilk Pancakes with Butter and Maple Syrup
Dish: Pancakes (American) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Buttermilk Pancakes (NYT Cooking)](https://cooking.nytimes.com/recipes/1018180-perfect-buttermilk-pancakes) [Tier 2 (locked list): NYT Cooking]: Flour, sugar, baking powder, bicarbonate and salt; buttermilk, eggs and melted butter mixed in a well until just combined, lumps left; cooked on a lightly oiled pan until bubbles rise, flipped, kept warm in a low oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Best Buttermilk Pancakes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4815-best-buttermilk-pancakes) [Tier 1 (locked list): America's Test Kitchen]: Buttermilk with soured cream, eggs and melted butter folded into the dry mix until lumpy; batter rested 10 min; oil wiped to a film; cooked until edges set and bubbles break, flipped; kept on a rack in a warm oven. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Well-mixing and warm-oven holding (NYT)
- Soured cream, 10 min rest and wiped-oil pan (ATK)
- Metric quantities; 16 pancakes of 10 cm

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/fluffy-buttermilk-pancakes-maple-syrup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C10 (buttermilk marinade); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
