# Research: Naengmyeon (Cold Buckwheat Noodles in Chilled Beef Broth)
Dish: Naengmyeon / flavour: Classic. Private file, not published.

## Sources actually opened
- [Naengmyeon (NYT Cooking)](https://cooking.nytimes.com/recipes/1024870-naengmyeon-cold-noodles-in-chilled-beef-broth) [Tier 2 (locked list): NYT Cooking]: Beef soaked 10 min, simmered 2 h, skimmed; broth chilled overnight and the fat lifted off; radish, onion, pear, spring onion, ginger, garlic and peppercorns simmered in; seasoned with sugar, salt and vinegar; served icy. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chilled Buckwheat Noodles in Chilled Broth (NYT Cooking)](https://cooking.nytimes.com/recipes/1014964-korean-chilled-buckwheat-noodles-with-chilled-broth-and-kimchi) [Tier 2 (locked list): NYT Cooking]: Broth simmered, strained, seasoned with salt and sugar and chilled; buckwheat noodles cooked and chilled; bowls topped with vegetables and fruit. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Mul Naengmyun (Serious Eats)](https://www.seriouseats.com/cold-korean-noodle-soup-mul-naengmyun-recipe) [Tier 1 (locked list): Serious Eats]: Broth simmered with spring onion, ginger and garlic; beef sliced; broth seasoned with salt and radish brine to taste, strained, refrigerated until fully chilled (about 2 hours) and the fat skimmed, then frozen and broken into slush. Noodles cooked per the packet, rinsed cold and squeezed; served with radish pickle, cucumber, Asian pear, egg, vinegar and mustard. _(curl 200; read 2026-10-22)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork.

## Own cooking judgment
- 2026-10-22 second-source check (Serious Eats): fixed step 6. Freshly simmered broth cannot become slush in 1-2 hours of freezing from warm, so it must now be fridge-cold before it goes into the freezer, as SE does.
- Brisket instead of short ribs; broth chilled overnight, fat lifted, aromatics simmered in, seasoned with salt, sugar and vinegar and half-frozen.
- Quick pickles of cucumber and daikon.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 215 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/naengmyeon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- sugar: 2 tsp → 8 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 1.5 tsp fine salt -> 9 g
- Salt given in grams (06-G1): 1 tsp fine salt -> 6 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
