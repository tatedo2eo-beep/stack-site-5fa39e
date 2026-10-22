# Research: Galician-Style Octopus with Potatoes, Smoked Paprika and Olive Oil
Dish: Pulpo a la gallega / flavour: Classic. Private file, not published.

## Sources actually opened
- [Octopus, Galician Style (NYT Cooking)](https://cooking.nytimes.com/recipes/10835-octopus-galician-style) [Tier 2 (locked list): NYT Cooking]: Octopus thawed, tentacles separated or cooked whole; simmered gently, covered, about an hour until tender; potatoes cooked about 30 min; octopus cut with scissors over the potatoes; pimentón, olive oil and coarse salt; served warm. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Octopus and Potatoes (NYT Cooking)](https://cooking.nytimes.com/recipes/7374-octopus-and-potatoes) [Tier 2 (locked list): NYT Cooking]: Octopus simmered in water 1 h or more until nearly tender, tested with a knife; potatoes added to the same water 10-20 min; octopus cut into bite-size pieces over the potatoes; paprika, plenty of olive oil, salt on top. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pressure-Cooker Octopus (Serious Eats)](https://www.seriouseats.com/pressure-cooker-octopus-recipe) [Tier 1 (locked list): Serious Eats]: Octopus cooked until a paring knife slides into the thickest part of a tentacle with little resistance; cooled in the cooking liquid; hard beak and the eye section cut out and discarded, rest of the head edible. (Used for the tenderness test and trimming only; the pressure-cooker method is not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Grilled Octopus (NYT Cooking)](https://cooking.nytimes.com/recipes/7375-grilled-octopus) [Tier 2 (locked list): NYT Cooking]: Octopus simmered slowly with bay, thyme, peppercorns and garlic 30-90 min depending on size, tested with a knife point; drained; then grilled. (Used for the simmering method and the tenderness test only.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Frozen octopus thawed (NYT 10835); beak and eyes cut out, rest of the head kept (SE); gentle covered simmer about 1 h (NYT 10835; NYT 7374; NYT 7375 30-90 min) until a knife slides into the thickest part of a tentacle (SE; NYT 7374; NYT 7375); left briefly in the liquid (SE cools it in the liquid); potatoes cooked in the octopus water (NYT 7374); octopus cut with scissors over sliced potatoes, then smoked paprika, plenty of olive oil and coarse salt, served warm (NYT 10835; NYT 7374). My own: no salt in the water because the octopus is already salty; the three quick dips are a common Galician step, given as optional technique.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 95 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/galician-style-octopus-potatoes-smoked-paprika-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
