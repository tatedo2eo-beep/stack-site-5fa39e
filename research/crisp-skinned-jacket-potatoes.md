# Research: Crisp-Skinned Jacket Potatoes
Dish: Baked/jacket / flavour: Classic. Private file, not published.

## Sources actually opened
- [Best Baked Potatoes (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8654-best-baked-potatoes) [Tier 1 (locked list): America's Test Kitchen]: 230 °C; baked on a rack until the centre reaches about 96 °C, then brushed with oil and baked 10 min more for a crisp skin; cut in an X and squeezed open at once. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Baked Potatoes (NYT Cooking)](https://cooking.nytimes.com/recipes/1016869-baked-potatoes) [Tier 2 (locked list): NYT Cooking]: Oven at 230 °C; skins oiled and salted, pricked; roasted 45-60 min until a knife meets no resistance; split and buttered. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the fries and potatoes chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Oil and salt after baking (ATK) for a crisp skin; 230 °C (NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 70 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-skinned-jacket-potatoes-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: the knowledge base has no potato topic file (starch type, parboiling in alkaline or acidulated water, rinsing, ricing); those steps rest on the locked-list sources above; 06-G4 (browning: dry surface, do not crowd the pan); 06-G8 (knife cuts); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
