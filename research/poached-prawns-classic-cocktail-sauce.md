# Research: Gently Poached Prawns with Classic Cocktail Sauce
Dish: Shrimp cocktail / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Shrimp Cocktail (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7228-classic-shrimp-cocktail) [Tier 1 (locked list): America's Test Kitchen]: Shell-on shrimp deveined through the shell; started in cold salted water with thyme, peppercorns, bay and celery seed and heated to about 77 °C; lemon added, covered off the heat 5-7 min until pink and firm; iced; ketchup and horseradish sauce. (Its Worcestershire is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Shrimp Cocktail (NYT Cooking)](https://cooking.nytimes.com/recipes/1022841-shrimp-cocktail) [Tier 2 (locked list): NYT Cooking]: Shrimp added to well-salted, spiced water off the boil for 2-3 min until no longer translucent; ice added to stop cooking; ketchup, lemon, horseradish and garlic cocktail sauce. (Its Dijon sauce is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Plump and Tender Shrimp Cocktail (Serious Eats)](https://www.seriouseats.com/shrimp-cocktail-recipe) [Tier 1 (locked list): Serious Eats]: Shells simmered into an aromatic broth, cooled with cold water; shrimp heated in it with a thermometer so the liquid stays low; chilled thoroughly; ketchup, horseradish and lemon sauce. (Its wine broth and 66 °C target are not used; site rule 63 °C or opaque.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Shell-on prawns deveined through the shell and started in cold salted water with bay, peppercorns and celery seed, heated to 77 °C, then lemon added and left covered off the heat until pink and firm (ATK 7228); gentle poaching with a thermometer so the water stays low (SE); iced to stop the cooking (ATK, NYT); ketchup, horseradish and lemon sauce (all three); at least 63 °C or opaque by site rule. Salt in the water reduced to keep about 3 g or less per serving.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/poached-prawns-classic-cocktail-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
