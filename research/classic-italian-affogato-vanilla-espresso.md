# Research: Classic Italian Affogato: Vanilla Ice Cream Drowned in Espresso
Dish: Affogato / flavour: Classic. Private file, not published.

## Sources actually opened
- [Affogato (NYT Cooking)](https://cooking.nytimes.com/recipes/1022454-affogato) [Tier 2 (locked list): NYT Cooking]: A double shot of hot espresso poured slowly in a thin stream over very cold vanilla gelato in a bowl chilled in the freezer, and eaten at once. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Affogato (Espresso-Topped Gelato) (Serious Eats)](https://www.seriouseats.com/affogato-coffee-ice-cream-recipe-11747945) [Tier 1 (locked list): Serious Eats]: One shot of espresso poured over a generous scoop of vanilla ice cream in a small glass, served right away with a spoon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Frozen bowls and very cold ice cream (NYT)
- No liqueur
- Caffeine note; gelatine-free ice cream

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 2 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/classic-italian-affogato-vanilla-espresso-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
- No changes needed.
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
