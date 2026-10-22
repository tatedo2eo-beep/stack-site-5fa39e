# Research: Gingerbread Cookies
Dish: Gingerbread / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gingerbread Cookies (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/gingerbread-cookies-recipe) [Tier 1 (locked list): King Arthur Baking]: Butter melted with brown sugar, molasses, salt and spices, cooled to lukewarm, then egg and flour; dough chilled before rolling. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gingerbread Cookies (Serious Eats)](https://www.seriouseats.com/gingerbread-cookies) [Tier 1 (locked list): Serious Eats]: Soft butter, brown sugar, unsulphured molasses, ginger, cinnamon and other spices creamed together, then flour; rolled and cut. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gingerbread Cookies (NYT Cooking)](https://cooking.nytimes.com/recipes/1015813-gingerbread-cookies) [Tier 2 (locked list): NYT Cooking]: Brown sugar, molasses and fat melted together, then soda, egg and spices with flour; rolled and cut. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Black treacle (or molasses) melted with butter, sugar and spices; rolled 5 mm between baking paper.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 11 min against the step times.
- Quantities checked against servings (30). Nutrition worked from USDA FDC (see content/notes/gingerbread-cookies-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); 03-K12 (cut-out cookies); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine sea salt or table salt -> 4.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
