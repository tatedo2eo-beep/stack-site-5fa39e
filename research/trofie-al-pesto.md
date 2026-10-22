# Research: Hand-Rolled Trofie with Basil Pesto
Dish: Trofie / flavour: Classic. Private file, not published.

## Sources actually opened
- [A guide to hand-shaped pasta (King Arthur Baking)](https://www.kingarthurbaking.com/blog/2025/05/22/types-of-pasta-shapes) [Tier 1 (locked list): King Arthur Baking]: Eggless durum dough; trofie rolled from 1 g pieces under the edge of the palm with a diagonal drag; orecchiette dragged with a table knife then inverted; cavatelli dragged with two fingers; cooked 2-5 min and finished in the sauce with cooking water. _(WebFetch; article text read)_
- [The Best Pesto alla Genovese (Serious Eats)](https://www.seriouseats.com/best-pesto-recipe) [Tier 1 (locked list): Serious Eats]: Garlic pounded to paste, then pine nuts, then basil a handful at a time with coarse salt as an abrasive; Parmigiano and pecorino; oil worked in last to an emulsified sauce. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Pasta with Pesto, Potatoes and Green Beans (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7410-pasta-with-pesto-potatoes-and-green-beans) [Tier 1 (locked list): America's Test Kitchen]: Toasted pine nuts and garlic; basil pesto with Parmesan and oil; trofie or gemelli cooked in the potato water and tossed with pesto, butter and cooking water. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the pasta chapter. Quantities are my own; the core method matches the locked-list sources listed above. No wine or pork; Parmesan rennet note given. FLAG: only one locked-list source (King Arthur) describes the trofie shaping and dough; the pesto and finish follow two sources. The dough mixes 00 flour with semolina, my choice.

## Own cooking judgment
- Pesto by the pounded method (garlic, nuts, basil, cheese, oil).
- Tossed off the heat with cooking water (04-P4).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 60 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/trofie-al-pesto-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C7 (cutlets); 04-P1 (water salt %); 04-P2 (water volume, no oil); 04-P3 (al dente, finish in sauce, reserve 240 ml); 04-P4 (emulsion); knowledge gap noted: 04-pasta has no item for eggless hand-shaped pasta; the method rests on the locked-list sources above; knowledge gap noted: 04-pasta has no item for pesto; the method rests on the locked-list sources above.
Changes made:
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
