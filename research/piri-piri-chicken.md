# Research: Piri-Piri Chicken
Dish: Piri-piri / flavour: Classic. Private file, not published.

## Sources actually opened
- [Peri Peri Grilled Chicken (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/8416-peri-peri-grilled-chicken) [Tier 1 (locked list): America's Test Kitchen]: Blended chilli, garlic, shallot, olive oil, tomato paste, lemon, paprika, bay sauce; bone-in chicken marinated 6-24 h; grilled skin-side down, flipped, finished on the cooler side to 71 °C breast and 79 °C dark meat. _(read via search extract; curl 200)_
- [Oven-Roasted Peri Peri Chicken and Potatoes (NYT Cooking)](https://cooking.nytimes.com/recipes/773839831-oven-roasted-peri-peri-chicken-and-potatoes) [Tier 2 (locked list): NYT Cooking]: Fresh red chilli, garlic, lemon, oregano, smoked paprika and cayenne marinade; roasted at about 230 °C (450 °F) for 35-45 min. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> The NYT Cooking recipe has a long numeric id; it is on cooking.nytimes.com and is used for the oven route only.

## Own cooking judgment
- Sauce simmered briefly before use; fresh bird's-eye chillies plus red pepper instead of dried chillies; cider vinegar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 55 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/piri-piri-chicken-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.
