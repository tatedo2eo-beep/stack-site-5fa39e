# Research: Village Greek Salad with a Feta Slab
Dish: Greek / flavour: Classic. Private file, not published.

## Sources actually opened
- [Horiatiki Salata, Hearty Greek Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13158-horiatiki-salata-hearty-greek-salad) [Tier 1 (locked list): America's Test Kitchen]: Tomato wedges salted and drained in a colander 30 min; onion soaked in ice water 15 min; vinegar, oregano, pepper and salt whisked; tossed with cucumber, green pepper, olives and capers and oil; feta slab on top with oregano and a drizzle of oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Horiatiki, Greek Salad (Serious Eats)](https://www.seriouseats.com/the-best-greek-salad-tomato-feta-summer-recipe) [Tier 1 (locked list): Serious Eats]: Onion quick-pickled in vinegar about 15 min while the rest is prepared; tomatoes, cucumber, olives and onion tossed with oil and some of the pickling vinegar, salt and oregano; slabs of feta on top with oregano and oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Greek Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1021079-greek-salad) [Tier 2 (locked list): NYT Cooking]: Vinegar, garlic, oregano, salt and pepper whisked, oil added; tomatoes, cucumber and green pepper arranged, olives, capers and onion scattered, half the dressing drizzled; feta slices laid on top with more dressing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own (salt kept low because feta, olives and capers are salty); the core method matches the locked-list sources listed above; nothing copied. Red wine vinegar, sherry or balsamic in the sources is replaced by cider vinegar or citrus (no wine products).

## Own cooking judgment
- Tomatoes salted and drained before dressing (ATK)
- Onion softened by soaking, here in the vinegar used for the dressing (SE; ATK uses ice water)
- Vegetables, olives and capers tossed with an oregano dressing and topped with a feta slab, oregano and oil (ATK, SE, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/village-greek-salad-feta-slab-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.375 tsp fine salt -> 2 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
