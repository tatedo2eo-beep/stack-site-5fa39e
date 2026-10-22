# Research: Oklahoma Onion Burger
Dish: Oklahoma onion burger / flavour: Classic. Private file, not published.

## Sources actually opened
- [Oklahoma-Style Onion Burgers Recipe (Serious Eats)](https://www.seriouseats.com/oklahoma-onion-burger-recipe) [Tier 1 (locked list): Serious Eats]: Paper-thin onion pressed into the patty during the smash; onion cooks underneath after flip. _(opened)_
- [Classic Smashed Burgers Recipe (Serious Eats)](https://www.seriouseats.com/classic-smashed-burgers-recipe) [Tier 1 (locked list): Serious Eats]: Smash once, early, on a very hot pan; scrape under the crust to flip. _(opened)_
- [Smashed Burgers (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12825-smashed-burgers) [Tier 1 (locked list): America's Test Kitchen]: Loose 2-oz balls, not compressed; cast-iron or carbon steel heated until smoking; smash firmly once; cook ~2 min until three-quarters no longer pink on top, scrape and flip, 15 s more; cheese between stacked patties; finer commercial mince sticks and holds together. _(read via search extract; curl 200)_
- [Fried onion burger (Wikipedia)](https://en.wikipedia.org/wiki/Fried_onion_burger) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: History (El Reno, 1920s); buns steamed on the patty; yellow mustard and pickles; American cheese common. _(opened)_
- [The Ultimate Smash Burger: Griddle Temps for the Perfect Crust (ThermoWorks)](https://www.thermoworks.com/blogs/thermoblog/smash-burgers-at-home) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Surface 232 °C+ for crust; pull at 71 °C; thermometer works even on thin patties. _(opened)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- 35-40 g onion per ball; salting onions first; toasting the bottom bun but steaming the top (compromise between tradition and Joe's toasted-bun rule).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/oklahoma-onion-burger-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 01-B1 (fat); 01-B2 (when to salt); 01-B3 (how much salt); 01-B5 (pan heat); 01-B8 (71 °C); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
