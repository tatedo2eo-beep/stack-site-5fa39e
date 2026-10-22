# Research: Cod Baked in Parchment with Summer Vegetables, Lemon and Dill
Dish: En papillote / flavour: Classic. Private file, not published.

## Sources actually opened
- [Salmon en Papillote (NYT Cooking)](https://cooking.nytimes.com/recipes/1019057-salmon-en-papillote-salmon-in-parchment) [Tier 2 (locked list): NYT Cooking]: Heart-shaped parchment, fish with garnishes on one half, folded and the curved edge crimped tightly; baked at 400 °F for 10-15 min until the packages puff. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cod Papillote (NYT Cooking)](https://cooking.nytimes.com/recipes/4222-cod-papillote) [Tier 2 (locked list): NYT Cooking]: Parchment cut into hearts; cod laid on greens with butter, cooked onion, lemon juice and salt; edges folded over several times to seal; baked at 425 °F. (Its Madeira is not used, nor the clam.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Baked Fish en Papillotte (NYT Cooking)](https://cooking.nytimes.com/recipes/3592-baked-fish-en-papillotte) [Tier 2 (locked list): NYT Cooking]: Fillet on oiled parchment with lemon rind, capers and pepper; edges crimped into a tight seal; baked at 450 °F for 10 min; opened at the table. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Parchment-Steamed Fish With Buttered Radishes (NYT Cooking)](https://cooking.nytimes.com/recipes/777045284-parchment-steamed-fish-with-buttered-radishes) [Tier 2 (locked list): NYT Cooking]: Fillets salted on parchment with scallions, garlic and chilli, radishes dotted with butter and olive oil; parcels folded and twisted closed; baked at 350 °F until the fish is flaky and opaque at the centre. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Heart-shaped parchment folded in half, fish on one side and the edge folded and crimped tightly (NYT 1019057; NYT 4222; NYT 3592); fish laid on vegetables with butter, lemon and salt (NYT 4222; NYT 777045284 butter and aromatics); hot oven, about 10-15 min until puffed (NYT 1019057 400 °F; NYT 3592 450 °F); opened at the table (NYT 3592). The matchstick carrot and courgette, cherry tomatoes and dill are my own combination; a thermometer pushed through the paper confirms 63 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 16 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/cod-baked-in-parchment-vegetables-lemon-dill-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
