# Research: Classic Cheeseburger
Dish: Cheeseburger / flavour: Classic. Private file, not published.

## Sources actually opened
- [Salting Ground Beef (The Burger Lab, Serious Eats)](https://www.seriouseats.com/the-burger-lab-salting-ground-beef) [Tier 1 (locked list): Serious Eats]: Salt mixed into mince early gives a springy, sausage-like texture; salt the outside just before cooking. _(read via search extract)_
- [When to Salt Burgers (America's Test Kitchen)](https://www.americastestkitchen.com/how_tos/6586-when-to-salt-burgers) [Tier 1 (locked list): America's Test Kitchen]: Confirms: season the surface immediately before cooking (myosin gel explanation). _(read via search extract)_
- [This 2-Second Burger Trick Prevents That Annoying Dome in the Middle (Serious Eats)](https://www.seriouseats.com/flat-burger-cooking-prep-tip-12128439) [Tier 1 (locked list): Serious Eats]: Shape patty ~1 cm wider than bun; shallow 6 mm dimple; do not press with spatula. _(read via search extract)_
- [Dimpling Hamburgers (America's Test Kitchen)](https://www.americastestkitchen.com/how_tos/5875-dimpling-hamburgers) [Tier 1 (locked list): America's Test Kitchen]: Dimple matters most on grill/broiler; in a skillet the edges shrink less. (Kept a shallow dimple anyway; harmless.) _(read via search extract)_
- [Which toppings make America's favorite burger? (YouGov)](https://yougov.com/en-us/articles/29855-which-toppings-make-americas-favorite-burger) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Topping popularity: cheese 74%, ketchup 65%, lettuce 64%, tomato 58%, onion 57%, pickles 54%, mustard 52%. _(read via search extract; URL verified 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- 150 g patties, 1.5 cm thick, 4 + 3 min on medium-high; lid for the cheese; topping set.

## Source conflicts
- ATK says a dimple is unnecessary in a skillet; Serious Eats (2026) recommends it for any method. Kept a shallow dimple: harmless either way.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/classic-cheeseburger-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 01-B1 (fat); 01-B2 (when to salt); 01-B3 (how much salt); 01-B5 (pan heat); 01-B8 (71 °C); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6.0 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Resting reason corrected: no juice-reabsorption claim (02-C1, 06-G5)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
