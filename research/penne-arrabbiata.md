# Research: Penne all'Arrabbiata
Dish: Short (penne, rigatoni, fusilli) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Penne With Arrabbiata Sauce (Serious Eats)](https://www.seriouseats.com/penne-pasta-arrabbiata-sauce-recipe) [Tier 1 (locked list): Serious Eats]: 450 g penne pulled 1 min early; garlic and chilli in 45 ml oil gently 5 min; 794 g whole tomatoes; pasta finished in the sauce with pasta water 1-2 min; Parmesan and parsley off the heat. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Penne all'Arrabbiata (NYT Cooking)](https://cooking.nytimes.com/recipes/1015236-penne-allarrabbiata) [Tier 2 (locked list): NYT Cooking]: Chilli flakes bloomed in olive oil over low heat; tomatoes; pasta tossed in the sauce with reserved water; extra oil to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Penne All'Arrabiata, a Rome restaurant version (NYT Cooking)](https://cooking.nytimes.com/recipes/3388-silvano-marchettos-penne-allarrabiata) [Tier 2 (locked list): NYT Cooking]: Garlic browned gently in olive oil without burning; tinned plum tomatoes broken up and reduced 10 min; dried chilli. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Garlic and chilli started in cold oil; reduced 12-15 min; finished in the sauce (04-P3, 04-P4).
- Pasta water 0.8 % because of the Parmesan finish (04-P1).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/penne-arrabbiata-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
