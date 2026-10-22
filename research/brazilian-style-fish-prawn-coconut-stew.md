# Research: Brazilian-Style Fish and Prawn Stew with Coconut and Peppers
Dish: Moqueca / flavour: Classic. Private file, not published.

## Sources actually opened
- [Moqueca (Brazilian Seafood Stew) (NYT Cooking)](https://cooking.nytimes.com/recipes/1022015-moqueca-brazilian-seafood-stew) [Tier 2 (locked list): NYT Cooking]: Fish marinated in salt and lime; dende oil base with garlic, onion, peppers, tomato and chilli; coconut milk simmered 10 min; prawns then cod cooked briefly in the sauce; finished with dende oil and coriander; rice and lime. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Moqueca (Brazilian Fish Stew) (NYT Cooking)](https://cooking.nytimes.com/recipes/1018000-moqueca-brazilian-fish-stew) [Tier 2 (locked list): NYT Cooking]: Sliced tomatoes, onions and peppers simmered about 20 min in a reduced fish broth; coconut milk and dende oil; fish simmered 5 min, then shrimp; coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Moqueca (Brazilian Shrimp and Fish Stew) (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/10603-brazilian-shrimp-and-fish-stew-moqueca) [Tier 1 (locked list): America's Test Kitchen]: Peppers softened, onion-tomato puree reduced, coconut milk boiled; seafood with garlic and lime added, covered and left off the heat about 15 min until opaque; pepper sauce and coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Fish seasoned with salt and lime (NYT 1022015) or garlic and lime (ATK); palm-oil base of onion, peppers, chilli and tomato (NYT 1022015, NYT 1018000); coconut milk simmered to thicken (all three); fish then prawns cooked gently in the sauce to at least 63 °C and opaque by site rule; palm oil and coriander to finish; rice and lime.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/brazilian-style-fish-prawn-coconut-stew-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- dendê (red palm) oil, or olive oil plus 1 tsp sweet paprika: 2 tbsp → 24 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
