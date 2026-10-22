# Research: Chicago-Style Deep-Dish Cheese Pizza with Buttery Crust and Chunky Tomato
Dish: Chicago deep-dish / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicago-Style Deep-Dish Pizza (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/5033-chicago-style-deep-dish-pizza) [Tier 1 (locked list): America's Test Kitchen]: Flour and cornmeal dough with melted butter; rolled, spread with soft butter, rolled up, halved and folded into balls, then chilled 40-50 min for flaky layers; two oiled 23 cm cake pans; sauce of grated onion and oregano cooked in butter, garlic and crushed tomatoes reduced 25-30 min with basil; mozzarella under the sauce, Parmesan on top; baked at 220 °C on the lower rack 20-30 min; rested 10 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicago Deep-Dish Pizza (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15637-chicago-deep-dish-pizza) [Tier 1 (locked list): America's Test Kitchen]: Dough pressed into dark 23 cm cake pans and 2.5 cm up the sides; sliced mozzarella pressed into the base; well-drained chunky tomatoes; oregano and Parmesan; baked on the lowest rack about 35 min; rested 5 min and cut in the pan. (Its sausage layer is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Deep Dish Pizza (NYT Cooking)](https://cooking.nytimes.com/recipes/1025385-deep-dish-pizza) [Tier 2 (locked list): NYT Cooking]: Enriched dough risen twice in oiled 20-23 cm metal cake pans; pressed to the edges and about 2.5 cm up the sides; sliced mozzarella on the base, then crushed tomatoes and grated hard cheese on top; baked at 230 °C on the bottom rack 25-30 min. (Its sausage layer is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the pizza chapter. Quantities are my own (dough salt lowered to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. All meat-free; cured pork toppings, anchovies and red wine vinegar in the sources are not used.

## Own cooking judgment
- Flour-cornmeal dough with melted butter, laminated with soft butter (roll up, halve, fold in three) and chilled 40 min (ATK 5033); two oiled 23 cm metal cake tins with the dough pressed up the sides (all three); grated onion and oregano in butter, garlic, tomatoes reduced 25-30 min with basil (ATK 5033); drained chunky tomatoes (ATK 15637); mozzarella under the sauce and Parmesan on top (all three); lowest shelf at 220 °C 25-30 min (ATK 5033; NYT) and rested before slicing (ATK both).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 60 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/chicago-style-deep-dish-pizza-buttery-crust-chunky-tomato-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- caster sugar: 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
