# Research: Ribollita: Tuscan Bean, Cavolo Nero and Bread Soup
Dish: Ribollita / flavour: Classic. Private file, not published.

## Sources actually opened
- [Ribollita (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15441-ribollita-tuscan-style-vegetable-and-bread-soup) [Tier 1 (locked list): America's Test Kitchen]: Bread toasted dry in the oven; onion, carrot and greens stems softened in olive oil, garlic and chilli flakes; tomatoes, broth, beans and greens simmered; bread stirred in and the soup whisked until it breaks down. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Ribollita (NYT Cooking)](https://cooking.nytimes.com/recipes/1016052-ribollita) [Tier 2 (locked list): NYT Cooking]: Onion, carrot, celery and garlic softened in oil; cannellini beans, tomatoes, stock and herbs simmered; kale stirred in; topped with toasted bread and baked. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Toasted bread whisked into the soup to thicken it (ATK)
- Kale (cavolo nero) and celery in the soffritto (NYT)
- Half stock, half water and no-salt tomatoes to keep salt within 2.5 g

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/ribollita-tuscan-bean-kale-bread-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
