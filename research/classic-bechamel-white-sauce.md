# Research: Classic Béchamel White Sauce
Dish: Béchamel / flavour: Classic. Private file, not published.

## Sources actually opened
- [Béchamel Sauce (NYT Cooking)](https://cooking.nytimes.com/recipes/1023358-bechamel-sauce) [Tier 2 (locked list): NYT Cooking]: Butter and flour cooked 1 min, whole milk added gradually, simmered about 8 min until it coats a spoon; salt, pepper and nutmeg. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Classic Béchamel (Serious Eats)](https://www.seriouseats.com/bechamel-white-sauce-recipe) [Tier 1 (locked list): Serious Eats]: Butter melted without browning, flour cooked about 1 min, milk whisked in a thin stream, simmered until it coats a spoon; salt, pepper, optional nutmeg. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Pale roux of butter and flour.
- Milk added gradually and simmered until it coats a spoon.
- White pepper and nutmeg.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/classic-bechamel-white-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.4 tsp fine salt -> 2.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
