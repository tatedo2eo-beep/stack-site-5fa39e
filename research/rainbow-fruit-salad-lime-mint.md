# Research: Rainbow Fruit Salad with Lime and Mint
Dish: Fruit salad / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fruit Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/1024369-fruit-salad) [Tier 2 (locked list): NYT Cooking]: Lime zest rubbed into sugar to release its oils, then lime juice; mixed fruit tossed and rested a few minutes so juices mingle. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Minty Fruit Salad (NYT Cooking)](https://cooking.nytimes.com/recipes/12558-minty-fruit-salad) [Tier 2 (locked list): NYT Cooking]: Fresh fruit with citrus juice, a little honey and shredded mint. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Honeydew, Raspberry and Nectarine Salad (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4211-honeydew-raspberry-and-nectarine-salad) [Tier 1 (locked list): America's Test Kitchen]: Light mint-infused syrup tossed with mixed fruit shortly before serving. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Salami, wine vinegar and Dijon mustard used by some sources are left out: cider vinegar, lemon and mustard powder take their place.

## Own cooking judgment
- Lime zest rubbed into sugar, then lime juice (NYT 1024369)
- Shredded mint through the fruit (NYT 12558, ATK)
- Short rest so the juices mingle (NYT, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/rainbow-fruit-salad-lime-mint-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
