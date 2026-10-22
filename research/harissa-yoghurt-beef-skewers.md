# Research: Harissa and Yoghurt Beef Skewers
Dish: Kebabs/skewers / flavour: Harissa. Private file, not published.

## Sources actually opened
- [Beef Tri-Tip Skewers Marinated in Harissa and Yogurt (NYT Cooking)](https://cooking.nytimes.com/recipes/1012518-beef-tri-tip-skewers-marinated-in-harissa-and-yogurt) [Tier 2 (locked list): NYT Cooking]: Harissa whisked with Greek yoghurt and salt; beef marinated 30 min-2 h in the fridge; grilled over medium-high heat, turning. (Its shop-bought harissa is replaced by a homemade spice paste.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Charcoal-Grilled Beef Kebabs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/558-charcoal-grilled-beef-kebabs) [Tier 1 (locked list): America's Test Kitchen]: Oil, garlic, salt and pepper marinade 1-24 h in the fridge; very hot fire; peppers (and pineapple) tossed in oil and grilled alongside; beef turned to brown all sides. (Its pineapple is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Steakhouse Beef Kebabs (Serious Eats)](https://www.seriouseats.com/steakhouse-beef-kebabs-recipe-11744370) [Tier 1 (locked list): Serious Eats]: Sirloin in 4 cm cubes marinated 1-5 h; threaded with red onion in layered pieces; grilled over a hot fire, turning. (Its Worcestershire-soy-Dijon marinade is not used; Dijon contains wine.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Harissa-yoghurt-salt marinade 30 min-2 h (NYT); cubes and very hot grill (ATK, SE); the harissa is my own homemade spice paste so no shop paste is needed; extra harissa as a dip is my choice.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/harissa-yoghurt-beef-skewers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
