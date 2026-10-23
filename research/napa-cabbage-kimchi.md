# Research: Napa Cabbage Kimchi
Dish: Kimchi / flavour: Classic. Private file, not published.

## Sources actually opened
- [Baechu Kimchi (ATK)](https://www.americastestkitchen.com/recipes/16492-baechu-kimchi-napa-cabbage-kimchi) [Tier 1 (locked list): America's Test Kitchen]: Cut napa cabbage layered with salt 2 h, washed twice; cooked rice-flour paste blended with Asian pear, gochugaru, fish sauce, garlic and salted shrimp; mixed with carrot, scallions and ginger; packed and fermented 2-5 days at 18-21 °C, then refrigerated. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Baechu Kimchi (Serious Eats)](https://www.seriouseats.com/baechu-kimchi-5184676) [Tier 1 (locked list): Serious Eats]: Quartered cabbage brined 12-14 h, rinsed and wrung; glutinous rice flour, sugar and water cooked to a paste with bloomed gochugaru, fish sauce, salted shrimp, garlic, ginger, pear, daikon, carrot and scallions; packed, fermented 3 days at 13-24 °C then refrigerated. _(WebFetch 200; full recipe page text read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cut cabbage salted 2 h and rinsed twice.
- Rice-flour paste with pear, chilli flakes, fish sauce, garlic and ginger; salted shrimp left out.
- Fermented 2-5 days at 18-21 °C, then refrigerated.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 5 min against the step times.
- Quantities checked against servings (32). Nutrition worked from USDA FDC (see content/notes/napa-cabbage-kimchi-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
