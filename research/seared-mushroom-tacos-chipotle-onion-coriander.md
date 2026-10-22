# Research: Seared Mushroom Tacos with Chipotle, Onion and Coriander
Dish: Taco / flavour: Mushroom. Private file, not published.

## Sources actually opened
- [Crispy Mushroom Tacos (NYT Cooking)](https://cooking.nytimes.com/recipes/1022424-crispy-mushroom-tacos) [Tier 2 (locked list): NYT Cooking]: Torn oyster mushrooms seared in two batches in a hot heavy skillet with oil in a single layer, left undisturbed to crisp, then seasoned with cumin, salt and pepper; served with pico de gallo on warm corn tortillas. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Soft Tacos With Mushrooms, Onion, and Chipotle Chile (NYT Cooking)](https://cooking.nytimes.com/recipes/1016490-soft-tacos-with-mushrooms-onion-and-chipotle-chile) [Tier 2 (locked list): NYT Cooking]: Onion softened about 5 min; sliced mushrooms cooked over medium-high until they sweat; salt, garlic and chopped chipotle added and cooked 5-10 min until the liquid evaporates; coriander stirred in; served on warm tortillas. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chipotle Mushroom and Cauliflower Tacos (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15121-chipotle-mushroom-and-cauliflower-tacos) [Tier 1 (locked list): America's Test Kitchen]: Cremini and cauliflower roasted at 260 °C until the liquid evaporates, then tossed with chipotle; quick-pickled onion and cabbage and chipotle crema. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Mushrooms seared in two batches in a hot heavy pan in a single layer, undisturbed, until browned and crisp (NYT Crispy)
- Onion softened about 5 min, then garlic and chipotle; mushrooms cooked until their liquid evaporates; coriander stirred in (NYT Soft Tacos; ATK pairs mushrooms with chipotle)
- Cumin, salt and pepper to season (NYT Crispy); served on warm corn tortillas with onion and lime

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/seared-mushroom-tacos-chipotle-onion-coriander-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
