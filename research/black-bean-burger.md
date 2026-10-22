# Research: Smoky Black Bean Burger
Dish: Veggie/bean burger / flavour: Classic. Private file, not published.

## Sources actually opened
- [Really Awesome Black Bean Burgers (Serious Eats)](https://www.seriouseats.com/the-best-black-bean-burger-recipe) [Tier 1 (locked list): Serious Eats]: Bake drained tinned beans ~20 min at 175 °C to dry them: dense, meaty, not mushy. _(read via search extract)_
- [Black Bean Burgers (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8509-black-bean-burgers) [Tier 1 (locked list): America's Test Kitchen]: Dry rinsed beans thoroughly; pulse coarsely so beans keep texture; egg + flour binder; chill mix 1 h; pan-fry over medium ~5 min a side until well browned. _(read via search extract; curl 200)_
- [Black Bean Smash Burgers (Simply Recipes)](https://www.simplyrecipes.com/black-bean-smash-burgers-recipe-6979384) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Drying beans fixes wetness; flip gently with a wide spatula. _(read via search extract; curl from box got 403 bot-block, page returned by search)_
- [The Best Black Bean Burgers (Sally's Baking)](https://sallysbakingaddiction.com/best-black-bean-burgers/) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Bake beans ~15 min; sauté onion/pepper/garlic and blot; leave chunks of bean for texture; cumin + smoked paprika. _(read via search extract; curl from box got 403 bot-block, page returned by search)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Re-checked on 22 Oct after the source-quality rule: drying the beans, pulsing coarsely, chilling and pan-frying over medium are backed by Serious Eats and America's Test Kitchen. Oven-drying at 180 °C (160 °C fan) for 15-20 min follows Serious Eats (about 175 °C, about 20 min). Simply Recipes and Sally's Baking are context only.

## Own cooking judgment
- Soy sauce for savouriness; sriracha-paprika mayo; lime-pickled onion; 74 °C because of the egg.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/black-bean-burger-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 01-B1 (fat); 01-B2 (when to salt); 01-B3 (how much salt); 01-B5 (pan heat); 01-B8 (71 °C); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Oven preheat stated first (CHECKLIST Preheat)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).

## Salt re-check
Re-checked 22 Oct: salt = sodium x 2.5 from the USDA rows in the nutrition note, no double counting (brine, rub and pasta-water salt are counted only for the share absorbed). Soy sauce 1 tbsp (16 g) -> 2 tsp (10 g); added salt is only 2 g for 4 patties. 4.03 -> 3.82 g. Remaining sodium is mostly the salted tinned beans (USDA canned values; rinsing removes some, not credited), bun, cheddar and sriracha mayo.
