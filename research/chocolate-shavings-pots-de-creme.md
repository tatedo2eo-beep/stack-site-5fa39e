# Research: Rich Chocolate Pots de Crème with Chocolate Shavings
Dish: Pot de crème / flavour: Chocolate. Private file, not published.

## Sources actually opened
- [Chocolate Pots de Crème (ATK)](https://www.americastestkitchen.com/recipes/3196-chocolate-pots-de-creme) [Tier 1 (locked list): America's Test Kitchen]: Yolk, sugar, cream and half-and-half custard stirred to 79-82 °C, strained over chopped chocolate, vanilla and espresso added, chilled; topped with cream, cocoa and chocolate shavings. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mocha Pots de Crème For Two (ATK)](https://www.americastestkitchen.com/recipes/16719-mocha-pots-de-creme-for-two) [Tier 1 (locked list): America's Test Kitchen]: Stirred yolk and cream custard with espresso powder cooked to 79 °C, strained onto chocolate and whisked smooth, chilled in ramekins. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Stirred to 80-82 °C per the custard rule; shavings to match the photo. No spirits.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/chocolate-shavings-pots-de-creme-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
