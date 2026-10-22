# Research: Crisp Melted Monterey Jack Cheese Quesadillas with Fresh Tomato Salsa
Dish: Quesadilla / flavour: Classic. Private file, not published.

## Sources actually opened
- [Cheese Quesadillas (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15744-cheese-quesadillas) [Tier 1 (locked list): America's Test Kitchen]: Monterey Jack spread over half of each 25 cm flour tortilla, folded and pressed; pan-fried in oil in a 30 cm non-stick pan until golden on both sides; drained on a rack and cut into wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Baked Bean and Cheese Quesadillas (NYT Cooking)](https://cooking.nytimes.com/recipes/1013515-baked-bean-and-cheese-quesadillas) [Tier 2 (locked list): NYT Cooking]: Tortillas filled with grated Monterey Jack or cheddar, heated in a pan until crisp and the cheese melts; served with salsa. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Half-filled folded tortillas, shallow pan-frying and wedges (ATK)
- Salsa on the side (NYT)
- Less cheese and oil than the source; salsa left unsalted to keep salt under 2.5 g

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 12 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-melted-monterey-jack-cheese-quesadillas-fresh-salsa-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
