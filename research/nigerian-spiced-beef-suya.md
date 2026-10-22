# Research: Nigerian Spiced Peanut Beef Skewers
Dish: Suya / flavour: Classic. Private file, not published.

## Sources actually opened
- [Beef Suya (Nigerian Spice-Rubbed Grilled Beef Skewers) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17060-beef-suya) [Tier 1 (locked list): America's Test Kitchen]: Yaji of ground peanuts, ginger, garlic, onion, smoked paprika, cayenne and white pepper; meat with oil and salt 30 min-24 h; woven flat on skewers; 2-4 min a side; onion, cabbage, tomato and cucumber. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Beef Suya (NYT Cooking)](https://cooking.nytimes.com/recipes/1020289-beef-suya) [Tier 2 (locked list): NYT Cooking]: Thin beef strips with peanut oil, suya spice, ginger and garlic, marinated 4-12 h; grilled 3-4 min a side; tomato, onion and lime; peanuts. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the meat chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Whole cuts cooked to at least 63 °C plus rest and ground meat to 71 °C (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Homemade yaji, oil-salt marinade 30 min+, slices woven flat onto skewers, 2-4 min a side (ATK); thin slices and lime (NYT); cooked to 63 °C plus a rest; freezing 20 min to slice thin is my tip.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/nigerian-spiced-beef-suya-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
