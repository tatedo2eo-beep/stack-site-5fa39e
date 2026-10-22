# Research: Thick Açaí Bowl with Banana, Berries and Granola
Dish: Açaí bowl / flavour: Classic. Private file, not published.

## Sources actually opened
- [Açaí Bowl (NYT Cooking)](https://cooking.nytimes.com/recipes/1024738-acai-bowl) [Tier 2 (locked list): NYT Cooking]: Frozen açaí purée blended with a little milk, frozen banana and frozen mixed fruit until thick; topped with fresh fruit and granola. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Acai Smoothie Bowls (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15500-acai-smoothie-bowls) [Tier 1 (locked list): America's Test Kitchen]: Unsweetened frozen açaí with frozen berries, mango, banana, yoghurt and honey processed until thick and smooth; topped as desired. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Açaí, frozen banana and frozen fruit with a little milk; fruit and granola toppings (NYT)
- Unsweetened açaí, frozen berries and a little honey for sweetness (ATK)
- Liquid added sparingly so the bowl holds the toppings

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 0 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/thick-acai-bowl-banana-berries-granola-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- honey: 1 tbsp → 21 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
