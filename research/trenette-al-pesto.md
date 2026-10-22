# Research: Trenette al Pesto with Potatoes and Green Beans
Dish: Trenette al pesto / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pesto Pasta With Potatoes and Green Beans (Serious Eats)](https://www.seriouseats.com/pesto-pasta-potatoes-green-beans-recipe) [Tier 1 (locked list): Serious Eats]: Pasta, cubed potato and green beans boiled in the same pot; tossed with pesto and 60 ml pasta water to a creamy sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta, Green Beans and Potatoes With Pesto (NYT Cooking)](https://cooking.nytimes.com/recipes/6078-pasta-green-beans-and-potatoes-with-pesto) [Tier 2 (locked list): NYT Cooking]: Potatoes boiled first, green beans added 5 min later, then the pasta; all drained together into the pesto. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Pesto alla Genovese (Serious Eats)](https://www.seriouseats.com/best-pesto-recipe) [Tier 1 (locked list): Serious Eats]: Garlic pounded to paste, then pine nuts, then basil a handful at a time with coarse salt as an abrasive; Parmigiano and pecorino; oil worked in last to an emulsified sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Potato in 4 min ahead of the beans and pasta, as in NYT.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/trenette-al-pesto-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C7 (cutlets); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for pesto; the method rests on the locked-list sources above.
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
