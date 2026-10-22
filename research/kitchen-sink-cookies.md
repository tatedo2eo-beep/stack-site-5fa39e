# Research: Kitchen-Sink Cookies
Dish: Kitchen-sink cookie / flavour: Classic. Private file, not published.

## Sources actually opened
- [Compost Cookie (Milk Bar)](https://milkbarstore.com/blogs/recipes/compost-cookie-new) [Tier 1 (locked list): Milk Bar]: Butter-sugar-glucose dough loaded with chocolate and butterscotch chips, oats, ground coffee, crisps and pretzels (salty mix-ins added last, gently); dough chilled at least 1 h and baked from cold. _(curl 200; article text read)_
- [Kitchen Sink Cookies (NYT Cooking)](https://cooking.nytimes.com/recipes/1019313-kitchen-sink-cookies) [Tier 2 (locked list): NYT Cooking]: Large cookies on a chocolate-chip base with nuts or seeds, toffee and other mix-ins. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Magic Formula to Making Kitchen Sink Cookies (America's Test Kitchen)](https://www.americastestkitchen.com/articles/6988-the-magic-formula-to-making-kitchen-sink-cookies) [Tier 1 (locked list): America's Test Kitchen]: One base dough; stir-ins (chips, coconut, nuts) folded in after mixing; chunky toppings like pretzels pressed on top before baking. _(curl 200; article text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Halal mix-ins only; optional instant coffee in place of ground coffee; digestive or graham pieces instead of a separate graham crust; dough balls chilled at least 1 h (as Milk Bar does).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (18). Nutrition worked from USDA FDC (see content/notes/kitchen-sink-cookies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K1 (drop-cookie ratios); 03-K4 (sugar and texture); 03-K7 (crisp/chewy levers); 03-K2 (creaming); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
