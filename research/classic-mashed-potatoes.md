# Research: Classic Buttery Mashed Potatoes
Dish: Mashed / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ultra-Fluffy Mashed Potatoes (Serious Eats)](https://www.seriouseats.com/ultra-fluffy-mashed-potatoes-recipe) [Tier 1 (locked list): Serious Eats]: Cubes rinsed until the water runs clear; cold-water start, gentle simmer about 15 min; drained, rinsed with hot water, steamed dry; riced; butter folded in before the hot milk. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Best Mashed Potatoes (NYT Cooking)](https://cooking.nytimes.com/recipes/1016898-mashed-potatoes) [Tier 2 (locked list): NYT Cooking]: Boiled until very soft; shaken dry in the hot pot; riced; hot butter and milk added a little at a time. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rinse, cold start, hot rinse, rice; butter before milk (SE).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/classic-mashed-potatoes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G7 (emulsions: butter and cheese folded over low heat).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
