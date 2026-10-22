# Research: Egg Fried Rice with Spring Onions
Dish: Fried rice / flavour: Egg. Private file, not published.

## Sources actually opened
- [Perfect Egg Fried Rice (Serious Eats)](https://www.seriouseats.com/perfect-egg-fried-rice) [Tier 1 (locked list): Serious Eats]: 3 eggs cooked in hot oil in a wok; about 450 g cold cooked rice added and stir-fried until the grains separate and start to jump; light soy sauce added around the hot edge of the wok; scallions to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/14576-simple-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Eggs scrambled in a nonstick skillet and set aside; carrot and scallion whites cooked; 4 cups room-temperature cooked jasmine rice stir-fried; peas added; eggs returned and broken up; seasoned with salt. (Its ham is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Hibachi-Style Fried Rice (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11921-simple-hibachi-style-fried-rice) [Tier 1 (locked list): America's Test Kitchen]: Eggs whisked with sesame oil, salt and white pepper and cooked in a 30 cm nonstick skillet until just set; scallions and rice added and cooked about 3 min until sizzling and popping; soy sauce stirred in about 2 min; garlic butter to finish. (Its mirin is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Cold cooked rice broken up (SE; ATK 14576); eggs cooked first in very hot oil (SE; ATK 11921) and set (ATK 14576); rice stir-fried until separate and popping (SE; ATK 11921); soy sauce added at the hot edge (SE); scallions (all three); white pepper (ATK 11921). Fully set egg (71 °C), the 74 °C rice check, the cooked-rice safety line and quantities are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 10 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/egg-fried-rice-spring-onions-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
