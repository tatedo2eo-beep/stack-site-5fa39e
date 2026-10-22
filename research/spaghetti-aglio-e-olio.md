# Research: Spaghetti Aglio e Olio (Garlic, Olive Oil and Chilli)
Dish: Aglio e olio / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pasta Aglio, Olio e Peperoncino (NYT Cooking)](https://cooking.nytimes.com/recipes/1017306-pasta-aglio-olio-e-peperoncino) [Tier 2 (locked list): NYT Cooking]: Garlic and chilli cooked in oil until golden; 120 ml pasta water reduced by half in the oil; pasta finished in it with more water until the sauce thickens. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta with Garlic and Oil (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/308-pasta-with-garlic-and-oil-aglio-e-olio) [Tier 1 (locked list): America's Test Kitchen]: Garlic cooked slowly over low heat until straw-coloured; pasta water and lemon juice added; extra oil tossed through. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given.

## Own cooking judgment
- Pasta water reduced in the oil before the pasta goes in (04-P4).
- Water at the 1 % default because there is no cheese.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spaghetti-aglio-e-olio-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
