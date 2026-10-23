# Research: Swirled Chocolate Babka
Dish: Babka / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chocolate Babka (NYT Cooking)](https://cooking.nytimes.com/recipes/1018045-chocolate-babka) [Tier 2 (locked list): NYT Cooking]: Enriched dough with eggs, butter, vanilla and zest; chocolate-butter filling rolled in, the log split and twisted, finished with syrup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chocolate Babka (ATK)](https://www.americastestkitchen.com/recipes/14284-chocolate-babka) [Tier 1 (locked list): America's Test Kitchen]: Bread-flour dough with milk, eggs and butter, a melted chocolate, butter, cocoa and icing sugar filling, sugar syrup brushed on after baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Rich and Tender Chocolate Babka (Serious Eats)](https://www.seriouseats.com/chocolate-babka-recipe-8711555) [Tier 1 (locked list): Serious Eats]: Cold-fermented enriched dough, chocolate and cocoa filling, rolled, cut and twisted into loaf pans, then soaked with syrup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Overnight-chilled dough so the filling spreads without tearing it.
- Logs cut lengthways and twisted to show the layers.
- Two loaves of 8 slices; vanilla is alcohol-free.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 50 min + cook 40 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/swirled-chocolate-babka-syrup-glaze-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
