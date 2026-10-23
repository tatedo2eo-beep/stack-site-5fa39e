# Research: Vegetable Upma with Cashews and Curry Leaves
Dish: Upma / flavour: Classic. Private file, not published.

## Sources actually opened
- [Upma (Spiced Semolina With Cashews and Chiles) (NYT Cooking)](https://cooking.nytimes.com/recipes/1025534-upma-spiced-semolina-with-cashews-and-chiles) [Tier 2 (locked list): NYT Cooking]: Coarse semolina dry-toasted without colouring; ghee tempering of mustard and cumin seeds, urad and chana dal, cashews, chillies, curry leaves, ginger and onion; water and salt boiled, semolina streamed in while stirring, covered, finished with ghee, rested; coriander and lemon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Vegetable Upma (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/vegetable-upma-17149684) [Tier 2 (locked list): Food Network Kitchen]: Toasted semolina; mustard seeds and chana dal tempered in oil with chillies, curry leaves and cashews; onion, tomatoes, peas, green beans and carrot cooked; water boiled and semolina sprinkled in, covered 5 min; ghee stirred in. _(WebFetch 200; byline Food Network Kitchen; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Toasting, ghee tempering and slow pouring (NYT)
- Tomato, peas, beans and carrot (FNK)
- Metric quantities; salt kept at 1.9 g per serving

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/vegetable-upma-cashews-curry-leaves-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C9 (curry base).
Changes made:
- black or brown mustard seeds: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- sugar (optional): 0.5 tsp → 2.1 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
