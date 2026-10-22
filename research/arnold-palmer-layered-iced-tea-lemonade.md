# Research: Arnold Palmer: Layered Iced Tea and Lemonade
Dish: Iced tea lemonade / flavour: Classic. Private file, not published.

## Sources actually opened
- [Arnold Palmer (NYT Cooking)](https://cooking.nytimes.com/recipes/1024367-arnold-palmer) [Tier 2 (locked list): NYT Cooking]: Black tea steeped 5 minutes and cooled completely, then combined with lemonade and lemon slices and served over plenty of ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Arnold Palmer (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13994-arnold-palmer) [Tier 1 (locked list): America's Test Kitchen]: Iced tea, lemonade concentrate and water stirred together over ice in a tall glass. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Best Arnold Palmer (Serious Eats)](https://www.seriouseats.com/best-arnold-palmer-iced-tea-lemonade-recipe) [Tier 1 (locked list): Serious Eats]: Lemon rinds macerated with sugar until it dissolves, mixed with lemon juice and strained into a lemonade concentrate, then combined with cold-brewed black tea. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Zest mashed into sugar for the lemonade base (SE rind-sugar idea, quicker mash)
- Tea and lemonade kept separate, then layered in the glass to match the photo
- Lower sugar, serves 6

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 5 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/arnold-palmer-layered-iced-tea-lemonade-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
