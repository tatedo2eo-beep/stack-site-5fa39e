# Research: Buttered Spätzle with Parsley
Dish: Spätzle / flavour: Classic. Private file, not published.

## Sources actually opened
- [Buttered Spaetzle (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12312-buttered-spaetzle) [Tier 1 (locked list): America's Test Kitchen]: Flour with nutmeg; milk and eggs whisked in until smooth; rested 15-30 min; pressed through holes into boiling salted water; done when they float, about 1 min; tossed with butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spätzle (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5093-spatzle) [Tier 1 (locked list): America's Test Kitchen]: 283 g flour, 2 eggs, 240 ml milk, nutmeg; rest no longer than 30 min; batches through a spätzle maker; cooked until they float. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Herb Spätzle (Serious Eats)](https://www.seriouseats.com/herb-spatzle-with-speck-and-peas-recipe) [Tier 1 (locked list): Serious Eats]: Thick batter rested 15 min; cut from a board into boiling water; cooked 1-2 min after floating; finished in butter in a hot pan. (Its speck is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- 300 g flour, 3 eggs, 150 ml milk: a thick batter beaten 2-3 min and rested 20 min.
- Cooked until they float plus 30 s; tossed in foaming butter.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/buttered-spaetzle-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for spätzle batter; the method rests on the locked-list sources above.
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
