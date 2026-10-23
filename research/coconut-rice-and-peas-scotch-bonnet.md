# Research: Coconut Rice and Peas with Scotch Bonnet
Dish: Rice and peas / flavour: Classic. Private file, not published.

## Sources actually opened
- [Jamaican Rice and Peas (ATK)](https://www.americastestkitchen.com/recipes/14164-jamaican-rice-and-peas) [Tier 1 (locked list): America's Test Kitchen]: Soaked kidney beans simmered with coconut milk, broth, thyme, scallions, garlic, a whole Scotch bonnet, salt, pepper and allspice; rice and butter added to the measured liquid, covered with foil and lid and cooked on low 20 min, rested 10. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Rice and Peas (NYT Cooking)](https://cooking.nytimes.com/recipes/1026168-rice-and-peas) [Tier 2 (locked list): NYT Cooking]: Kidney beans simmered with water, coconut milk, allspice, onion and thyme until tender; rice and scallions stirred in, a whole Scotch bonnet floated on top, covered and simmered about 15 min, then steamed off the heat 10 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Tinned beans for speed; water rather than stock.
- Whole Scotch bonnet floated on top for scent.
- Foil and lid seal, 10 min rest.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 30 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/coconut-rice-and-peas-scotch-bonnet-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
