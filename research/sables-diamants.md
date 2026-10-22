# Research: Sablés Diamants (French Butter Cookies)
Dish: Diamant / flavour: Classic. Private file, not published.

## Sources actually opened
- [French Sablé Cookies (Serious Eats)](https://www.seriouseats.com/sable-cookies-recipe-8763545) [Tier 1 (locked list): Serious Eats]: Flour, icing sugar, almond flour and salt with butter tossed in by hand for a sandy, short texture. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sables (NYT Cooking)](https://cooking.nytimes.com/recipes/5508-sables) [Tier 2 (locked list): NYT Cooking]: Egg yolks, butter, lemon zest, sugar, sifted flour and salt; short, crumbly slice-style biscuit. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Slice-and-bake logs rolled in demerara (the diamant finish); minimal creaming for a sandy texture.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 17 min against the step times.
- Quantities checked against servings (40). Nutrition worked from USDA FDC (see content/notes/sables-diamants-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); 03-K11 (shortbread); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.6 tsp fine sea salt or table salt -> 3.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
