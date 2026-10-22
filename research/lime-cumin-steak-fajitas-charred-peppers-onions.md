# Research: Lime and Cumin Steak Fajitas with Charred Peppers and Onions
Dish: Fajita / flavour: Beef. Private file, not published.

## Sources actually opened
- [Grilled Skirt Steak Fajitas (Serious Eats)](https://www.seriouseats.com/grilled-skirt-steak-fajitas-food-lab-recipe) [Tier 1 (locked list): Serious Eats]: Marinade of lime juice, oil, brown sugar, chilli powder, garlic, cumin and black pepper (soy sauce in the source not used), with a portion reserved for the vegetables before it touches the meat; skirt steak marinated 3-10 h; steak seared hard and rested; peppers and onion cooked in cast iron about 10 min until softened and charred in spots; sliced against the grain. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Steak Fajitas (NYT Cooking)](https://cooking.nytimes.com/recipes/1018078-steak-fajitas) [Tier 2 (locked list): NYT Cooking]: Cumin, chilli powder and salt rubbed into scored flank or skirt steak, then marinated in lime juice and zest, olive oil and garlic with 2 tbsp reserved; onion and peppers cooked in a heavy skillet and deglazed with the reserved marinade; steak patted dry and seared in a hot cast-iron pan; served with tortillas, salsa and queso fresco (Worcestershire in the source not used). _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [One-Pan Steak Fajitas (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11300-one-pan-steak-fajitas) [Tier 1 (locked list): America's Test Kitchen]: Flank steak cut with the grain into 3 pieces, patted dry and rubbed with chilli powder, brown sugar, salt and pepper; peppers and onion roasted at 245 °C and steaks roasted alongside, rested 5 min and sliced thin against the grain; vegetables tossed with lime juice and coriander; tortillas warmed in foil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Lime, oil, garlic, cumin, chilli powder, sugar and pepper marinade with a portion reserved for the vegetables before it touches the meat (SE, NYT)
- Peppers and onion cooked in a heavy pan until softened and charred in spots (SE, NYT; ATK roasts them)
- Steak patted dry, seared hard, rested and sliced thinly against the grain (SE, NYT, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/lime-cumin-steak-fajitas-charred-peppers-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C2 (dry brine); 02-C3 (wet brine); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- brown sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
