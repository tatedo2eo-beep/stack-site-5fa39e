# Research: Classic Apple Tarte Tatin
Dish: Tarte Tatin / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tarte Tatin (ATK)](https://www.americastestkitchen.com/recipes/1281-tarte-tatin) [Tier 1 (locked list): America's Test Kitchen]: Processor pastry with icing sugar and egg; butter and sugar in a skillet with quartered Granny Smith apples cooked on high until amber, turned and boiled again, topped with pastry, baked at about 190 °C and inverted. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tarte Tatin (Serious Eats)](https://www.seriouseats.com/tarte-tatin-recipe-11844901) [Tier 1 (locked list): Serious Eats]: Apples blanched; caramel of sugar with butter and vanilla in a 25 cm skillet, apples packed in, topped with docked puff pastry, baked at 205 °C, rested and inverted. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Egg-bound sweet pastry, chilled.
- Butter-and-sugar caramel cooked with apple quarters to deep amber, apples turned.
- Pastry on top, 190 °C, rested 10 min, turned out.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 45 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/classic-apple-tarte-tatin-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
