# Research: Oven-Baked Sweet Potato Fries
Dish: Sweet-potato fries / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crispy Oven-Baked Sweet Potato Fries (Serious Eats)](https://www.seriouseats.com/baked-sweet-potato-fries-recipe-11839467) [Tier 1 (locked list): Serious Eats]: Oiled tray on the lowest rack at 220 °C; sticks coated in a cornflour-and-rice-flour slurry; spiced with paprika, garlic powder and cayenne. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sweet Potato Fries (NYT Cooking)](https://cooking.nytimes.com/recipes/1014647-sweet-potato-fries) [Tier 2 (locked list): NYT Cooking]: Sticks tossed with oil, garlic powder, paprika, salt and pepper; two trays at 200 °C; about 15 min, flipped, about 10 min more. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crispy Sweet Potato Fries (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4279-crispy-sweet-potato-fries) [Tier 1 (locked list): America's Test Kitchen]: Sticks dipped in a cornflour batter and fried at 190 °C; tossed with chilli powder, garlic powder and cayenne (context: shows the starch coating for crispness). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Dry cornflour toss instead of a slurry (simpler); 220 °C, two trays, flip and swap.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/oven-baked-sweet-potato-fries-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
