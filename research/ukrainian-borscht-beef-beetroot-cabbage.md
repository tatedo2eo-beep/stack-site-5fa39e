# Research: Ukrainian Borscht with Beef, Beetroot and Cabbage
Dish: Borscht / flavour: Classic. Private file, not published.

## Sources actually opened
- [Hot Ukrainian Borscht (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15321-hot-ukrainian-borscht) [Tier 1 (locked list): America's Test Kitchen]: Meat simmered about 2 hours with onion, carrot and bay to make the broth and cut into pieces; potatoes and cabbage simmered in the broth; onion, shredded beets and carrots softened in a skillet, tomato paste toasted, loosened with reserved broth and stirred in with dill and lemon juice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hot Ukrainian Borscht (Serious Eats)](https://www.seriouseats.com/hot-borscht-beet-meat-soup-recipe) [Tier 1 (locked list): Serious Eats]: Beef-based broth with aromatics; a large mix of diced vegetables including beets, cabbage, tomatoes and potatoes simmered in it; finished with sour cream and fresh dill. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the soups chapter. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Two-stage method: meat broth, then a skillet-softened beet base (ATK)
- Beef in place of pork for a version, as in the beef-based broth (SE)
- Lemon juice rather than vinegar; soured cream and dill to serve (SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 150 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/ukrainian-borscht-beef-beetroot-cabbage-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
