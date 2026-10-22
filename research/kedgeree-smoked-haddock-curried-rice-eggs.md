# Research: Kedgeree: Curried Basmati Rice with Smoked Haddock and Eggs
Dish: Kedgeree / flavour: Classic. Private file, not published.

## Sources actually opened
- [Kedgeree (Serious Eats)](https://www.seriouseats.com/kedgeree-british-scottish-curry-rice-with-smoked-haddock-recipe-7198140) [Tier 1 (locked list): Serious Eats]: Eggs boiled; smoked haddock poached and flaked; basmati toasted in butter with onion, garam masala, turmeric, cardamom and bay, cooked in stock; fish, parsley and eggs folded in; lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Jane Garmey's Kedgeree (NYT Cooking)](https://cooking.nytimes.com/recipes/2434-jane-garmeys-kedgeree) [Tier 2 (locked list): NYT Cooking]: Haddock poached in boiling water and the cooking liquid kept to cook the curried rice; butter, chopped egg, flaked fish and parsley stirred in; lemon to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Butter-toasted spiced rice and quartered eggs (SE)
- Poaching liquid used to cook the rice (NYT)
- No added salt; eggs boiled until fully set

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 40 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/kedgeree-smoked-haddock-curried-rice-eggs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C9 (curry base).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
