# Research: Chilled Gazpacho with Tomato, Cucumber and Pepper
Dish: Gazpacho / flavour: Classic. Private file, not published.

## Sources actually opened
- [Best Gazpacho (NYT Cooking)](https://cooking.nytimes.com/recipes/1017577-best-gazpacho) [Tier 2 (locked list): NYT Cooking]: Raw tomatoes, light green pepper, cucumber, mild onion and garlic blended very smooth; vinegar and salt added with the motor running and olive oil drizzled in to emulsify; strained, chilled at least 6 hours, seasoned again and thinned if needed. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Gazpacho (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/380-gazpacho) [Tier 1 (locked list): America's Test Kitchen]: Tomatoes, red peppers, cucumbers, onion, vinegar, garlic and salt left to release their juices, then chilled at least 4 hours with tomato juice; served cold with a drizzle of olive oil. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Changes: cider vinegar in place of the wine-based vinegar both sources use. Quantities scaled for 6.

## Own cooking judgment
- Blended until very smooth, vinegar and salt added with the motor running and olive oil streamed in to emulsify, then strained (NYT)
- Red pepper rather than green, and a diced cucumber and pepper garnish with an oil drizzle (ATK)
- Chilled at least 6 h and re-seasoned before serving (NYT, ATK)

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 0 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/chilled-gazpacho-tomato-cucumber-pepper-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 1.25 tsp fine salt -> 7.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
