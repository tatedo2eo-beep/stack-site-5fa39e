# Research: Ricotta Ravioli with Butter and Parmesan
Dish: Filled (ravioli, tortellini, agnolotti) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Homemade Ricotta Ravioli (Serious Eats)](https://www.seriouseats.com/fresh-ricotta-ravioli-recipe) [Tier 1 (locked list): Serious Eats]: Ricotta pressed between towels to remove moisture; Parmesan, nutmeg and lemon; sheet rolled to second-thinnest; mounds sealed with water and air pressed out; cut and boiled briefly. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pumpkin Ravioli With Sage Brown Butter (NYT Cooking)](https://cooking.nytimes.com/recipes/1017824-pumpkin-ravioli-with-sage-walnut-pumpkin-butter) [Tier 2 (locked list): NYT Cooking]: Roasted winter squash puréed with nutmeg for the filling; 2 tsp mounds, water-brushed edges, pressed and crimped; boiled until tender; brown butter with sage finished with a splash of pasta water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Homemade Fresh Pasta (Serious Eats)](https://www.seriouseats.com/fresh-egg-pasta) [Tier 1 (locked list): Serious Eats]: Flour well, 2 eggs + 4 yolks per 255 g flour; fork then bench scraper; kneaded to firm, smooth play-dough texture; 30 min rest; rolled through the machine notch by notch. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fresh Egg Pasta (NYT Cooking)](https://cooking.nytimes.com/recipes/1017391-fresh-egg-pasta) [Tier 2 (locked list): NYT Cooking]: 290 g flour, 2 eggs + 3 yolks; rest 30 min-1 h; fold in thirds on the widest setting; stop 1-2 settings before thinnest for ribbons, thinnest for filled pasta; ribbons dusted with flour. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Ricotta pressed 10 min; dough as 04-P10 rolled thin for filled pasta.
- Finished in butter with cooking water (04-P4).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 75 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/ricotta-ravioli-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P10 (fresh egg dough ratio, rest, rolling).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
