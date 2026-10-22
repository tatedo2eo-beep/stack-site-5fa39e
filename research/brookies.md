# Research: Brookies (Brownie and Cookie Bars)
Dish: Brookies / flavour: Classic. Private file, not published.

## Sources actually opened
- [Brookies (NYT Cooking)](https://cooking.nytimes.com/recipes/1022866-brookies) [Tier 2 (locked list): NYT Cooking]: Brownie layer made first in a parchment-lined 23 x 33 cm pan, cookie dough added on top; 175 °C (350 °F). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Brookies (Food Network Kitchen)](https://www.foodnetwork.com/recipes/food-network-kitchen/brookies-12358604) [Tier 2 (locked list): Food Network Kitchen]: Brownie batter spread first, melted-butter cookie dough dolloped on top and swirled; 175 °C (350 °F) 30-35 min until the edges set and a toothpick has a few crumbs; cool about 1 h before cutting. _(WebFetch (curl returned 403); full recipe read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Cookie dough dropped in spoonfuls and pressed into a patchwork over the brownie rather than swirled.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 30 min against the step times.
- Quantities checked against servings (24). Nutrition worked from USDA FDC (see content/notes/brookies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K3 (melted or browned butter); 03-K8 (brownies); 03-K9 (bars); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine sea salt or table salt -> 1.5 g
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
