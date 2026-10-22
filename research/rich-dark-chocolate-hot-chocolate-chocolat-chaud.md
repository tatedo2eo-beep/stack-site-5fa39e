# Research: Rich Dark Hot Chocolate (Chocolat Chaud)
Dish: Hot chocolate (French chocolat chaud, Spanish thick) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Hot Chocolate (NYT Cooking)](https://cooking.nytimes.com/recipes/1019902-classic-hot-chocolate) [Tier 2 (locked list): NYT Cooking]: Cocoa whisked into boiling water, then whole milk; chopped bittersweet chocolate, a little sugar and salt whisked in at a simmer, finished with vanilla. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Easy Hot Chocolate (Serious Eats)](https://www.seriouseats.com/easy-hot-chocolate-recipe-8603082) [Tier 1 (locked list): Serious Eats]: Whole milk heated with finely chopped dark chocolate and a pinch of salt (with optional malted milk powder), sweetened to taste. _(curl 200; JSON-LD ingredients read (steps not in the page data))_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Blooming cocoa in boiling water first, then milk and chocolate (NYT)
- Generous dark chocolate per serving for a thick, rich cup (SE ratio)
- Alcohol-free vanilla; no whipped cream, to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/rich-dark-chocolate-hot-chocolate-chocolat-chaud-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
