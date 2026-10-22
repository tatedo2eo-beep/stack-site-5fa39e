# Research: Roman-Style Fettuccine Alfredo (Butter and Parmesan, No Cream)
Dish: Alfredo (Roman original) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Roman-Style Fettuccine Alfredo (Serious Eats)](https://www.seriouseats.com/fettuccine-alfredo-sauce-italian-pasta-recipe) [Tier 1 (locked list): Serious Eats]: Butter and finely grated Parmigiano in a warm bowl; pasta lifted in with hot cooking water and tossed until an emulsified sauce forms. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [The Right Way to Sauce Pasta (Serious Eats)](https://www.seriouseats.com/the-right-way-to-sauce-pasta) [Tier 1 (locked list): Serious Eats]: Pasta finished in the sauce with a couple of tablespoons of pasta water per serving; extra butter or olive oil for lean sauces; cooked hard and fast so starch emulsifies fat and cheese into a clinging sauce. _(curl 200; article text read)_
- [Alfredo Sauce (NYT Cooking)](https://cooking.nytimes.com/recipes/1020965-alfredo-sauce) [Tier 2 (locked list): NYT Cooking]: American cream-and-yolk style; read for contrast only: Parmesan whisked in little by little without boiling. (The Roman method here has no cream.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given. FLAG: only one locked-list recipe for the no-cream Roman method was found; the second support is a Serious Eats technique article (butter, cheese and pasta-water emulsion), not a second recipe.

## Own cooking judgment
- Roman method from 04-P7, a little less butter and cheese (100 g each for 400 g pasta).
- The NYT cream version was read for contrast only.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 5 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/fettuccine-alfredo-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); 04-P10 (fresh egg dough ratio, rest, rolling); 04-P7 (Roman Alfredo).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
