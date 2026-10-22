# Research: Cacio e Pepe (Pecorino and Black Pepper Spaghetti)
Dish: Cacio e pepe / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Cacio e Pepe (Serious Eats)](https://www.seriouseats.com/perfect-cacio-e-pepe-sauce-pasta-recipe-8780373) [Tier 1 (locked list): Serious Eats]: Toasted pepper; 4 g cornflour gel in 45 ml water beaten into 140 g finely grated pecorino; pasta cooled 1 min before mixing; water added 60 ml at a time. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cacio e Pepe (Serious Eats)](https://www.seriouseats.com/spaghetti-cacio-e-pepe-recipe) [Tier 1 (locked list): Serious Eats]: Spaghetti cooked in a little water in a skillet for starchy water; very finely grated pecorino; consistency adjusted with pasta water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cacio e Pepe (NYT Cooking)](https://cooking.nytimes.com/recipes/1017304-cacio-e-pepe) [Tier 2 (locked list): NYT Cooking]: Cheese and pepper mashed to a paste with cold water first; pasta added just before it is fully cooked and stirred vigorously with a little cooking water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Starch-gel method from 04-P5; 120 g pecorino for 350 g pasta.
- 2 litres water at 0.5 % for starchy water and less salt (04-P1, 04-P2).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/cacio-e-pepe-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P5 (cacio e pepe).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
