# Research: Cinnamon-Almond Rice Horchata with Lime Zest
Dish: Horchata / flavour: Classic. Private file, not published.

## Sources actually opened
- [Horchata (NYT Cooking)](https://cooking.nytimes.com/recipes/1020251-horchata) [Tier 2 (locked list): NYT Cooking]: Rice and almonds soaked overnight in water, blended, strained and sweetened with sugar and ground cinnamon; served over ice. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Horchata (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/16431-horchata) [Tier 1 (locked list): America's Test Kitchen]: Almonds and Ceylon cinnamon toasted, blended with water, rice, sugar, vanilla, lime zest and salt, strained through a nut-milk bag and finished with milk. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Overnight soak for a smooth, fully hydrated base (NYT)
- Toasted almonds and cinnamon, lime zest, vanilla and milk (ATK)
- Nutrition counts only the share of rice and nuts that passes the strainer

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 7 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/cinnamon-almond-rice-horchata-lime-zest-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1 pinch fine salt -> 0.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
