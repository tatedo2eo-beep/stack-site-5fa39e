# Research: Panang Chicken Curry with Makrut Lime Leaves and Peanuts
Dish: Panang curry / flavour: Classic. Private file, not published.

## Sources actually opened
- [Panang Curry (NYT Cooking)](https://cooking.nytimes.com/recipes/1024637-panang-curry) [Tier 2 (locked list): NYT Cooking]: Toasted coriander and cumin ground with peanuts into red curry paste; coconut cream cracked and the paste fried; lime leaves and palm sugar; coconut milk reduced; sliced chicken tossed in fish sauce simmered in it. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Panang Curry with Shrimp (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13577-thai-panang-curry-with-shrimp) [Tier 1 (locked list): America's Test Kitchen]: Panang paste fried in oil until brick red; coconut milk and fish sauce simmered; red pepper strips added; basil and chopped peanuts to finish. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Seed-and-peanut enriched paste, cracked cream and lime leaves (NYT)
- Red pepper, basil and chopped peanuts (ATK)
- Chicken Classic, distinct from the existing Beef flavour

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/panang-chicken-curry-makrut-lime-leaves-peanuts-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C9 (curry base).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
