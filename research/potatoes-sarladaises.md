# Research: Potatoes Sarladaises (Garlic and Parsley Potatoes)
Dish: Potatoes sarladaises / flavour: Classic. Private file, not published.

## Sources actually opened
- [Potatoes Sarladaises (Serious Eats)](https://www.seriouseats.com/french-in-a-flash-classic-potatoes-sarladaises-recipe) [Tier 1 (locked list): Serious Eats]: 1.2 cm discs browned in clarified butter, goose or duck fat; sliced garlic added; water and salt, covered until tender, then cooked until the liquid evaporates; parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Truffled Potatoes Sarladaise (NYT Cooking)](https://cooking.nytimes.com/recipes/4677-truffled-potatoes-sarladaise) [Tier 2 (locked list): NYT Cooking]: Sliced potatoes browned in oil and butter until a crust forms, pressed and finished until tender and golden underneath. (Its truffles are not used here.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Duck fat or ghee; brown, then cover with water to finish (SE).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/potatoes-sarladaises-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
