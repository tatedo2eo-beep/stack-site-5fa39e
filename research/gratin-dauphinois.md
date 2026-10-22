# Research: Gratin Dauphinois (Garlic and Cream Potato Bake)
Dish: Gratin dauphinois / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gratin Dauphinois (NYT Cooking)](https://cooking.nytimes.com/recipes/2736-madame-laracines-gratin-dauphinois-madame-laracines-potato-gratin) [Tier 2 (locked list): NYT Cooking]: Thin slices simmered first in milk and water with garlic, bay and salt about 10 min; layered with nutmeg, pepper and cream; baked about 1 h until golden. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pommes Dauphinoises (NYT Cooking)](https://cooking.nytimes.com/recipes/1027385-pommes-dauphinoises-creamy-potato-gratin) [Tier 2 (locked list): NYT Cooking]: Dish rubbed with garlic and buttered; cream steeped with thyme and garlic; slices not rinsed so their starch thickens the cream; baked at 190 °C. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Slices par-simmered in the milk and cream (NYT 2736), garlic-rubbed dish and unrinsed slices (NYT 1027385); no cheese; low 160 °C oven is my choice to keep the cream from splitting.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 100 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/gratin-dauphinois-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); 06-G7 (emulsions: butter and cheese folded over low heat); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
