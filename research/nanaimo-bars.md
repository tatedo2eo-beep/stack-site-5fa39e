# Research: Nanaimo Bars
Dish: Nanaimo bar / flavour: Classic. Private file, not published.

## Sources actually opened
- [Nanaimo Bars (NYT Cooking)](https://cooking.nytimes.com/recipes/1020098-nanaimo-bars) [Tier 2 (locked list): NYT Cooking]: No-bake base: butter, sugar, cocoa and egg heated over a double boiler until thick, then crumbs, coconut and nuts; custard buttercream; chocolate top; 20 cm metal pan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Nanaimo Bars (Serious Eats)](https://www.seriouseats.com/best-nanaimo-bars-recipe-8671193) [Tier 1 (locked list): Serious Eats]: Graham crumbs, coconut and walnuts with a cooked butter-cocoa binder; three layers chilled until firm in a 20 cm pan. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Nanaimo Bars (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/nanaimo-bars-recipe) [Tier 1 (locked list): King Arthur Baking]: Base of butter, sugar, cocoa, egg, coconut and crumbs; KA bakes the base briefly at 175 °C; custard layer and chocolate top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Base cooked over simmering water to 71 °C because it contains raw egg (food safety; NYT also cooks it until thick).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 10 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/nanaimo-bars-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); 03-K9 (bars).
- No changes needed.
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
