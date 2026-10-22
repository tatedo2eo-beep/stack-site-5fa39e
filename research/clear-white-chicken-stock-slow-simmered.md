# Research: Clear White Chicken Stock, Slow Simmered
Dish: White/brown chicken / flavour: Classic. Private file, not published.

## Sources actually opened
- [Rich and Easy White Chicken Stock (Serious Eats)](https://www.seriouseats.com/best-rich-easy-white-chicken-stock-recipe) [Tier 1 (locked list): Serious Eats]: Raw chicken parts covered with cold water, onions, carrots, celery, garlic and parsley; held at a very gentle simmer, strained, chilled and skimmed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chicken Stock (NYT Cooking)](https://cooking.nytimes.com/recipes/1018527-chicken-stock) [Tier 2 (locked list): NYT Cooking]: Raw chicken bones, water, onions, carrots, celery, peppercorns, bay, thyme and parsley simmered for hours, strained, cooled and the fat lifted off. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Cold-start gentle simmer, no pressing, chill and skim (SE)
- Peppercorn, bay and thyme aromatics (NYT); its white-wine vinegar is not used
- 3 h at about 90 °C, fast cooling below 21 °C

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 220 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/clear-white-chicken-stock-slow-simmered-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C1 (74 °C, carryover; resting is not juice reabsorption).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
