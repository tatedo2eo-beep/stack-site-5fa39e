# Research: Neapolitan-Style Margherita Pizza with Tomato, Mozzarella and Basil
Dish: Neapolitan / flavour: Classic. Private file, not published.

## Sources actually opened
- [Neapolitan-Style Pizza (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16948-neapolitan-style-pizza) [Tier 1 (locked list): America's Test Kitchen]: 00 flour dough folded 8 times then cold-fermented 18-36 h as 4 balls; out 1 h before baking; uncooked blended tomato sauce; stretched by hand to 28 cm keeping a rim; steel 23 cm below the grill, oven at maximum, then baked under the grill 4-5 min until the rim is charred in spots; basil after baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Basic Neapolitan Pizza Dough (Serious Eats)](https://www.seriouseats.com/basic-neapolitan-pizza-dough-recipe) [Tier 1 (locked list): Serious Eats]: 00 or bread flour, salt, instant yeast and water; room-temperature rise then divided into 4 and refrigerated 2-4 days; shaped into balls and rested at room temperature at least 2 h before baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hacker-Free Neapolitan Pizza for a Home Kitchen (Serious Eats)](https://www.seriouseats.com/hacker-free-neapolitan-pizza-for-a-home-kitchen-recipe) [Tier 1 (locked list): Serious Eats]: Cold-fermented dough balls; drained, blended tomatoes with a little salt; mozzarella cut and drained between towels at least 10 min; stretched to 25 cm with a thicker rim; baked under a very hot grill 1.5-4 min with olive oil and basil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pizza Margherita (NYT Cooking)](https://cooking.nytimes.com/recipes/1016231-pizza-margherita) [Tier 2 (locked list): NYT Cooking]: Stone heated at the oven's highest setting at least 1 h; thin tomato sauce stopping short of the edge; olive oil; mozzarella in large pieces; basil; baked 4-8 min until the crust is browned and the cheese bubbling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pizza Dough (NYT Cooking)](https://cooking.nytimes.com/recipes/1016230-robertas-pizza-dough) [Tier 2 (locked list): NYT Cooking]: Mixed 00 and plain flour, salt, yeast, lukewarm water and a little oil; kneaded 3 min, rested 15, kneaded 3 more; two balls risen 3-4 h at room temperature or 8-24 h in the fridge, out 30-45 min before shaping by hand. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the pizza chapter. Quantities are my own (dough salt lowered to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. All meat-free; cured pork toppings, anchovies and red wine vinegar in the sources are not used.

## Own cooking judgment
- 00 or bread flour, water, salt and a little yeast, kneaded or folded, then balled and cold-fermented 1-3 days (ATK; SE dough; SE hacker-free; NYT dough); out about 2 h before baking (SE dough); uncooked drained, blended tomato sauce (ATK; SE hacker-free); mozzarella torn and drained (SE hacker-free); hand-stretched to 25 cm with a rim (SE hacker-free; ATK); stone or steel heated at the maximum 45-60 min (NYT margherita; ATK) and baked with the grill 4-8 min (ATK; NYT margherita); basil and oil to finish (all). Dough salt lowered to 1.5% (my own, for the site salt limit).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/neapolitan-style-margherita-pizza-tomato-mozzarella-basil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 5. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- fine semolina or flour, for the peel: 2 tbsp → 16 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
