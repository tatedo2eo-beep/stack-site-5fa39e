# Research: Dill Pickle Deviled Eggs
Dish: Deviled eggs / flavour: Dill. Private file, not published.

## Sources actually opened
- [Dill Pickle Deviled Eggs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4717-dill-pickled-deviled-eggs) [Tier 1 (locked list): America's Test Kitchen]: Eggs brought to the boil then left off the heat 10 minutes and chilled; yolks pressed through a sieve and mixed with mayonnaise, sour cream, pickle juice, yellow mustard, a little sugar, salt, pepper, chopped dill pickles and fresh dill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spring Deviled Eggs (Serious Eats)](https://www.seriouseats.com/spring-deviled-eggs-11709555) [Tier 1 (locked list): Serious Eats]: Eggs simmered gently about 11 minutes and shocked in ice water; yolks blended with mayonnaise, crème fraîche, lemon, mustard, herbs and cayenne for a silky filling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 12 min off-heat stand so yolks set fully
- Mustard powder; no added salt as the pickles season it
- Dill sprigs on top to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/dill-pickle-deviled-eggs-sour-cream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine).
Changes made:
- sugar: 0.25 tsp → 1.0 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
