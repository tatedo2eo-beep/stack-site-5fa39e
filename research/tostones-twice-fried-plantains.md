# Research: Tostones (Twice-Fried Green Plantains) with Mayoketchup
Dish: Tostones / flavour: Classic. Private file, not published.

## Sources actually opened
- [Crispy Fried Plantains (ATK)](https://www.americastestkitchen.com/recipes/17633-crispy-fried-plantains-tostones) [Tier 1 (locked list): America's Test Kitchen]: Green plantain rounds fried at about 160 °C until deep yellow, flattened to 6 mm, dipped briefly in salted water, then fried at about 190 °C until golden and crisp. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Tostones (Serious Eats)](https://www.seriouseats.com/tostones-recipe-8782460) [Tier 1 (locked list): Serious Eats]: Plantains shallow-fried, smashed thin while warm and fried again until crisp; tossed with salt and garlic powder; served with a mayonnaise-ketchup dip seasoned with cumin. _(web search result; full recipe ingredients and directions text read (direct fetch 403/timeout))_
- [Tostones (NYT Cooking)](https://cooking.nytimes.com/recipes/1020516-tostones) [Tier 2 (locked list): NYT Cooking]: Plantain rounds fried briefly, pressed with a tostonera, fried again until golden brown and salted while hot. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Brief salted-water dip before the second fry.
- Garlic powder on the hot tostones.
- Mayoketchup with cumin on the side.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tostones-twice-fried-plantains-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 1 tsp fine salt, for the dipping water -> 6 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Added the frying-safety tip: pot half full, thermometer, never unattended, no water on a grease fire (06-G6)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
