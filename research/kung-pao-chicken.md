# Research: Kung Pao Chicken
Dish: Kung Pao chicken / flavour: Classic. Private file, not published.

## Sources actually opened
- [Gong Bao Ji Ding (Sichuan Kung Pao Chicken) (Serious Eats)](https://www.seriouseats.com/gong-bao-ji-ding-sichuan-kung-pow-chicken-recipe) [Tier 1 (locked list): Serious Eats]: Cubed chicken in a soy-cornflour marinade; Chinkiang vinegar, sweetener, soy and cornflour sauce; oil infused with dried chillies and Sichuan peppercorns in a smoking wok; chicken stir-fried, garlic, ginger, scallions, peanuts, then sauce. (Its Shaoxing wine is left out of our version.) _(read via search extract; curl 200)_
- [Gong Bao Chicken With Peanuts (NYT Cooking)](https://cooking.nytimes.com/recipes/1015131-gong-bao-chicken-with-peanuts) [Tier 2 (locked list): NYT Cooking]: Dried chillies and Sichuan pepper fried until fragrant but not burnt; diced chicken; soy-vinegar-sugar sauce; peanuts at the end. _(read via search extract; curl 200)_
- [Kung Pao Chicken (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/3627-kung-pao-chicken) [Tier 1 (locked list): America's Test Kitchen]: Thigh meat marinated with soy and cornflour for a silky texture; peanuts toasted; sauce thickened with cornflour. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

## Own cooking judgment
- No Shaoxing wine (no-alcohol rule); rice vinegar as a stand-in for black vinegar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/kung-pao-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
