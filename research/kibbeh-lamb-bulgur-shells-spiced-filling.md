# Research: Fried Kibbeh with Spiced Lamb Filling
Dish: Kibbeh / flavour: Classic. Private file, not published.

## Sources actually opened
- [Kibbeh (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13747-kibbeh) [Tier 1 (locked list): America's Test Kitchen]: Soaked bulgur processed with lamb, onion, cinnamon; lamb, onion, pine nut, allspice and pomegranate molasses filling; 16 torpedoes fried in shallow oil. _(curl 200; JSON-LD recipe read)_
- [Kibbeh Maqlieh (NYT Cooking)](https://cooking.nytimes.com/recipes/771354456-kibbeh-maqlieh-fried-meat-and-bulgur-patties) [Tier 2 (locked list): NYT Cooking]: Fine bulgur squeezed dry, lean beef or lamb pulsed with onion, spices and ice; hollowed shells, cooked spiced filling (nuts optional); fried. _(curl 200; JSON-LD recipe read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Fine bulgur; no pine nuts (matches the photo, nut-free); shell and filling to 71 °C; deep-fried at 180 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 40 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/kibbeh-lamb-bulgur-shells-spiced-filling-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
