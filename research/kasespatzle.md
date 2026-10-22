# Research: Käsespätzle (Cheese Spätzle with Crispy Onions)
Dish: Käsespätzle / flavour: Classic. Private file, not published.

## Sources actually opened
- [Spätzle with Cheese (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5564-spatzle-with-cheese) [Tier 1 (locked list): America's Test Kitchen]: Onions cooked covered then uncovered until dry and golden; spätzle layered in a buttered dish with onions and Gruyère; baked at 190 °C until melted and golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Käsespätzle (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/kasespatzle-16999143) [Tier 2 (locked list): Food Network Kitchen]: Onions cooked slowly in butter until golden; spätzle batter of flour, nutmeg, milk and 3 eggs, pushed through a spätzle maker and cooked until they float; layered with Emmentaler and chives; baked at 190 °C about 15 min. (Its balsamic vinegar is not used.) _(WebFetch (curl returned 403); full recipe read)_
- [Buttered Spaetzle (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12312-buttered-spaetzle) [Tier 1 (locked list): America's Test Kitchen]: Flour with nutmeg; milk and eggs whisked in until smooth; rested 15-30 min; pressed through holes into boiling salted water; done when they float, about 1 min; tossed with butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Same spätzle batter and cooking as the buttered spätzle.
- Onions cooked slowly 25-30 min; hot spätzle layered with Emmental and Gruyère; 200 °C (180 °C fan) bake 8-10 min.
- Balsamic in one source not used.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 50 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/kasespatzle-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for spätzle batter; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
