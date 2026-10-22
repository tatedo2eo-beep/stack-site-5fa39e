# Research: Pappardelle with Slow-Braised Beef Ragù
Dish: Pappardelle / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pappardelle With Beef Ragu (NYT Cooking)](https://cooking.nytimes.com/recipes/12112-jamie-olivers-pappardelle-with-beef-ragu) [Tier 2 (locked list): NYT Cooking]: Beef chuck in 5 cm cubes browned; rosemary and sage, onion, garlic, carrot and celery; tomatoes; covered in a 135 °C oven 3-3½ h until it falls apart; finished with butter, orange zest and Parmigiano. (Its red wine is replaced with water here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Beef Short Rib Ragu (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9902-beef-short-rib-ragu) [Tier 1 (locked list): America's Test Kitchen]: Tomato paste cooked until it darkens and forms a fond; boneless beef braised in a 175 °C oven until tender, shredded and returned to the reduced sauce. (Its wine and anchovy are not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Chuck browned in batches; braised covered at 160 °C (140 °C fan) 3-3½ h until it falls apart, then shredded.
- Wine replaced by water; tomato purée cooked until it darkens for depth.
- Butter, Parmesan and orange zest finish from the NYT method; braised beef far above 71 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 225 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/pappardelle-beef-ragu-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P10 (fresh egg dough ratio, rest, rolling); 04-P8 (long gentle braise for ragù; wine omitted for halal); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
