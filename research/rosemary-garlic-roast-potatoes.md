# Research: Rosemary and Garlic Roast Potatoes
Dish: Roast potatoes / flavour: Rosemary-garlic. Private file, not published.

## Sources actually opened
- [The Best Crispy Roast Potatoes Ever (Serious Eats)](https://www.seriouseats.com/the-best-roast-potatoes-ever-recipe) [Tier 1 (locked list): Serious Eats]: 230 °C oven; chunks parboiled about 10 min in salted water with bicarbonate; drained and shaken to a starchy coating; garlic and rosemary fried in the oil first and strained, added back at the end with parsley. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Roasted Potatoes with Garlic and Rosemary (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/864-roasted-potatoes-with-garlic-and-rosemary) [Tier 1 (locked list): America's Test Kitchen]: About 220 °C; potatoes roasted cut side down, first under foil, then uncovered and turned; garlic paste and rosemary tossed in at the end so they do not burn. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Italian Roast Potatoes (NYT Cooking)](https://cooking.nytimes.com/recipes/7095-italian-roast-potatoes) [Tier 2 (locked list): NYT Cooking]: Potatoes tossed with olive oil, garlic and dried oregano; roasted at about 220 °C 40-60 min; crowding slows crisping. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Rosemary and garlic fried in the oil and strained, then tossed back in at the end (SE, ATK).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 60 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/rosemary-garlic-roast-potatoes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
