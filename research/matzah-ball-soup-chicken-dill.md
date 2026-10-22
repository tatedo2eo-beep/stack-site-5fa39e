# Research: Matzah Ball Soup with Chicken and Dill
Dish: Matzah ball soup / flavour: Classic. Private file, not published.

## Sources actually opened
- [Matzo Ball Soup (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15477-matzo-ball-soup) [Tier 1 (locked list): America's Test Kitchen]: Whole chicken cut up and simmered with onion, carrot, celery and salt; breasts removed when cooked, dill, peppercorns and cloves added and simmered 1 hour more; broth strained; matzo balls of eggs, schmaltz, seltzer, matzo meal and salt chilled, shaped and simmered in salted water; vegetables cooked in the broth. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Joan Nathan's Matzo Ball Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/12348-joan-nathans-matzo-ball-soup) [Tier 2 (locked list): NYT Cooking]: Eggs, fat, stock, matzo meal and herbs mixed and chilled at least 3 hours, shaped into ping-pong-sized balls and simmered covered 30-40 minutes before going into chicken soup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cut-up chicken broth with breasts pulled early (ATK)
- Chilled mixture and 30-minute covered simmer (NYT)
- Oil or skimmed chicken fat in the balls

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 120 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/matzah-ball-soup-chicken-dill-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C4 (crisp skin); 02-C5 (wings).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 1 tsp fine salt, for the cooking water -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
