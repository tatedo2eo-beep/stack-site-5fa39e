# Research: Chipotle Chicken Caesar Salad with Avocado and Lime
Dish: Caesar / flavour: Chipotle. Private file, not published.

## Sources actually opened
- [Chipotle Chicken Caesar Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9586-chipotle-chicken-caesar-salad) [Tier 1 (locked list): America's Test Kitchen]: Garlic croutons fried in a skillet; seared chicken breasts; bottled Caesar dressing stirred with chipotle and lime; avocado on top. _(fetched 200; recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> SINGLE SOURCE: one locked publisher recipe used; wording, ingredient order and step structure clearly differ from it.

## Own cooking judgment
- Homemade mayonnaise-based dressing with Parmesan and anchovy instead of bottled
- Chicken cooked to 74 °C
- Our own wording and step order

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chipotle-chicken-caesar-avocado-lime-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
