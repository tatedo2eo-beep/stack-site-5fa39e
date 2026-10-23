# Research: Apple, Grape and Walnut Waldorf Salad
Dish: Waldorf / flavour: Classic. Private file, not published.

## Sources actually opened
- [Waldorf Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1024821-waldorf-salad) [Tier 2 (locked list): NYT Cooking]: Mayonnaise, lemon juice, honey, salt and pepper whisked; diced apples, halved red grapes, sliced celery, toasted nuts and parsley tossed in; garnished with parsley and celery leaves; keeps 24 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Waldorf Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4702-waldorf-salad) [Tier 1 (locked list): America's Test Kitchen]: Mayonnaise, vinegar and honey dressing; tart and sweet apples mixed, celery and toasted walnuts added; chilled 30 min before seasoning and serving. (Its raisins are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Waldorf Salad (Serious Eats)](https://www.seriouseats.com/waldorf-salad-recipe-8748968) [Tier 1 (locked list): Serious Eats]: Dressing of yogurt or sour cream with mayonnaise and chives; grapes, toasted walnuts, celery and apples combined and garnished with celery leaves. (Its pickled-apple step is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Worcestershire sauce, Dijon mustard, wine vinegar and raw or coddled egg yolk used by some sources are left out (for food safety): a mayonnaise base and mustard powder take their place.

## Own cooking judgment
- Mayonnaise-lemon-honey dressing with apples, red grapes, celery, toasted nuts and parsley (NYT)
- Mix of tart and sweet apples, chilled 30 min (ATK)
- Yoghurt lightening the mayonnaise, celery leaves to garnish (SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 5 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/apple-grape-walnut-waldorf-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- honey: 1 tsp → 7 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
