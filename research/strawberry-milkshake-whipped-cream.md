# Research: Strawberry Milkshake with Whipped Cream
Dish: Milkshakes / flavour: Strawberry. Private file, not published.

## Sources actually opened
- [Strawberry Milkshake (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8381-strawberry-milkshake) [Tier 1 (locked list): America's Test Kitchen]: Purée thawed frozen strawberries first, then process with softened vanilla ice cream, a little milk and salt. _(curl 200; JSON-LD recipe read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch from one locked-list publisher (rule of 23 Oct 16:26). Wording, step order and structure differ from the source; quantities sanity-checked.

## Own cooking judgment
- Smaller batch for 2; whipped-cream and strawberry topping to match the photo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 0 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/strawberry-milkshake-whipped-cream-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- icing or caster sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
