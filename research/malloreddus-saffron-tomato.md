# Research: Malloreddus with Saffron Tomato Sauce
Dish: Malloreddus / flavour: Classic. Private file, not published.

## Sources actually opened
- [Malloreddus alla Campidanese (Serious Eats)](https://www.seriouseats.com/malloreddus-alla-campidanese-7091596) [Tier 1 (locked list): Serious Eats]: 300 g fine semolina to 150 ml water with optional saffron; kneaded smooth; shaped on a ridged board; sauce of onion, garlic, chilli, bay and saffron with 794 g whole tomatoes. (Its pork sausage and fortified wine are left out here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fresh Semolina Malloreddus (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12674-fresh-semolina-malloreddus) [Tier 1 (locked list): America's Test Kitchen]: 326 g fine semolina with warm water; very dry at first, kneaded 10-12 min until smooth; rested 30 min; 1 cm ropes cut into nuggets and rolled down fork tines into ridged curls; trays dusted with semolina. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Dough 300 g semolina to 150 ml saffron water (50 %), as in both sources; kneaded 8-10 min and rested 30 min.
- Pork sausage and fortified wine left out (halal); sauce simmered 25-30 min.
- Pasta water 0.8 % with a pecorino finish (04-P1); finished in the sauce (04-P3, 04-P4).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/malloreddus-saffron-tomato-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for eggless semolina hand-shaped pasta; the method rests on the locked-list sources above.
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
