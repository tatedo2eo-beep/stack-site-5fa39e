# Research: Tom Yum Goong: Thai Hot and Sour Prawn Soup
Dish: Tom yum / flavour: Classic. Private file, not published.

## Sources actually opened
- [Tom Yum Soup (NYT Cooking)](https://cooking.nytimes.com/recipes/1026613-tom-yum-goong-soup) [Tier 2 (locked list): NYT Cooking]: Prawn heads and shells toasted in oil, simmered in water 15 minutes for stock and removed; bruised lemongrass, galangal, makrut lime leaves and chillies simmered; fish sauce, chilli jam and sugar; oyster mushrooms; prawns cooked briefly; lime juice and cilantro. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Guay Tiew Tom Yum Goong (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/11413-guay-tiew-tom-yum-goong-thai-hot-and-sour-soup-with-shrimp-and-noodles) [Tier 1 (locked list): America's Test Kitchen]: Lemongrass, scallion whites, lime leaves, chile and galangal smashed and simmered in chicken broth with sugar 15 minutes, then removed; mushrooms, fish sauce and chile; shrimp cooked off the heat, covered; cherry tomatoes and lime juice; cilantro. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Creamy Tom Yam Kung (Serious Eats)](https://www.seriouseats.com/creamy-tom-yam-kung-thai-hot-and-sour-soup-recipe) [Tier 1 (locked list): Serious Eats]: Broth kept at a bare simmer; mushrooms, lime leaves, lemongrass, galangal, chilli paste, fish sauce and chillies; prawns cooked about a minute; lime juice off the heat; cilantro. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Chilli jam (NYT, SE) and the evaporated milk of the creamy SE version left out for a clear soup; ATK broth base. Prawns to 63 °C (FSIS).

## Own cooking judgment
- Prawn shells toasted and simmered to deepen the broth (NYT)
- Bruised lemongrass, galangal, lime leaves and chillies simmered in chicken broth with a little sugar (ATK, NYT, SE)
- Mushrooms and fish sauce, prawns cooked gently off the heat, tomatoes and lime juice at the end (ATK, NYT, SE)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/tom-yum-goong-thai-hot-sour-prawn-soup-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
