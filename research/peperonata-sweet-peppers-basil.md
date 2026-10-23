# Research: Peperonata (Sweet Peppers with Tomato and Basil)
Dish: Peperonata / flavour: Classic. Private file, not published.

## Sources actually opened
- [Peperonata (ATK)](https://www.americastestkitchen.com/recipes/5434-peperonata) [Tier 1 (locked list): America's Test Kitchen]: Red and yellow pepper strips and onion cooked in olive oil with salt until browned at the edges, garlic and chilli flakes added, then drained tomatoes and juice with a herb sprig, covered on low about 15 min; vinegar and parsley to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Peperonata (Serious Eats)](https://www.seriouseats.com/peperonata-bell-pepper-italian-recipe) [Tier 1 (locked list): Serious Eats]: Garlic and onions in olive oil, sliced peppers cooked until softening, pureed tomato and basil sprigs simmered gently until very soft; more oil, salt and a splash of vinegar; sprigs discarded. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Peppers and onion browned in olive oil.
- Tomatoes and basil sprigs, covered on low.
- Distilled white vinegar for the sharp finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/peperonata-sweet-peppers-basil-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
