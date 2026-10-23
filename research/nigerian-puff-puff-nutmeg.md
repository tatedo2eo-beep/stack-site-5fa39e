# Research: Nigerian Puff-Puff with Nutmeg
Dish: Puff-puff / flavour: Classic. Private file, not published.

## Sources actually opened
- [Puff Puff (Serious Eats)](https://www.seriouseats.com/puff-puff-5537120) [Tier 1 (locked list): Serious Eats]: Flour, sugar, fast-acting yeast and nutmeg whisked, vanilla water stirred in to a thick sticky batter, risen about 45 minutes until doubled, tablespoon scoops fried at 330 °F about 6 minutes until puffed and golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Puff Puff (NYT Cooking)](https://cooking.nytimes.com/recipes/1020287-puff-puff) [Tier 2 (locked list): NYT Cooking]: Yeast proofed in warm water, combined with flour, salt, nutmeg and sugar to a loose batter, risen about 40 minutes, tablespoonfuls fried at 350 °F for 5-6 minutes and tossed in spiced sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- SE batter and 165 °C frying
- Pinch of salt from NYT
- Plain finish to match the photo; alcohol-free vanilla

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/nigerian-puff-puff-nutmeg-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
