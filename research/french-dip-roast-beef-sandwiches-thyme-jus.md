# Research: French Dip Roast Beef Sandwiches with Thyme Jus
Dish: French dip / flavour: Classic. Private file, not published.

## Sources actually opened
- [French Dip Sandwich (Serious Eats)](https://www.seriouseats.com/french-dip-sandwich-recipe-8605324) [Tier 1 (locked list): Serious Eats]: Beef roast dry-salted ahead, roasted low and slow, rested and sliced thin; jus built from browned onions, flour, tomato paste, thyme and stock; sliced beef and rolls dipped in the hot jus. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [French Dip Sandwiches (NYT Cooking)](https://cooking.nytimes.com/recipes/1025071-french-dip-sandwiches) [Tier 2 (locked list): NYT Cooking]: Jus of butter, garlic and thyme simmered with broth about 30 minutes; baguettes buttered and toasted in a hot oven; thinly sliced roast beef warmed in the jus and piled into the bread. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [French Dip Sandwiches (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/2378-french-dip-sandwiches) [Tier 1 (locked list): America's Test Kitchen]: Browned onion and stock for the jus; rolls toasted; beef dipped briefly in the hot jus before filling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Roasted to 63 °C centre (above the low-temperature target in SE) for safety
- Low-salt stock, no added sauces; only 3 g salt on the joint
- Onions cooked in the roasting pan so the jus builds from the drippings

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 120 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/french-dip-roast-beef-sandwiches-thyme-jus-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- plain flour: 1 tbsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
