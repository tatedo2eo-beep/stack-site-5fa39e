# Research: Kalguksu (Korean Knife-Cut Noodle Soup)
Dish: Kalguksu / flavour: Classic. Private file, not published.

## Sources actually opened
- [Anchovy Knife-Cut Noodle Soup (Serious Eats)](https://www.seriouseats.com/korean-anchovy-knife-cut-noodle-soup-myeolchi-kal-guksu) [Tier 1 (locked list): Serious Eats]: Stock anchovies and dried kelp simmered about 20 min and strained; courgette, potato, onion and carrot simmered in it with the knife-cut noodles, teased apart so they do not clump; seasoned with soy sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter (noodles). Quantities are my own; the core method matches the locked-list sources listed above. No wine, mirin or pork. FLAG: only one locked-list source (Serious Eats) covers this soup; the home-made dough follows general fresh-noodle practice.

## Own cooking judgment
- Anchovy-kelp stock strained; vegetables and noodles simmered in it.
- Dough made at home (the source uses bought fresh knife-cut noodles).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 35 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/kalguksu-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 1. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); knowledge gap noted: 04-pasta covers Italian-style pasta only (P1-P4 water salting and emulsion do not apply to soaked or stir-fried noodles); the noodle method rests on the locked-list sources above; 06-G2 (balance of salt, sour, sweet and heat).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
