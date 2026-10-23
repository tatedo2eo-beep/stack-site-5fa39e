# Research: Spaghetti with Garlic, Anchovies and Toasted Breadcrumbs
Dish: Aglio e olio / flavour: Anchovy and breadcrumbs. Private file, not published.

## Sources actually opened
- [Spaghetti With Garlicky Bread Crumbs and Anchovies (NYT Cooking)](https://cooking.nytimes.com/recipes/1016264-spaghetti-with-garlicky-bread-crumbs-and-anchovies) [Tier 2 (locked list): NYT Cooking]: Anchovies, garlic and chilli warmed in olive oil; breadcrumbs toasted golden; tossed with spaghetti, parsley and lemon. (Its raw egg yolks and hot sauce are not used.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta With Anchovies And Bread Crumbs (NYT Cooking)](https://cooking.nytimes.com/recipes/7479-pasta-with-anchovies-and-bread-crumbs) [Tier 2 (locked list): NYT Cooking]: Stale breadcrumbs toasted in a little oil over low heat, stirring constantly, and set aside; anchovies melted in garlic oil and tossed with spaghetti. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta c'Anciuova e Muddica Atturrata (Serious Eats)](https://www.seriouseats.com/pasta-canciuova-e-muddica-atturrata-sicilian-pasta-with-anchovies-and-toasted-breadcrumbs) [Tier 1 (locked list): Serious Eats]: Breadcrumbs toasted in a little oil over medium-low heat until golden; anchovies melted into olive oil with gently cooked garlic and onion, then loosened with pasta water. Pasta water is only lightly salted because the anchovies are salty; the pasta is finished in the sauce with more cooking water, and toasted crumbs are added at the end. SE also adds tomato paste, which we leave out. Our method (lightly salted water, anchovies dissolved in oil, emulsion with pasta water, crumbs half tossed in and half on top) matches. _(curl 200; read 2026-10-22)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written as an extra flavour for the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- 2026-10-22 second-source check (Serious Eats): the method agrees. No changes.
- Pasta-water emulsion and lighter salted water are from the base aglio e olio; lemon zest is my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 15 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/spaghetti-anchovy-breadcrumbs-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion).
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
