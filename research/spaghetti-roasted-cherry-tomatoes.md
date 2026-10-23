# Research: Spaghetti with Roasted Cherry Tomatoes, Capers and Olives
Dish: Long dried (spaghetti, linguine, bucatini) / flavour: Cherry tomato. Private file, not published.

## Sources actually opened
- [Spaghetti with Cherry Tomatoes, Olives, Capers, and Pine Nuts (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1910-spaghetti-with-cherry-tomatoes-olives-capers-and-pine-nuts) [Tier 1 (locked list): America's Test Kitchen]: Halved cherry tomatoes tossed with oil, garlic, capers and chilli; roasted at about 175 °C 35-40 min without stirring; tossed with spaghetti, olives, oregano and toasted pine nuts. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [One-Pot Spaghetti With Cherry Tomatoes and Kale (NYT Cooking)](https://cooking.nytimes.com/recipes/1018322-one-pot-spaghetti-with-cherry-tomatoes-and-kale) [Tier 2 (locked list): NYT Cooking]: Cherry tomatoes cooked down with the pasta until they burst into a sauce; finished with Parmesan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written as an extra flavour for the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- No sugar added (the ATK version adds some); pecorino finish and pasta-water emulsion are from the base pomodoro.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spaghetti-roasted-cherry-tomatoes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
