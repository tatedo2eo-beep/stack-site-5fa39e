# Research: Frothy Whisked Matcha Green Tea
Dish: Matcha (whisked) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Matcha (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15571-matcha) [Tier 1 (locked list): America's Test Kitchen]: Sifted matcha whisked with 79 °C water in a warmed bowl, first to a paste, then briskly in a zigzag until frothy; more water can be added. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Iced Matcha Latte (NYT Cooking)](https://cooking.nytimes.com/recipes/1027077-iced-matcha-latte) [Tier 2 (locked list): NYT Cooking]: Sifted matcha whisked into a smooth paste with 1 tbsp warm water, then whisked with more water until frothy and poured over milk and ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 80 °C water, sifting, paste then zigzag whisk (ATK)
- Smooth paste stage before frothing (NYT)
- 2 g per 70 ml bowl, as in the photo

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 0 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/frothy-whisked-matcha-green-tea-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
