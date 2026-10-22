# Research: Pasta alla Norma (Aubergine, Tomato and Ricotta Salata)
Dish: Alla Norma / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pasta alla Norma (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4798-pasta-alla-norma) [Tier 1 (locked list): America's Test Kitchen]: Aubergine dried and browned well before it meets the sauce; garlic and chilli just golden; crushed tomatoes simmered 8-10 min; basil and ricotta salata to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Pasta alla Norma (NYT Cooking)](https://cooking.nytimes.com/recipes/1018822-classic-pasta-alla-norma) [Tier 2 (locked list): NYT Cooking]: Aubergine browned in batches in a single layer, or roasted at about 200 °C until browned; quick tomato-basil sauce; pasta tossed in the sauce for a minute; ricotta salata on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given. The Serious Eats version returned 403 twice and was not read, so it is not cited.

## Own cooking judgment
- Aubergine roasted (NYT alternative) rather than fried, using less oil.
- Anchovy in one source left out so the dish stays vegetarian.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pasta-alla-norma-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
