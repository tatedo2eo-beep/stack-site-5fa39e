# Research: Green Chilli and Coriander Zhug
Dish: Zhug / flavour: Classic. Private file, not published.

## Sources actually opened
- [Spicy Cilantro Sauce (Zhoug) (ATK)](https://www.americastestkitchen.com/recipes/11417-spicy-middle-eastern-herb-sauce-zhoug) [Tier 1 (locked list): America's Test Kitchen]: Cilantro, hot chillies, garlic, ground coriander and cumin and salt pulsed in a processor, then olive oil stirred in to a loose paste; keeps refrigerated up to 2 weeks. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Zhug (NYT Cooking)](https://cooking.nytimes.com/recipes/1022359-zhug) [Tier 2 (locked list): NYT Cooking]: Garlic, seeded jalapenos and lemon juice processed first, then cilantro, cumin, cardamom or coriander and black pepper puréed in, olive oil drizzled in and salted to taste. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Garlic, green chillies and lemon processed first.
- Coriander with cumin, cardamom and black pepper.
- Olive oil streamed in to a spoonable sauce.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/green-chilli-coriander-zhug-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
