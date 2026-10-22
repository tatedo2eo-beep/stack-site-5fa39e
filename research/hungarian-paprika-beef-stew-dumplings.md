# Research: Hungarian Paprika Beef Stew with Egg Dumplings
Dish: Pörkölt / flavour: Classic. Private file, not published.

## Sources actually opened
- [Hungarian Beef Stew (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4514-hungarian-beef-stew) [Tier 1 (locked list): America's Test Kitchen]: Beef salted; onions sweated covered without browning; paprika-tomato paste; beef braised covered in its own juices with little added liquid, only topped up near the end; vinegar to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Goulash (Hungarian Beef and Paprika Stew) (Serious Eats)](https://www.seriouseats.com/hungarian-goulash-beef-paprika-stew-recipe) [Tier 1 (locked list): Serious Eats]: Beef browned; onion and peppers softened; plenty of sweet paprika cooked 30 s; slow oven braise; finished with cider vinegar. (Its soy and fish sauce are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hungarian Goulash (NYT Cooking)](https://cooking.nytimes.com/recipes/4736-hungarian-goulash) [Tier 2 (locked list): NYT Cooking]: Onions cooked in fat; paprika and caraway; floured beef; stock; simmered about 1.5 h; finished with lemon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Onions sweated without browning, paprika paste, braised covered in its own juices with little liquid, vinegar to finish (ATK 4514); paprika off the heat so it does not burn and green pepper (SE, NYT); egg dumplings (nokedli) are my side to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 165 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/hungarian-paprika-beef-stew-dumplings-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
