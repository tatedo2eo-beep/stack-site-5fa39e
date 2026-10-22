# Research: Spiced Masala Chai with Ginger and Cardamom
Dish: Masala chai / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chai Masala (NYT Cooking)](https://cooking.nytimes.com/recipes/1013381-chai-masala) [Tier 2 (locked list): NYT Cooking]: Strong black tea, chopped ginger and cracked cardamom boiled in water 3 minutes, then milk and sugar added and boiled 2 minutes more before straining. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Masala Chai Concentrate (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12608-masala-chai-concentrate) [Tier 1 (locked list): America's Test Kitchen]: Cinnamon, star anise, cardamom, cloves and peppercorns crushed and toasted, simmered with water, sugar and ginger, then black tea added and steeped before straining; mixed with milk to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Crushed, toasted whole spices (ATK)
- Boil-the-tea-then-boil-with-milk stovetop method (NYT)
- Single-pot version for 4 mugs, lightly sweetened

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spiced-masala-chai-ginger-cardamom-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 4 tsp → 17 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
