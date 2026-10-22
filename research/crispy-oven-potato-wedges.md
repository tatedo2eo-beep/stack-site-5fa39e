# Research: Crispy Oven-Baked Potato Wedges
Dish: Wedges / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crispy Baked Potato Wedges (Serious Eats)](https://www.seriouseats.com/potato-wedges-recipe-5217319) [Tier 1 (locked list): Serious Eats]: 230 °C oven, oiled tray on the lower rack; wedges parboiled about 7 min in salted water with bicarbonate until barely tender; tossed to rough up; roasted cut side down and flipped. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crunchy Potato Wedges (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3366-crunchy-potato-wedges) [Tier 1 (locked list): America's Test Kitchen]: Seasoned wedges pre-cooked until just tender and cooled to firm up before the final crisping (its buttermilk-and-flour fried coating is not used here). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Potato Wedges (NYT Cooking)](https://cooking.nytimes.com/recipes/1026629-potato-wedges) [Tier 2 (locked list): NYT Cooking]: Wedges soaked to remove starch, dried, tossed with oil, garlic, paprika and onion powder; roasted spaced apart on two trays and turned. (Its Parmesan is not used in the classic here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Alkaline parboil (SE) plus the paprika and garlic seasoning (NYT); no cheese.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crispy-oven-potato-wedges-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
