# Research: Saffron Layered Chicken Biryani with Golden Onions and Boiled Eggs
Dish: Biryani / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chicken Biryani (NYT Cooking)](https://cooking.nytimes.com/recipes/1024645-chicken-biryani) [Tier 2 (locked list): NYT Cooking]: Drumsticks marinated in yoghurt, garlic, ginger, lemon, garam masala, Kashmiri chilli and turmeric; onions fried golden; whole spices; parboiled basmati layered with saffron milk, ghee, mint and coriander and steamed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Biryani (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12143-chicken-biryani) [Tier 1 (locked list): America's Test Kitchen]: Onions browned in butter; basmati boiled with cinnamon and cumin; chicken thighs cooked with ginger, garam masala and garlic, yoghurt stirred in; rice layered over with saffron water and steamed; mint and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Yoghurt-spice marinade and layered dum method (NYT)
- Bone-in thigh and drumstick mix, golden onions and saffron (NYT, ATK)
- Boiled eggs to match the photo; rosewater left out

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 95 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/saffron-layered-chicken-biryani-golden-onions-eggs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
