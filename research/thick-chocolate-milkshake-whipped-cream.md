# Research: Thick Chocolate Milkshake with Whipped Cream
Dish: Milkshakes / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ultimate Chocolate Milkshake (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3688-ultimate-chocolate-milkshake) [Tier 1 (locked list): America's Test Kitchen]: Vanilla ice cream, chocolate sorbet, a little hot fudge sauce and whole milk pureed just until smooth and poured into chilled glasses. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Malted Chocolate Milkshake (Serious Eats)](https://www.seriouseats.com/malted-chocolate-milk-shake-recipe) [Tier 1 (locked list): Serious Eats]: Chocolate ice cream blended with a small amount of milk and malted milk powder for about 30 seconds and served immediately. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Chocolate ice cream base with chocolate syrup (no malt, no sorbet)
- Low milk ratio and brief blending for a thick shake
- Whipped cream topping to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/thick-chocolate-milkshake-whipped-cream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- icing sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
