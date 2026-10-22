# Research: Prawn Fried Rice with Egg, Peas and Sweetcorn
Dish: Fried rice / flavour: Shrimp. Private file, not published.

## Sources actually opened
- [Shrimp Fried Rice (NYT Cooking)](https://cooking.nytimes.com/recipes/1023154-shrimp-fried-rice) [Tier 2 (locked list): NYT Cooking]: Shrimp cooked in hot oil 2-4 min until no longer translucent and set aside; onion and mixed frozen vegetables (carrot, peas, corn) cooked 1-2 min; 6 cups cold day-old rice with soy sauce cooked 5-7 min until it crisps on the base; eggs scrambled in butter at the side of the pan and folded in; shrimp returned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Shrimp Fried Rice (Serious Eats)](https://www.seriouseats.com/shrimp-fried-rice-5189755) [Tier 1 (locked list): Serious Eats]: Cold rice broken into grains and toasted in two batches in a smoking wok about 3 min; garlic, shrimp pieces, eggs, frozen peas and scallions stir-fried and the rice returned, all over high heat. (Its lettuce and chicken seasoning granules are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/14576-simple-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Eggs scrambled in a nonstick skillet and set aside; carrot and scallion whites cooked; 4 cups room-temperature cooked jasmine rice stir-fried; peas added; eggs returned and broken up; seasoned with salt. (Its ham is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Shrimp cooked first until no longer translucent and set aside (NYT); carrot, peas and corn (NYT; ATK 14576 carrot and peas); cold day-old rice stir-fried over high heat (NYT; SE); eggs scrambled and folded in (NYT; SE; ATK); soy sauce (NYT); shrimp returned at the end (NYT). Searing the prawns whole, sweetcorn from a tin, the egg set aside first, garlic with the vegetables and the 71/74 °C checks are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 15 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/prawn-fried-rice-egg-peas-sweetcorn-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
