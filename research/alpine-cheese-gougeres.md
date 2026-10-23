# Research: Cheesy Gruyère Gougères
Dish: Gougères / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Gougères (NYT Cooking)](https://cooking.nytimes.com/recipes/1019088-classic-gougeres) [Tier 2 (locked list): NYT Cooking]: Water, butter, salt and cayenne boiled, bread flour stirred in until the dough pulls away, beaten to cool, 4 eggs added one at a time, Gruyère beaten in, piped, sprinkled with Parmesan, baked at 425 °F then 350 °F until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gougères (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10325-gougeres) [Tier 1 (locked list): America's Test Kitchen]: Choux paste cooked briefly until it forms a ball, cooled slightly in a processor, beaten egg added in a stream, Gruyère added; mounds smoothed, baked at 425 °F until puffed, then left in the turned-off oven 10-15 minutes to dry. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- NYT two-temperature bake plus ATK oven-off drying so they do not collapse
- Parmesan on top

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 40 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/alpine-cheese-gougeres-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
