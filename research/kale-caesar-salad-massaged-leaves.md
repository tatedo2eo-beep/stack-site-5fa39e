# Research: Kale Caesar Salad with Massaged Leaves
Dish: Caesar / flavour: Kale. Private file, not published.

## Sources actually opened
- [Kale Caesar Salad (Serious Eats)](https://www.seriouseats.com/kale-caesar-salad-recipe) [Tier 1 (locked list): Serious Eats]: Kale massaged with olive oil about 2 min to break down the tough leaves; mayonnaise blended with anchovies, garlic, Parmesan and lemon; kale tossed with dressing and croutons, more croutons on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Kale Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8143-kale-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Kale washed and dried; oven croutons; mayonnaise-based Caesar dressing blended with Parmesan, lemon, anchovies and garlic; kale tossed with dressing and refrigerated at least 20 min (up to 6 h) to soften; croutons and Parmesan added at the end. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Kale-Romaine Caesar Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1018035-kale-romaine-caesar-salad) [Tier 2 (locked list): NYT Cooking]: Kale ribs removed, leaves cut bite-size; leaves soaked in cold water and dried; croutons from torn bread baked until crisp; greens tossed with half the dressing, croutons and cheese, then more as needed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Worcestershire sauce, Dijon mustard, wine vinegar and raw or coddled egg yolk used by some sources are left out (for food safety): a mayonnaise base and mustard powder take their place.

## Own cooking judgment
- Kale massaged with oil about 2 min (SE)
- Dressed kale rested at least 20 min to soften (ATK)
- Mayonnaise-based anchovy-Parmesan dressing and baked croutons (SE, ATK, NYT croutons)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/kale-caesar-salad-massaged-leaves-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
