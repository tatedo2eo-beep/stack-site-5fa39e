# Research: Sweet Noodle Kugel with Raisins and Cinnamon
Dish: Kugel / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Noodle Kugel (NYT Cooking)](https://cooking.nytimes.com/recipes/1023732-classic-noodle-kugel) [Tier 2 (locked list): NYT Cooking]: 340 g wide egg noodles cooked until just tender and drained over the raisins to plump them; eggs, cottage cheese, sour cream, sugar, milk and cinnamon blended; butter in and on top; baked at 175 °C on a hot tray. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sweet Noodle Kugel (Serious Eats)](https://www.seriouseats.com/sweet-noodle-kugel-recipe-8760419) [Tier 1 (locked list): Serious Eats]: 340 g egg noodles, 5 eggs, sour cream or cottage cheese, milk, cinnamon, raisins; baked until set and golden; cooled before cutting. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sweet Noodle Kugel (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5225-sweet-noodle-kugel-with-golden-raisins-and-walnuts) [Tier 1 (locked list): America's Test Kitchen]: Sour cream and cottage cheese custard with eggs, sugar and lemon zest; golden raisins; 175 °C bake until set; rested before serving. (Its vanilla extract is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- 340 g noodles, 5 eggs, cottage cheese and sour cream custard; raisins plumped under the drained noodles (NYT).
- No vanilla extract; baked until set to 71 °C (FSIS egg dishes).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 60 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/noodle-kugel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for baked noodle custard; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
