# Research: Spiced Hot Cross Buns with Raisins and Orange Peel
Dish: Hot cross buns / flavour: Classic. Private file, not published.

## Sources actually opened
- [Hot Cross Buns (NYT Cooking)](https://cooking.nytimes.com/recipes/1023097-hot-cross-buns) [Tier 2 (locked list): NYT Cooking]: Bread flour with cinnamon, ginger and cardamom, raisins and candied orange peel; flour-and-water paste crosses piped before baking; brushed with sugar syrup. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Hot Cross Buns (ATK)](https://www.americastestkitchen.com/recipes/10874-hot-cross-buns) [Tier 1 (locked list): America's Test Kitchen]: Egg-rich raisin dough, 12 buns in a 13-by-9-inch pan baked to at least 88 °C, with crosses piped on afterwards in icing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spiced Vanilla Hot Cross Buns (Serious Eats)](https://www.seriouseats.com/spiced-vanilla-hot-cross-buns-recipe) [Tier 1 (locked list): Serious Eats]: Spiced dough with candied orange peel and dried fruit, buns baked in a 9- by 13-inch pan and finished with crosses. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- NYT paste crosses and sugar glaze, matching the photo.
- No orange blossom water, to keep the spicing clear.
- Baked to 88-93 °C.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 35 min + cook 22 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/spiced-hot-cross-buns-orange-peel-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
