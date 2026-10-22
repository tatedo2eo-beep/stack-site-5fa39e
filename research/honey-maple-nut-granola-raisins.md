# Research: Honey-Maple Granola with Walnuts, Almonds, Seeds and Raisins
Dish: Granola / flavour: Classic. Private file, not published.

## Sources actually opened
- [Classic Granola (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/691-classic-granola) [Tier 1 (locked list): America's Test Kitchen]: Oats, walnuts, coconut, almonds, sesame and sunflower seeds coated with warmed maple syrup, honey and oil; baked at 160 °C, stirred every 5 min; tipped onto a second tray and raisins stirred in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Crisp Homemade Granola (Serious Eats)](https://www.seriouseats.com/crispy-homemade-granola-recipe) [Tier 1 (locked list): Serious Eats]: Oats baked low and slow spread on a lined tray, cooled completely to crisp, nuts toasted and salted lightly, dried fruit added after baking. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Nut, seed and syrup mix and second-tray cooling (ATK)
- Pinch of salt, fruit after baking, full cooling for crunch (SE)
- Pressed for clusters to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 20 min against the step times.
- Quantities checked against servings (16). Nutrition worked from USDA FDC (see content/notes/honey-maple-nut-granola-raisins-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
