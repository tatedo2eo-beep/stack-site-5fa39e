# Research: Pressed Pesto, Mozzarella and Tomato Panini
Dish: Panini / flavour: Classic. Private file, not published.

## Sources actually opened
- [Caprese Panini (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15671-caprese-panini) [Tier 1 (locked list): America's Test Kitchen]: Crusty bread brushed with oil, layered with shredded mozzarella, blotted tomato and basil, pressed in a skillet under a heavy pot about 4 minutes, flipped and pressed 2 minutes more until golden and melted. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Grilled Eggplant Panini (NYT Cooking)](https://cooking.nytimes.com/recipes/1016444-grilled-eggplant-panini) [Tier 2 (locked list): NYT Cooking]: Bread spread with pesto and layered with vegetables and cheese, then pressed in a panini press or weighted skillet about 5 minutes until crisp and melted. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Pesto spread from NYT on the ATK pressed-skillet method
- Cheese both under and over the tomato so the sandwich holds together
- No added salt; pesto and mozzarella season it

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 14 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/pressed-pesto-mozzarella-tomato-panini-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
- No changes needed.
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
