# Research: Maple-Glazed Carrots with Ginger and Lemon
Dish: Glazed carrots / flavour: Maple. Private file, not published.

## Sources actually opened
- [Maple-Braised Carrots (Food Network Kitchen)](https://www.foodnetwork.com/recipes/maple-braised-carrots-12138403) [NOT on the locked list: context only, not relied on for method, ratios, temperatures or flavours]: Ginger cooked in butter; carrots added with maple syrup, lemon zest strips, thyme, salt, a pinch of cayenne and water; covered and simmered until tender and saucy. _(web search result; full recipe ingredients and directions text read (direct fetch 403/timeout))_
- [Maple-and-Lime-Glazed Carrots (NYT Cooking)](https://cooking.nytimes.com/recipes/8412-maple-and-lime-glazed-carrots) [Tier 2 (locked list): NYT Cooking]: Carrots par-steamed, then simmered in butter with shallot, citrus zest, maple syrup and juice until syrupy, finished with salt and pepper. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Whole slender carrots.
- Braised covered, then reduced uncovered to a glaze.
- Lemon juice to finish.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/maple-glazed-carrots-ginger-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
