# Research: Pan-Fried Sole with Brown Butter, Lemon and Parsley
Dish: Sole meunière / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fish Meuniere with Browned Butter and Lemon (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/1398-fish-meuniere-with-browned-butter-and-lemon) [Tier 1 (locked list): America's Test Kitchen]: Plates warmed in a 200 °F oven; fillets salted and left 5 min until glistening, then floured; oil plus butter in a nonstick pan, 2 fillets at a time, about 3 min until golden, then flipped until the flesh flakes; butter browned separately 1-1.5 min, lemon juice added, spooned over with parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sole Meunière (NYT Cooking)](https://cooking.nytimes.com/recipes/1018509-sole-meuniere) [Tier 2 (locked list): NYT Cooking]: Fillets seasoned and dredged in flour, excess shaken off; fried in clarified butter in a 12-inch pan, 2-3 min a side, in two batches, kept warm in a low oven; butter heated until golden and poured over; parsley and lemon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sole Meunière (Serious Eats)](https://www.seriouseats.com/sole-meuniere-recipe-5649376) [Tier 1 (locked list): Serious Eats]: Fillets salted and dredged; cooked in batches in clarified butter, presentation side down 3-4 min until well browned, then 30-60 s on the second side until opaque; finished with browned butter, lemon and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sole Meuniere (NYT Cooking)](https://cooking.nytimes.com/recipes/5407-sole-meuniere) [Tier 2 (locked list): NYT Cooking]: Sole dipped in milk, coated in seasoned flour and sautéed in butter about 3 min a side; lemon juice stirred into the pan and spooned over; parsley. (A lighter version without browned butter.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Fillets salted and left 5 min, then dusted in flour with the excess shaken off (ATK 1398; NYT 1018509; SE); fried in two batches in a large pan in oil plus butter (ATK) until golden, then briefly on the second side until opaque (all); kept warm on warmed plates in a low oven (ATK, NYT 1018509); butter browned separately, lemon added off the heat and spooned over with parsley (ATK; NYT 1018509; SE). Charred lemon halves are my own garnish. Oil-plus-butter is used instead of clarified butter so home cooks need no extra step.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pan-fried-sole-brown-butter-lemon-parsley-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
