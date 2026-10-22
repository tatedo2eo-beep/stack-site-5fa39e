# Research: Pho Bo: Vietnamese Beef and Rice Noodle Soup
Dish: Pho / flavour: Classic. Private file, not published.

## Sources actually opened
- [Beef Pho (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13288-beef-pho) [Tier 1 (locked list): America's Test Kitchen]: Beef shanks simmered about 3 hours with onions, ginger, garlic, star anise, peppercorns, coriander, cinnamon and cloves; eye round frozen until firm and sliced thin; broth strained through cheesecloth and seasoned with fish sauce, sugar and salt; rice noodles, beef and herbs in bowls. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Food Lab's Beef Pho (Serious Eats)](https://www.seriouseats.com/traditional-beef-pho-recipe) [Tier 1 (locked list): Serious Eats]: Onions and ginger charred; beef bones and cuts blanched and rinsed for a clear broth, then simmered with whole spices, fish sauce and sugar; served over rice noodles with thinly sliced beef, herbs, bean sprouts, lime and chilli. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Shank broth with whole spices and frozen-then-sliced eye round (ATK)
- Charred onion and ginger, and a blanch-and-rinse for clarity (SE)
- Sliced beef dipped in boiling broth until no pink remains
- Lighter seasoning to keep salt within 2.5 g per serving

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 200 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/pho-bo-vietnamese-beef-noodle-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
