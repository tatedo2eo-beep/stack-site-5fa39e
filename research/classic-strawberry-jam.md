# Research: Strawberry Jam
Dish: Strawberry jam / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Strawberry Jam (ATK)](https://www.americastestkitchen.com/recipes/8823-classic-strawberry-jam) [Tier 1 (locked list): America's Test Kitchen]: Crushed strawberries boiled with sugar, a grated Granny Smith apple and lemon juice to 103-104 °C, checked with a frozen-plate test, skimmed, cooled and refrigerated to set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Bright and Fruity Strawberry Jam (Serious Eats)](https://www.seriouseats.com/customizable-strawberry-jam-recipe) [Tier 1 (locked list): Serious Eats]: Chopped strawberries and lemon juice simmered, sugar added and brought to a rolling boil with low-sugar pectin, set checked on a cooled plate, foam skimmed and jarred; refrigerated or frozen. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Mashed berries boiled with sugar, grated apple and lemon juice to 104-105 °C.
- Cold-plate set test.
- Fridge jam, cooled and refrigerated to firm.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 30 min against the step times.
- Quantities checked against servings (48). Nutrition worked from USDA FDC (see content/notes/classic-strawberry-jam-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
