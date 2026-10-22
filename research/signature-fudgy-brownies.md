# Research: Signature Fudgy Brownies
Dish: Brownie (fudgy or cakey) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Glossy Fudge Brownies (Serious Eats)](https://www.seriouseats.com/bravetart-glossy-fudge-brownies) [Tier 1 (locked list): Serious Eats]: Eggs, sugar and salt whipped until very thick before the warm chocolate-butter goes in, for the shiny, crackly top; 180 °C in a light metal pan; cooled completely before cutting. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [A Guide to Making Brownies (America's Test Kitchen)](https://www.americastestkitchen.com/articles/665-a-guide-to-making-brownies) [Tier 1 (locked list): America's Test Kitchen]: Toothpick with a few moist crumbs = done; granulated sugar gives the shiny crust, brown sugar a matte one; glass pans bake drier. _(curl 200; article text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in batch 1 before the research rule. Re-sourced on 22 Oct: whipped eggs and sugar for the crackly top, metal tin, moist-crumb doneness and full cooling all match Serious Eats and ATK (03-K8).

## Own cooking judgment
- Melted (not browned) butter and a shorter 3-4 min whip in a 20 cm tin; 22-26 min to moist crumbs.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 25 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/signature-fudgy-brownies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K3 (melted or browned butter); 03-K5 (resting and chilling); 03-K8 (brownies); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3.0 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
