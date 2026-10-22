# Research: Black Olive Tapenade with Capers, Anchovy and Thyme
Dish: Tapenade / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tapenade (NYT Cooking)](https://cooking.nytimes.com/recipes/1025419-tapenade) [Tier 2 (locked list): NYT Cooking]: Garlic pounded or pulsed, then anchovies and capers, then olives, with olive oil worked in slowly and seasoned with pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Black Olive Tapenade (Serious Eats)](https://www.seriouseats.com/black-olive-tapenade-french-recipe) [Tier 1 (locked list): Serious Eats]: Olives, capers, anchovies, garlic and thyme or oregano processed to a paste with lemon juice and just enough olive oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Black Olive Tapenade (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7413-black-olive-tapenade) [Tier 1 (locked list): America's Test Kitchen]: Kalamata and cured olives, capers and anchovies pulsed and finished with olive oil, rested before serving. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No Dijon; lemon juice for lift
- Olives rinsed and no added salt
- Toasted baguette slices, as in the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 8 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/black-olive-tapenade-capers-anchovy-thyme-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
