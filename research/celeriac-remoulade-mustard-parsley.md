# Research: Celeriac Rémoulade with Mustard, Lemon and Parsley
Dish: Celeriac rémoulade / flavour: Classic. Private file, not published.

## Sources actually opened
- [Celeriac Rémoulade (NYT Cooking)](https://cooking.nytimes.com/recipes/12875-celeriac-remoulade) [Tier 2 (locked list): NYT Cooking]: Celeriac trimmed of its knobbly skin and cut into fine julienne, lightly salted, bound with a slightly thinned mustard mayonnaise and parsley. (Its Dijon and wine or sherry vinegar are not used; lemon is one of its listed options.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Celeriac, Celery and Carrot Remoulade (NYT Cooking)](https://cooking.nytimes.com/recipes/1017233-celeriac-celery-and-carrot-remoulade) [Tier 2 (locked list): NYT Cooking]: Grated celeriac salted 30 min and squeezed dry by the handful; dressing of mayonnaise with yoghurt and crème fraîche, lemon and mustard; chives and parsley; better after an hour chilled. (Its Dijon is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Celery Root, Celery, and Apple Slaw (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8860-celery-root-celery-and-apple-slaw) [Tier 1 (locked list): America's Test Kitchen]: Shredded celery root salted (with a little sugar) about 15 min to wilt, then spun dry before dressing with a mustard vinaigrette and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Pork, ham, Dijon mustard, wine or sherry vinegar and vermouth used by some sources are left out (halal): beef, lemon and mustard powder take their place.

## Own cooking judgment
- Trimming and fine julienne; slightly loose mustard mayonnaise (NYT 12875)
- Salted and squeezed dry; mayonnaise lightened with yoghurt; chilled 1 h (NYT 1017233)
- Short salt wilt before dressing (ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 0 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/celeriac-remoulade-mustard-parsley-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt, for wilting -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
