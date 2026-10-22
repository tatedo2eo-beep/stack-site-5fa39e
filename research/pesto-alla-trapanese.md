# Research: Linguine with Pesto alla Trapanese (Almond, Tomato and Basil)
Dish: Pesto alla trapanese / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pesto alla Trapanese (Serious Eats)](https://www.seriouseats.com/pesto-alla-trapanese-sicilian-pesto-with-almonds-and-tomatoes) [Tier 1 (locked list): Serious Eats]: Garlic, toasted blanched almonds and basil crushed; cheese, then peeled and seeded plum tomatoes and oil; two-thirds tossed with linguine off the heat with pasta water. _(WebFetch (curl returned 403); full recipe read)_
- [Pasta with Tomato and Almond Pesto (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4802-pasta-with-tomato-and-almond-pesto-pesto-alla-trapanese) [Tier 1 (locked list): America's Test Kitchen]: Toasted almonds, tomatoes, basil and garlic processed smooth with oil; Parmesan added with the pasta; loosened with cooking water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- 60 g cheese instead of 100 g to keep salt moderate.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pesto-alla-trapanese-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C7 (cutlets); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for pesto; the method rests on the locked-list sources above.
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
