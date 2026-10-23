# Research: Creamy Two-Cabbage Coleslaw
Dish: Coleslaw / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basic Creamy Coleslaw (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4757-basic-creamy-coleslaw) [Tier 1 (locked list): America's Test Kitchen]: Shredded cabbage, carrot and grated onion tossed with salt in a colander and left about 1 h to wilt, rinsed and dried; mayonnaise, sour cream, vinegar, sugar and pepper dressing; chilled at least 30 min; keeps 2 days. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Creamy Coleslaw (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11262-creamy-coleslaw) [Tier 1 (locked list): America's Test Kitchen]: Cabbage sliced thin, carrot and onion shredded, salted in a colander 1-4 h; rinsed, pressed but not squeezed and blotted dry; tossed with mayonnaise-sour cream dressing and chilled about 30 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Coleslaw (NYT Cooking)](https://cooking.nytimes.com/recipes/1023278-coleslaw) [Tier 2 (locked list): NYT Cooking]: Mayonnaise, cider vinegar, sugar and celery seeds mixed in a very large bowl; green and purple cabbage thinly sliced, grated carrot added and tossed by hand; served at once or chilled. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Worcestershire sauce, Dijon mustard, wine vinegar and raw or coddled egg yolk used by some sources are left out (and food safety): a mayonnaise base and mustard powder take their place.

## Own cooking judgment
- Cabbage, carrot and grated onion salted in a colander about 1 h, rinsed and dried (ATK both)
- Mayonnaise-sour cream-vinegar-sugar dressing, chilled 30 min (ATK)
- Green and purple cabbage with celery seeds and cider vinegar (NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/creamy-two-cabbage-coleslaw-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt, for wilting (most is rinsed off) -> 9 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
