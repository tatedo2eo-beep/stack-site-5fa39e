# Research: Chicken Fried Rice with Egg, Peas and Carrot
Dish: Fried rice / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Fried Rice (NYT Cooking)](https://cooking.nytimes.com/recipes/1023897-chicken-fried-rice) [Tier 2 (locked list): NYT Cooking]: Chicken seasoned with soy, garlic and ginger, browned and set aside; scallion whites, garlic and ginger fried; day-old rice, peas and soy fried until crackling; eggs scrambled in; scallion greens to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spicy Chicken Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17448-spicy-chicken-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Eggs, chicken thigh pieces and vegetables each cooked in turn in a hot wok and set aside; aromatics fried, rice heated and broken up, soy and sesame oil added, everything returned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Soy-garlic-ginger chicken and crackling rice (NYT)
- Cook-in-turn wok order with thighs and sesame oil (ATK)
- Carrot and peas to match the photo; chicken to 74 °C, eggs fully set

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/chicken-fried-rice-egg-peas-carrot-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
