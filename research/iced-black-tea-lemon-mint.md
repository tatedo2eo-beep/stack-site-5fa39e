# Research: Crisp Iced Black Tea with Lemon and Mint
Dish: Iced tea / flavour: Classic. Private file, not published.

## Sources actually opened
- [Iced Black Tea (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12847-iced-black-tea) [Tier 1 (locked list): America's Test Kitchen]: Black tea steeped 4 minutes in boiling water, then ice water added and steeped 1 hour, strained and chilled; served over ice with lemon. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [For the Best Sun Tea, Forget the Sun (Serious Eats)](https://www.seriouseats.com/cold-brewed-iced-tea-recipe) [Tier 1 (locked list): Serious Eats]: Loose tea steeped in cold water in the fridge about 5 hours, strained and served over ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Hot steep stopped with ice water (ATK)
- Cold-steep alternative (SE)
- Lemon and mint garnish to match the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 5 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/iced-black-tea-lemon-mint-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
