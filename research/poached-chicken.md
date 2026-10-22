# Research: Gently Poached Chicken with Herb Broth
Dish: Poached / flavour: Classic. Private file, not published.

## Sources actually opened
- [Perfect Poached Chicken Breasts (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7763-perfect-poached-chicken-breasts) [Tier 1 (locked list): America's Test Kitchen]: Water heated to about 79 °C (175 °F), heat off, covered, 17-22 min to 71 °C; rest 5 min. Seasoned (salted) poaching liquid. _(read via search extract; curl 200)_
- [Tender Poached Chicken (Serious Eats)](https://www.seriouseats.com/how-to-poach-chicken-recipe-8641609) [Tier 1 (locked list): Serious Eats]: Gentle poaching well below a simmer keeps breasts juicy; never boil. (Serious Eats pulls breasts at 65 °C and relies on holding time; this site uses the USDA 74 °C instead.) _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Liquid held at 75-80 °C on the lowest heat to reach 74 °C in 18-24 min (ATK uses residual heat to 71 °C).
- Caper-parsley dressing.

## Source conflicts
- Serious Eats pulls breasts at 65 °C and ATK at 71 °C. This site follows the USDA FSIS 74 °C minimum, so the cooking time is a little longer.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/poached-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 2 tsp fine salt -> 12.0 g
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 2 tsp fine salt -> 12 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
