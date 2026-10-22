# Research: Chocolate Swiss Roll (Bûche de Noël)
Dish: Swiss roll/bûche de Noël / flavour: Classic. Private file, not published.

## Sources actually opened
- [Bûche de Noël (NYT Cooking)](https://cooking.nytimes.com/recipes/10478-buche-de-noel-christmas-yule-log) [Tier 2 (locked list): NYT Cooking]: Whole eggs plus yolks and sugar warmed over hot water and whipped; flour folded in; thin sheet baked hot and rolled. (Its orange liqueur is not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bûche de Noël (NYT Cooking)](https://cooking.nytimes.com/recipes/1168-buche-de-noel) [Tier 2 (locked list): NYT Cooking]: Lined jelly-roll tin with overhang; separated-egg sponge; rolled while warm and filled once cool; frosted to look like bark. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Raspberry and Cream Roulade (NYT Cooking)](https://cooking.nytimes.com/recipes/1022271-raspberry-and-cream-roulade) [Tier 2 (locked list): NYT Cooking]: Sponge turned out onto a sugar-dusted towel; paper peeled off; filled with cream and rolled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Whole-egg chocolate sponge rolled warm in sugared paper; cream filling; ganache bark; no liqueur.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 10 min against the step times.
- Quantities checked against servings (10). Nutrition worked from USDA FDC (see content/notes/chocolate-buche-de-noel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK6 (sponge and chiffon); 05-CK11 (genoise); 05-CK12 (buttercreams and cream cheese frosting); 05-CK13 (chocolate and ganache); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- icing sugar, to dust: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.125 tsp fine sea salt or table salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
