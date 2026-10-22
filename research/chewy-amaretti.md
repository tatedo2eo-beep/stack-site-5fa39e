# Research: Chewy Amaretti
Dish: Amaretti / flavour: Classic. Private file, not published.

## Sources actually opened
- [Amaretti (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/amaretti-recipe) [Tier 1 (locked list): King Arthur Baking]: Almond flour, granulated and icing sugar, salt, 2 egg whites and almond extract to a cohesive dough; chilled; rolled in icing sugar before baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Italian Almond Cookies (NYT Cooking)](https://cooking.nytimes.com/recipes/1021915-italian-almond-cookies) [Tier 2 (locked list): NYT Cooking]: Blanched almonds ground with sugar; egg whites whisked and folded in with almond extract; icing sugar coating; soft, chewy centres. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Whites whisked to soft peaks as in NYT; 1 h air-dry for crackled tops; alcohol-free extract optional.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 24 min against the step times.
- Quantities checked against servings (26). Nutrition worked from USDA FDC (see content/notes/chewy-amaretti-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
