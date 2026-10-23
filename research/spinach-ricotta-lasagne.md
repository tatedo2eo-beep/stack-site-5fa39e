# Research: Spinach and Ricotta Lasagne
Dish: Sheets/baked (lasagne) / flavour: Spinach and ricotta. Private file, not published.

## Sources actually opened
- [The Best Spinach Lasagna (Serious Eats)](https://www.seriouseats.com/food-lab-creamy-cheesy-ultimate-spinach-lasagna-recipe) [Tier 1 (locked list): Serious Eats]: Shallot and garlic softened; spinach wilted by the handful and cooked dry; ricotta blended with eggs and Parmesan; layered with béchamel and mozzarella. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spinach Lasagna (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1420-spinach-lasagna) [Tier 1 (locked list): America's Test Kitchen]: Spinach squeezed very dry; béchamel with shallot, bay and nutmeg; cheese and egg filling; no-boil sheets layered and baked covered then uncovered. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Weeknight Spinach and Ricotta Lasagna (NYT Cooking)](https://cooking.nytimes.com/recipes/1025023-weeknight-spinach-and-ricotta-lasagna) [Tier 2 (locked list): NYT Cooking]: Spinach and ricotta with no-boil sheets and mozzarella; context for the quick version. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written as an extra flavour for the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Single filling and layer counts are my own; 74 °C centre is from FSIS.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 60 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/spinach-ricotta-lasagne-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for lasagne assembly; the method rests on the locked-list sources above; CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
