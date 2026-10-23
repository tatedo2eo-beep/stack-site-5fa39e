# Research: Romaine Caesar Salad with Garlic Croutons
Dish: Caesar / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10919-chicken-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Mayonnaise-based Caesar dressing with lemon, garlic, anchovies and pepper (no raw yolk); romaine tossed with croutons, Parmesan and two-thirds of the dressing; sliced chicken tossed in the rest and laid on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Caesar Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1018732-caesar-salad) [Tier 2 (locked list): NYT Cooking]: Torn croutons oven-toasted until golden; dressing built on mayonnaise with pounded anchovies, garlic, lemon and Parmesan, tasted on a leaf and balanced; greens tossed by hand with plenty of dressing and served immediately; dressing keeps 3 days. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6330-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Garlic croutons crisped and finished with Parmesan; garlic rested in lemon juice; anchovies mashed to a paste; oil whisked in to emulsify, Parmesan added; very well dried romaine tossed just before serving. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Worcestershire sauce, Dijon mustard, wine vinegar and raw or coddled egg yolk used by some sources are left out (for food safety): a mayonnaise base and mustard powder take their place.

## Own cooking judgment
- Mayonnaise-based dressing with anchovy, garlic, lemon and Parmesan instead of raw yolk (ATK 10919, NYT)
- Oven-toasted garlic croutons (NYT; ATK crisps them in a pan)
- Very dry romaine tossed just before serving (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/romaine-caesar-salad-garlic-croutons-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
