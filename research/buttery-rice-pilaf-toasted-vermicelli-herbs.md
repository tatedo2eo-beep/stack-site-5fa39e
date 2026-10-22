# Research: Buttery Rice Pilaf with Toasted Vermicelli and Herbs
Dish: Steamed/pilaf / flavour: Classic. Private file, not published.

## Sources actually opened
- [Basic Rice Pilaf (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8830-basic-rice-pilaf) [Tier 1 (locked list): America's Test Kitchen]: Butter melted, onion softened; 1.5 cups long-grain rice stirred until the edges turn translucent; garlic and thyme; 2.25 cups broth brought to a boil, covered and cooked over low heat about 20 min until absorbed; rested off heat 10 min before fluffing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Rice Pilaf (NYT Cooking)](https://cooking.nytimes.com/recipes/1025492-rice-pilaf) [Tier 2 (locked list): NYT Cooking]: 2 cups basmati rinsed until the water runs clear; onion and garlic softened in 4 tbsp butter; rice toasted about 5 min; 3.5 cups broth, boiled, covered and cooked over low heat about 15 min; left covered off the heat 10 min to steam; fluffed and finished with parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Armenian Rice Pilaf (Serious Eats)](https://www.seriouseats.com/rice-pilaf-recipe-5509610) [Tier 1 (locked list): Serious Eats]: Rice rinsed and soaked in hot water about 10 min; vermicelli broken up and browned in butter until deep golden; drained rice stirred in; 2 cups stock, boiled, covered and cooked on low about 10 min; a towel placed under the lid off the heat about 10 min to absorb steam before fluffing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Long-grain or basmati rice rinsed (NYT; SE) and drained; vermicelli browned in butter (SE); onion softened in butter (ATK; NYT); rice stirred until the edges turn translucent (ATK; NYT); hot stock, boiled, covered and cooked on the lowest heat until absorbed (all three, 10-20 min); rested off the heat 10 min (all three) with a towel under the lid (SE); fluffed with a fork; parsley to finish (NYT). The 1.9 ml/g liquid ratio for rinsed but unsoaked rice, low-salt stock and dill are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/buttery-rice-pilaf-toasted-vermicelli-herbs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
