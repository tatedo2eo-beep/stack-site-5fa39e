# Research: Peach Melba: Vanilla-Poached Peaches with Raspberry Sauce and Ice Cream
Dish: Peach Melba / flavour: Classic. Private file, not published.

## Sources actually opened
- [Peach Melba (Serious Eats)](https://www.seriouseats.com/peach-melba-recipe-7560249) [Tier 1 (locked list): Serious Eats]: Raspberries simmered with water, sugar and lemon and sieved; peaches scored, poached in a honey, lemon and vanilla syrup, chilled in iced water, peeled and halved; served with vanilla ice cream and the sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Not-So-Classic Peach Melba (NYT Cooking)](https://cooking.nytimes.com/recipes/1022497-not-so-classic-peach-melba) [Tier 2 (locked list): NYT Cooking]: Raw raspberry and sugar sauce, sieved; peeled sweet peaches with vanilla ice cream and the sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Peach halves kept whole to match the photo, 2 per bowl.
- Cooked, sieved raspberry sauce made first.
- Ice cream without gelatine; eggs declared as many are custard-based.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 25 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/peach-melba-poached-peaches-raspberry-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- honey: 4 tbsp → 84 g (CHECKLIST 1, weights in grams)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
