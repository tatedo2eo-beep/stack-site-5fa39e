# Research: Dry-Spiced Aloo Gobi with Cumin and Tomato
Dish: Aloo gobi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Aloo Gobi (NYT Cooking)](https://cooking.nytimes.com/recipes/1024646-aloo-gobi) [Tier 2 (locked list): NYT Cooking]: Potatoes and cauliflower browned separately in oil, cumin seeds toasted, onion and green chile softened, garlic, ginger and turmeric added, then tomatoes, garam masala, coriander, cumin and Kashmiri chile; vegetables returned and cooked covered; finished with amchur or lemon juice and cilantro. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Aloo Gobi (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16491-aloo-gobi) [Tier 1 (locked list): America's Test Kitchen]: Potatoes then cauliflower browned in oil and set aside; cumin seeds and onion, then serrano, garlic, ginger, coriander, amchoor, turmeric and Kashmiri chile; vegetables returned with water and simmered covered 15-18 minutes until absorbed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Aloo Gobi (Serious Eats)](https://www.seriouseats.com/aloo-gobi-recipe-5220973) [Tier 1 (locked list): Serious Eats]: Potatoes parboiled and cauliflower fried separately before being tossed with a cumin, onion, ginger, garlic, green chile, turmeric, fenugreek and tomato masala and cilantro. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Brown potatoes and cauliflower separately, then steam in the masala (NYT/ATK method)
- Lemon juice in place of amchur
- Uncovered finish to dry and lightly crisp

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/dry-spiced-aloo-gobi-cumin-tomato-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
