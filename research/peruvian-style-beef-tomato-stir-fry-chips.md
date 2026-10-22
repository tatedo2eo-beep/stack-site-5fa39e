# Research: Peruvian-Style Beef and Tomato Stir-Fry with Chips and Rice
Dish: Lomo saltado / flavour: Classic. Private file, not published.

## Sources actually opened
- [Lomo Saltado (NYT Cooking)](https://cooking.nytimes.com/recipes/9183-lomo-saltado) [Tier 2 (locked list): NYT Cooking]: Potatoes fried separately; beef strips seared quickly over high heat with peppers; onions and tomatoes sautéed with soy; everything tossed together and served with rice. Balsamic vinegar not used. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lomo Saltado (Tomato Beef Stir-Fry) (NYT Cooking)](https://cooking.nytimes.com/recipes/1024484-lomo-saltado-tomato-beef-stir-fry) [Tier 2 (locked list): NYT Cooking]: Beef seared in batches in a smoking pan; onion then pepper cooked briefly and kept crisp; tomatoes, garlic, soy, lime juice and chilli paste; served over chips with coriander and rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Lomo Saltado (Peruvian Beef Stir-Fry) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17546-lomo-saltado-peruvian-beef-stir-fry) [Tier 1 (locked list): America's Test Kitchen]: Very hot wok, beef in two batches left to brown before stirring; onion and garlic; sauce reduced until it coats; tomatoes and chillies added off heat; chips folded in. Oyster sauce and white wine vinegar not used. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Beef seared in batches in a smoking wok (NYT 1024484, ATK); onion and pepper kept crisp (NYT 1024484); soy and lime sauce with tomatoes added at the end (NYT 1024484, NYT 9183); served over chips with rice (all three). Oven chips instead of deep-frying; cider vinegar instead of balsamic or wine vinegar; yellow pepper and chilli for ají amarillo.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 45 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/peruvian-style-beef-tomato-stir-fry-chips-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
