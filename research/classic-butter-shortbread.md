# Research: Classic Butter Shortbread
Dish: Shortbread / flavour: Classic. Private file, not published.

## Sources actually opened
- [Buttery Shortbread (Paul Hollywood)](https://www.paulhollywood.com/post/buttery-shortbread) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: 225 g butter, 110 g caster sugar, 225 g plain flour, 110 g cornflour and a pinch of salt; cut shapes chilled at least 30 min; 170 °C about 20 min until just golden at the edges. _(curl 200; article text read)_
- [Shortbread Cookies (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/shortbread-cookies-recipe) [Tier 1 (locked list): King Arthur Baking]: Salted butter at cool room temperature with icing sugar and vanilla; pressed into a lined pan; 160 °C (325 °F). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Shortbread, 10 Ways (NYT Cooking)](https://cooking.nytimes.com/recipes/1018784-shortbread-10-ways) [Tier 2 (locked list): NYT Cooking]: 250 g flour, 150 g sugar, 226 g cold butter, 3/4 tsp salt pulsed to crumbs and pressed; 160 °C (325 °F); flavour variations on one base. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Very Best Shortbread (Mary Berry, on the publisher's site)](https://thehappyfoodie.co.uk/recipes/the-very-best-shortbread/) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: 225 g flour, 100 g semolina, 225 g butter, 100 g caster sugar rubbed together and pressed into a tin; 160 °C (140 °C fan); demerara on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Cornflour share as in the Hollywood recipe; salt kept to a pinch-1/2 tsp (03-K11).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/classic-butter-shortbread-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); 03-K9 (bars); 03-K11 (shortbread); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
