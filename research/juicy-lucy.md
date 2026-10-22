# Research: Juicy Lucy (Cheese-Stuffed Burger)
Dish: Juicy Lucy (stuffed) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Juicy Lucy Recipe (The Kitchn)](https://www.thekitchn.com/juicy-lucy-burgers-recipe-23185957) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Two thin patties, cheese folded small with ~1 cm border, pinch-seal and cup edges; cook over MEDIUM so cheese melts while crust browns. _(read via search extract; curl from box got 403 bot-block, page returned by search)_
- [Juicy Lucy Recipe (Serious Eats)](https://www.seriouseats.com/juicy-lucy-cheeseburger-recipe-8681601) [Tier 1 (locked list): Serious Eats]: Seal tightly; chill 15 min to firm; rest at least 5 min because the molten cheese scalds; avoid probing into the cheese. _(read via search extract)_
- [Jucy Lucy Burgers (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3785-jucy-lucy-burgers) [Tier 1 (locked list): America's Test Kitchen]: Medium heat cooks through and melts the cheese without bursting. _(read via search extract)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- 85 g discs, 2 American slices folded; check the meat (not the cheese) at 71 °C from the side.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/juicy-lucy-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 01-B1 (fat); 01-B2 (when to salt); 01-B3 (how much salt); 01-B5 (pan heat); 01-B8 (71 °C).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.9 tsp fine salt -> 5.5 g
- Patty salt raised from 4.5 g to 5.5 g (0.81% of beef) per 01-B3; nutrition rebuilt
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
