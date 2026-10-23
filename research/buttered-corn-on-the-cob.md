# Research: Buttered Corn on the Cob
Dish: Corn on the cob / flavour: Classic. Private file, not published.

## Sources actually opened
- [Steamed Corn on the Cob (ATK)](https://www.americastestkitchen.com/recipes/1138-steamed-corn-on-the-cob) [Tier 1 (locked list): America's Test Kitchen]: Husked ears steamed in a covered basket over about 2.5 cm boiling water on high 7-10 min; served with butter, salt and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [How To Boil Corn on the Cob (Food Network Kitchen)](https://www.foodnetwork.com/how-to/packages/food-network-essentials/how-to-boil-corn-on-the-cob) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Husked corn boiled in well-salted water 4-5 min until bright yellow and crisp-tender, brushed with butter and seasoned with salt and pepper. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Steamed 7-10 min (boiling given as an option).
- Butter pats, salt and pepper at the table.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/buttered-corn-on-the-cob-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
