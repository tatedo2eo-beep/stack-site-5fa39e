# Research: Brown-Butter Chocolate Chip Cookies
Dish: Brown-butter chocolate chip cookie / flavour: Classic. Private file, not published.

## Sources actually opened
- [The Food Lab's Chocolate Chip Cookies (Serious Eats)](https://www.seriouseats.com/the-food-lab-best-chocolate-chip-cookie-recipe) [Tier 1 (locked list): Serious Eats]: Brown butter cooled with an ice cube to replace lost water; mix of sugars; dough rested overnight (up to 3 days) for flavour and less spread; pulled while the centres look soft. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Brown Butter Chocolate Chip Cookies (NYT Cooking)](https://cooking.nytimes.com/recipes/1024108-brown-butter-chocolate-chip-cookies) [Tier 2 (locked list): NYT Cooking]: Butter browned until it foams and smells nutty, then cooled; brown sugar heavy; dough chilled 1-24 h; pan banged on removal for ripples. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Rest at least 1 h, best 24 h (03-K5).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 13 min against the step times.
- Quantities checked against servings (24). Nutrition worked from USDA FDC (see content/notes/brown-butter-chocolate-chip-cookies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K1 (drop-cookie ratios); 03-K4 (sugar and texture); 03-K7 (crisp/chewy levers); 03-K2 (creaming); 03-K3 (melted or browned butter); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine sea salt or table salt -> 4.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
