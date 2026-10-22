# Research: Diner-Style American Cheeseburger
Dish: Cheeseburger / flavour: American. Private file, not published.

## Sources actually opened
- [Salting Ground Beef (The Burger Lab, Serious Eats)](https://www.seriouseats.com/the-burger-lab-salting-ground-beef) [Tier 1 (locked list): Serious Eats]: Salt mixed into mince early gives a springy, sausage-like texture; salt the outside just before cooking. _(read via search extract)_
- [When to Salt Burgers (America's Test Kitchen)](https://www.americastestkitchen.com/how_tos/6586-when-to-salt-burgers) [Tier 1 (locked list): America's Test Kitchen]: Confirms: season the surface immediately before cooking (myosin gel explanation). _(read via search extract)_
- [This 2-Second Burger Trick Prevents That Annoying Dome in the Middle (Serious Eats)](https://www.seriouseats.com/flat-burger-cooking-prep-tip-12128439) [Tier 1 (locked list): Serious Eats]: Shape patty ~1 cm wider than bun; shallow 6 mm dimple; do not press with spatula. _(read via search extract)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- Two slices per patty; diner sauce proportions.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/american-cheeseburger-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 01-B1 (fat); 01-B2 (when to salt); 01-B3 (how much salt); 01-B5 (pan heat); 01-B8 (71 °C); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.8 tsp fine salt -> 5 g
- Patty salt raised from 4.5 g to 4.8 g (0.8% of beef, the low end because of the American cheese) per 01-B3; nutrition rebuilt
- Salt given in grams (06-G1): 0.4 tsp fine salt -> 2.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).

## Salt re-check
Re-checked 22 Oct: salt = sodium x 2.5 from the USDA rows in the nutrition note, no double counting (brine, rub and pasta-water salt are counted only for the share absorbed). Patty salt already at the 01-B3 floor (0.8 % of the beef, the figure the knowledge file gives for American cheese plus pickles). Most sodium came from processed cheese and the bun, so cheese cut from 2 slices to 1 per burger (matches the photo). 4.54 -> 3.71 g per serving. Still high: processed cheese and bun.
