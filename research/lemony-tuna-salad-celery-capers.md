# Research: Lemony Tuna Salad with Celery and Capers
Dish: Tuna salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [The Best Tuna Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6095-the-best-tuna-salad) [Tier 1 (locked list): America's Test Kitchen]: Tuna pressed dry; onion softened in oil in the microwave; tuna seasoned with lemon and the warm onion oil and left 10 min before mayonnaise and celery go in. (Its pinch of sugar is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Tuna Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8311-classic-tuna-salad) [Tier 1 (locked list): America's Test Kitchen]: Tuna drained thoroughly and seasoned with lemon before binding with mayonnaise; celery for crunch; best within a day. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Tuna Salad Sandwich (NYT Cooking)](https://cooking.nytimes.com/recipes/1017337-classic-tuna-salad-sandwich) [Tier 2 (locked list): NYT Cooking]: Tuna with mayonnaise, celery, red onion, red pepper, capers and lemon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Salami, wine vinegar and Dijon mustard used by some sources are left out: cider vinegar, lemon and mustard powder take their place.

## Own cooking judgment
- Tuna pressed dry and seasoned with lemon and warm onion oil 10 min before the mayonnaise (ATK 6095)
- Celery for crunch, eaten within a day (ATK 8311)
- Red pepper and capers (NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 2 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/lemony-tuna-salad-celery-capers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
