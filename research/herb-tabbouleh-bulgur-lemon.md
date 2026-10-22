# Research: Herb Tabbouleh with Bulgur and Lemon
Dish: Tabbouleh / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tabbouleh (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7094-tabbouleh) [Tier 1 (locked list): America's Test Kitchen]: Tomatoes salted and drained 30 min; rinsed bulgur softened in lemon juice and tomato juice 30-40 min instead of water; lemon, oil, cayenne and salt dressing; parsley, mint, scallions; rested about 1 h for flavours to blend. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tabbouleh (NYT Cooking)](https://cooking.nytimes.com/recipes/1012585-tabbouleh) [Tier 2 (locked list): NYT Cooking]: Fine bulgur soaked and squeezed dry; tossed with lemon juice, lots of chopped parsley, mint, finely chopped tomatoes and scallions; rested so the bulgur swells; oil added at the end; served with romaine leaves. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tabbouleh Salad (Serious Eats)](https://www.seriouseats.com/tabbouleh-salad-recipe) [Tier 1 (locked list): Serious Eats]: Tomatoes salted and drained, juice kept; parsley salted and blotted dry; bulgur softened in hot tomato water; parsley chopped finely by knife; mixed with mint, scallions, oil, lemon; served with romaine. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own (salt kept low because feta, olives and capers are salty); the core method matches the locked-list sources listed above; nothing copied. Red wine vinegar, sherry or balsamic in the sources is replaced by cider vinegar or citrus (no wine products).

## Own cooking judgment
- Tomatoes salted and drained, juice kept (ATK, SE)
- Bulgur softened in lemon and tomato juice rather than water (ATK; SE uses tomato water)
- Parsley-heavy mix with mint and scallions, rested to blend, served with romaine (NYT, ATK, SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/herb-tabbouleh-bulgur-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
