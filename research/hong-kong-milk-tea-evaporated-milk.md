# Research: Hong Kong Milk Tea with Evaporated Milk
Dish: Hong Kong-style milk tea / flavour: Classic. Private file, not published.

## Sources actually opened
- [Hong Kong Milk Tea (Serious Eats)](https://www.seriouseats.com/hong-kong-milk-tea-recipe-11870363) [Tier 1 (locked list): Serious Eats]: 5 black tea bags simmered 5-7 min in about 720 ml water, finished with evaporated milk and sugar to taste. _(curl 200; JSON-LD recipe read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch from one locked-list publisher (rule of 23 Oct 16:26). Wording, step order and structure differ from the source; quantities sanity-checked.

## Own cooking judgment
- Sieve-pulling step to mimic the tea sock.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 3 min + cook 8 min against the step times.
- Quantities checked against servings (2). Nutrition worked from USDA FDC (see content/notes/hong-kong-milk-tea-evaporated-milk-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- sugar: 4 tsp → 17 g (CHECKLIST 1, weights in grams)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
