# Research: Lemon Sorbet (Lemon Water Ice)
Dish: Sorbet / flavour: Lemon. Private file, not published.

## Sources actually opened
- [Philadelphia-Style Lemon Water Ice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16890-philadelphia-style-lemon-water-ice) [Tier 1 (locked list): America's Test Kitchen]: Peeled lemon flesh processed with water, sugar and salt, strained, diluted, churned and frozen in a loaf tin. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lemon Water Ice (Serious Eats)](https://www.seriouseats.com/lemon-water-ice-recipe-11789279) [Tier 1 (locked list): Serious Eats]: Lemon flesh blended with water, sugar and salt, strained and churned; zest added at the end of churning. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Whole lemon flesh, sieved.
- Zest added in the last minute of churning.
- Sugar between the two sources.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 0 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/lemon-sorbet-water-ice-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
