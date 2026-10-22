# Research: Italian-Style Pasta Salad with Mozzarella, Olives and Peppers
Dish: Pasta salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pasta Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1023328-pasta-salad) [Tier 2 (locked list): NYT Cooking]: Short pasta cooked a little past al dente, dressed while warm with an oregano-garlic vinaigrette so it absorbs flavour; tomatoes, mozzarella and olives folded in; seasoning checked once cold. (Its salami and wine vinegar are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Italian Pasta Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11198-italian-pasta-salad) [Tier 1 (locked list): America's Test Kitchen]: Pasta cooked past al dente, rinsed under cold water and dried so it stays tender cold; a punchy garlic-oil dressing; vegetables, cheese and herbs tossed in; keeps about 3 days. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta Salad with Fresh Tomatoes and Basil (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/727-pasta-salad-with-fresh-tomatoes-and-basil) [Tier 1 (locked list): America's Test Kitchen]: Ripe cherry tomatoes and plenty of fresh basil tossed with cooled short pasta and a simple oil-acid dressing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Salami, wine vinegar and Dijon mustard used by some sources are left out (halal): cider vinegar, lemon and mustard powder take their place.

## Own cooking judgment
- Pasta cooked past al dente and dressed while warm (NYT, ATK 11198)
- Brief cold rinse and well-drained pasta (ATK 11198)
- Tomatoes, mozzarella, olives and basil (NYT, ATK 727); salami left out

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 12 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/italian-style-pasta-salad-mozzarella-olives-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
