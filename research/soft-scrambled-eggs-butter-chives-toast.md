# Research: Soft Scrambled Eggs with Butter, Chives and Toast
Dish: Scrambled / flavour: Classic. Private file, not published.

## Sources actually opened
- [Fluffy Scrambled Eggs (Serious Eats)](https://www.seriouseats.com/fluffy-scrambled-eggs-recipe) [Tier 1 (locked list): Serious Eats]: Eggs beaten with salt and optional milk; butter melted until foamy in a non-stick skillet; eggs stirred gently with a silicone spatula until large fluffy curds form and the eggs are fully cooked through, about 3 min; seasoned with pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Perfect Scrambled Eggs (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6604-perfect-scrambled-eggs) [Tier 1 (locked list): America's Test Kitchen]: Eggs, extra yolks, half-and-half, salt and pepper beaten with a fork until pure yellow; butter heated until foaming subsides; eggs scraped constantly with a rubber spatula over medium-high until clumping, then folded over low heat until curds are clumped and only slightly wet. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Scrambled Eggs (NYT Cooking)](https://cooking.nytimes.com/recipes/1015676-the-best-scrambled-eggs) [Tier 2 (locked list): NYT Cooking]: Eggs beaten just until combined, seasoned and cream beaten in; butter melted in a non-stick skillet and heat turned to low; eggs cooked slowly over low heat, stirring occasionally, until creamy curds form. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Eggs beaten with salt and a little milk or cream just until uniform (SE, ATK, NYT)
- Cooked in foaming butter in a non-stick pan, pushed with a spatula into curds (SE, ATK) over moderate-to-low heat (NYT)
- Cooked until fully cooked through with no liquid egg (SE; 71 °C here)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 3 min + cook 6 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/soft-scrambled-eggs-butter-chives-toast-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
