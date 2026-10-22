# Research: Baked Ziti with Ricotta and Mozzarella
Dish: Baked ziti / flavour: Classic. Private file, not published.

## Sources actually opened
- [Baked Ziti (NYT Cooking)](https://cooking.nytimes.com/recipes/1018954-baked-ziti) [Tier 2 (locked list): NYT Cooking]: Onion softened, tomato paste cooked to brick red, whole tomatoes and purée simmered 20-30 min; pasta 2 min under; reserved pasta water stirred into the sauce; layered with ricotta mixture and mozzarella; baked until bubbling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [No-Boil Baked Ziti (Serious Eats)](https://www.seriouseats.com/food-lab-no-boil-baked-ziti-recipe) [Tier 1 (locked list): Serious Eats]: Ziti with red sauce, ricotta, Parmesan and mozzarella; baked covered at 200 °C then uncovered until browned; rested 10 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Parboiled as in NYT; no cream or egg in the ricotta layer; 74 °C centre.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 75 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/baked-ziti-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
