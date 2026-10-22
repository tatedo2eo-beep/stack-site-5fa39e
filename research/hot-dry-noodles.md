# Research: Hot Dry Noodles (Wuhan Sesame Noodles)
Dish: Hot dry noodles / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chinese Cold Noodle Salad with Sesame Dressing (Serious Eats)](https://www.seriouseats.com/chinese-cold-noodle-salad-with-sesame-dressing-recipe-6265523) [Tier 1 (locked list): Serious Eats]: Noodles cooked, tossed with oil and spread out to cool; sesame paste loosened with warm water, then light soy sauce, sesame oil, black vinegar and sugar. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Yueyang Hot-Dry Noodles (The New York Times, Diner's Journal, 2010; recipe from a Tier 1 author's 2007 book)](https://archive.nytimes.com/dinersjournal.blogs.nytimes.com/2010/09/14/hot-dry-noodles-from-fuchsia-dunlop/) [Tier 2 (locked list): NYT]: The core hot-dry-noodle method: alkaline noodles boiled to about 80% done, drained, spread out to dry and tossed with sesame oil, then dipped in boiling water 4-5 times to reheat. Sesame paste, garlic and soy go in each bowl, with chilli oil, zha cai and spring onion on top, and everything is mixed at the table. For 225 g noodles (2 servings) it uses 2½ tbsp sesame paste, 1 tbsp light soy, 1½ tbsp chilli oil and 4 tbsp zha cai, which matches our amounts for 4 (ours is a little lighter on chilli oil). _(curl 200; read 2026-10-22)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork. FLAG: no locked-list source has a hot dry noodle recipe; only the Serious Eats sesame dressing method was available. Tahini stands in for Chinese sesame paste.

## Own cooking judgment
- 2026-10-22 second-source check (NYT): this page matches the par-cook, oil, cool and dip-to-reheat method and the bowl-by-bowl seasoning much more closely than the Serious Eats cold noodle salad, which was the only source before. No changes to amounts were needed. The on-page credit says 'The New York Times' because this is NYT's Diner's Journal, not an NYT Cooking page.
- Par-cooked noodles oiled and fanned to cool, reheated briefly, then dressed with sesame paste loosened in warm water, soy sauce and black vinegar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/hot-dry-noodles-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- sugar: 1 tsp → 4 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
