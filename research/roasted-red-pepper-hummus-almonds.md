# Research: Roasted Red Pepper Hummus with Toasted Almonds
Dish: Hummus / flavour: Roasted red pepper. Private file, not published.

## Sources actually opened
- [Roasted Red Pepper Hummus (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4238-roasted-red-pepper-hummus) [Tier 1 (locked list): America's Test Kitchen]: Tahini whisked with oil; chickpeas, rinsed and dried jarred red peppers, garlic, salt and cayenne processed, lemon juice and water streamed in, then the tahini mixture added until smooth; garnished with toasted almonds and parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Spicy Roasted Red Pepper Hummus (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/6973-spicy-roasted-red-pepper-hummus) [Tier 1 (locked list): America's Test Kitchen]: Adds cumin and smoked paprika; peppers pulsed in for texture. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Roasted Red Pepper Spread (NYT Cooking)](https://cooking.nytimes.com/recipes/1253-roasted-red-pepper-spread) [Tier 2 (locked list): NYT Cooking]: Roasted peppers blended with olive oil, parsley, lemon, capers and garlic. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Half-quantity of salt with rinsed peppers
- Smoked paprika from the spicy version
- 30 min rest before serving

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 3 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/roasted-red-pepper-hummus-almonds-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
