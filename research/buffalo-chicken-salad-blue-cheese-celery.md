# Research: Buffalo Chicken Salad with Blue Cheese and Celery
Dish: Chicken salad / flavour: Buffalo. Private file, not published.

## Sources actually opened
- [Buffalo Chicken Salad (Serious Eats)](https://www.seriouseats.com/buffalo-chicken-salad-recipe-7566308) [Tier 1 (locked list): Serious Eats]: Hot-sauce-marinated thighs broiled; blue cheese dressing (mayo, sour cream, buttermilk, cider vinegar); buffalo dressing; composed romaine salad. _(fetched 200; recipe (ingredients and steps) read)_
- [Buffalo and Blue Cheese Chicken Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3689-buffalo-and-blue-cheese-chicken-salad) [Tier 1 (locked list): America's Test Kitchen]: Mayonnaise, blue cheese, hot sauce, celery and carrot mixed with cooked chicken breast. _(fetched 200; recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Two locked sources compared; wording, ingredient order and step structure are our own.

## Own cooking judgment
- Metric quantities and our own wording
- Fewer, regrouped steps in a different order
- Bottled dressing replaced with soured cream and cider vinegar; poached chicken; blue cheese

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/buffalo-chicken-salad-blue-cheese-celery-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
