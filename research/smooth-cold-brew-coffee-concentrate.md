# Research: Smooth Cold Brew Coffee from Concentrate
Dish: Cold brew / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cold Brew Coffee (NYT Cooking)](https://cooking.nytimes.com/recipes/1017355-cold-brew-coffee) [Tier 2 (locked list): NYT Cooking]: Medium-coarse coffee stirred with cold water, steeped overnight or 12 hours, strained through a filter and diluted 1:1 with water over ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cold-Brew Coffee Concentrate (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8790-cold-brew-coffee-concentrate) [Tier 1 (locked list): America's Test Kitchen]: Coarse coffee and water stirred, re-stirred after a crust forms, steeped 24 hours, then pressed and strained through a filter; diluted 1:1 with cold water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Stir, rest and re-stir to wet all the grounds (ATK)
- 12-hour steep and 1:1 dilution over ice (NYT)
- About 1:7.5 coffee to water for a concentrate that keeps a week

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/smooth-cold-brew-coffee-concentrate-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
