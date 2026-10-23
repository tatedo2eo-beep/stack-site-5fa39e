# Research: Gado-Gado (Indonesian Vegetable Salad with Peanut Sauce)
Dish: Gado-gado / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gado Gado (Serious Eats)](https://www.seriouseats.com/gado-gado-indonesian-salad-with-peanut-sauce-8646793) [Tier 1 (locked list): Serious Eats]: Peanuts ground to a coarse paste; shallot, garlic, chilli, palm sugar and salt blitzed; tamarind simmered in water, pastes added and cooked thick; potatoes boiled, cabbage, green beans and sprouts blanched and iced; served with eggs, fried tofu and cucumber. _(web search result; full recipe ingredients and directions text read (direct fetch 403/timeout))_
- [Gado-Gado (NYT Cooking)](https://cooking.nytimes.com/recipes/1021341-gado-gado) [Tier 2 (locked list): NYT Cooking]: Peanut sauce of shallot, garlic and chilli paste with peanuts and kecap manis; tofu, potatoes, blanched vegetables, cucumber, tomatoes and boiled eggs arranged and sauced. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Fried tofu puffs from the shop.
- Kecap manis and tamarind in the sauce.
- Eggs boiled firm.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 30 min + cook 30 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/gado-gado-peanut-sauce-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- dark brown or palm sugar: 2 tbsp → 24 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
