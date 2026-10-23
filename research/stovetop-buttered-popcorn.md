# Research: Stovetop Buttered Popcorn
Dish: Popcorn / flavour: Classic. Private file, not published.

## Sources actually opened
- [Buttered Popcorn (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7592-buttered-popcorn) [Tier 1 (locked list): America's Test Kitchen]: Oil and 3 kernels heated until they pop, pan off the heat with the rest of the kernels for 30 seconds, then cooked with the lid ajar until popping slows to 2 seconds apart, tossed with melted butter and salt. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spicy Pimentón Popcorn (NYT Cooking)](https://cooking.nytimes.com/recipes/1019376-spicy-pimenton-popcorn) [Tier 2 (locked list): NYT Cooking]: Oil and 3 kernels heated, remaining kernels added, lid nearly closed with a crack facing away, shaken until popping stops, seasoned immediately and left to settle 5-7 minutes for crunch. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Brown Bag Microwave Popcorn (Serious Eats)](https://www.seriouseats.com/microwave-brown-bag-popcorn-recipe-8766214) [Tier 1 (locked list): Serious Eats]: Kernels tossed with a little oil and salt, sealed in a folded brown paper bag and microwaved about 2 minutes, stopping before scorching. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- ATK method and butter
- NYT crack-facing-away safety and settling time
- Salt measured for the panel

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 2 min + cook 8 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/stovetop-buttered-popcorn-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
