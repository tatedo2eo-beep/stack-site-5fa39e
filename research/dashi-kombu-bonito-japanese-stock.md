# Research: Dashi: Japanese Kombu and Bonito Stock
Dish: Dashi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Dashi (NYT Cooking)](https://cooking.nytimes.com/recipes/1023837-dashi) [Tier 2 (locked list): NYT Cooking]: Kombu soaked and heated slowly in water without boiling, removed, then katsuobushi added off the heat and strained without pressing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ichiban Dashi (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16209-dashi) [Tier 1 (locked list): America's Test Kitchen]: Kombu held at about 65 °C, removed; water brought to about 93 °C, bonito flakes steeped and strained. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Basic Japanese Dashi (Serious Eats)](https://www.seriouseats.com/basic-japanese-dashi-recipe) [Tier 1 (locked list): Serious Eats]: About 30 g kombu and 30 g bonito to 2 litres water; bare simmer, steep 5 minutes, strain. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 15 g kombu and 15 g bonito per litre (SE)
- Temperature-held kombu stage (ATK)
- Do not press the flakes (NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 45 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/dashi-kombu-bonito-japanese-stock-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
