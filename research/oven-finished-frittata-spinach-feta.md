# Research: Oven-Finished Frittata with Spinach and Feta
Dish: Frittata / flavour: Spinach-feta. Private file, not published.

## Sources actually opened
- [Cast Iron Spinach and Feta Frittata (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/9891-cast-iron-spinach-and-feta-frittata) [Tier 1 (locked list): America's Test Kitchen]: Spinach wilted, pressed dry twice and chopped; eggs beaten with half-and-half, salt, pepper and most of the feta; onion, garlic and oregano softened, spinach cooked until glossy; eggs added and stirred briefly, remaining feta scattered, cooked briefly on the hob then finished under the grill until set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Frittata with Greens (NYT Cooking)](https://cooking.nytimes.com/recipes/1016420-frittata-with-greens) [Tier 2 (locked list): NYT Cooking]: Greens blanched, squeezed dry and chopped, cooked briefly with garlic; eggs beaten with salt, pepper, milk and the greens; poured into a hot oiled pan, edges lifted so egg runs underneath, then cooked on low and finished until set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Spinach wilted and pressed or squeezed dry, then chopped (ATK, NYT)
- Eggs beaten with dairy and most of the feta; onion, garlic and oregano softened and spinach cooked until glossy (ATK)
- Eggs added, remaining feta scattered, set on the hob and finished under the grill (ATK, NYT)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/oven-finished-frittata-spinach-feta-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
