# Research: Som Tam (Thai Green Papaya Salad) with Long Beans and Peanuts
Dish: Som tam / flavour: Classic. Private file, not published.

## Sources actually opened
- [Som Tam Thai (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/17639-som-tam-thai-thai-style-papaya-salad) [Tier 1 (locked list): America's Test Kitchen]: Papaya shredded into long strands; peanuts, chillies, dried shrimp, palm sugar and garlic mashed to a paste and loosened with lime and fish sauce; beans pounded with squeezed lime halves until split, tomatoes lightly crushed, then papaya pounded briefly to take in the dressing. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Som Tam Thai (Serious Eats)](https://www.seriouseats.com/som-tam-green-papaya-salad-5208332) [Tier 1 (locked list): Serious Eats]: Garlic and chillies pounded first, then dried shrimp and half the peanuts without over-pounding, palm sugar ground in to dissolve, beans and tomatoes bruised, lime and fish sauce, papaya worked against the mortar sides with a spoon; remaining peanuts at the end; served with sticky rice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Som Tum (NYT Cooking)](https://cooking.nytimes.com/recipes/1012589-som-tum-green-papaya-salad) [Tier 2 (locked list): NYT Cooking]: Garlic, peanuts, chillies, sugar and dried shrimp pounded to a paste, mixed with lime and fish sauce; tomatoes and beans crushed lightly; shredded green papaya tossed in. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the salads chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Pork, ham, Dijon mustard, wine or sherry vinegar and vermouth used by some sources are left out (halal): beef, lemon and mustard powder take their place.

## Own cooking judgment
- Garlic-chilli-shrimp-peanut-palm sugar paste without over-pounding (SE, NYT)
- Beans pounded with squeezed lime halves, tomatoes lightly crushed (ATK)
- Papaya worked briefly against the mortar sides to stay crisp (SE, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 0 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/som-tam-green-papaya-salad-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- palm sugar or light brown sugar, chopped: 1.5 tbsp → 18 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
