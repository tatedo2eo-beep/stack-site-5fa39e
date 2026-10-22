# Research: Korean-Style Marinated Grilled Beef with Lettuce Wraps
Dish: Bulgogi/galbi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Bulgogi (NYT Cooking)](https://cooking.nytimes.com/recipes/1017444-bulgogi) [Tier 2 (locked list): NYT Cooking]: Beef firmed in the freezer and sliced very thin across the grain; garlic, pear, onion and ginger blended smooth; soy, sesame oil, brown sugar and pepper; marinated 30 min to overnight; cooked over very high heat; sesame seeds; lettuce wraps with rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Beef Bulgogi (Korean Marinated Beef) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11305-korean-marinated-beef-bulgogi) [Tier 1 (locked list): America's Test Kitchen]: Rib-eye frozen until firm and shaved thin; onion, sugar, soy, garlic, sesame oil and pepper puréed; cooked in a single layer over medium-high heat until browned and no longer pink; spring onion greens at the end; chilli dipping sauce on the side. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Korean Barbecue Beef Bulgogi (Serious Eats)](https://www.seriouseats.com/korean-barbeuce-beef-bulgogi-short-rib-recipe) [Tier 1 (locked list): Serious Eats]: Soy, sugar, sesame oil, grated onion, garlic, ginger and sesame seed marinade, 30 min; very hot grill pan; lettuce and rice to serve. (Its mirin is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Freeze, slice thin across the grain, pear-onion-garlic-ginger purée with soy, sesame oil and sugar (NYT); cook in a single layer in batches, spring onion at the end, chilli dipping sauce (ATK); lettuce and rice (NYT, SE); no mirin, rice wine or gochujang; cooked to at least 63 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/korean-style-marinated-beef-bulgogi-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- light brown sugar: 1.5 tbsp → 18 g (CHECKLIST 1, weights in grams)
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
