# Research: Big-Batch Beef and Bean Chili
Dish: Chili con carne / flavour: Classic. Private file, not published.

## Sources actually opened
- [Simple Beef Chili with Kidney Beans (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/34-simple-beef-chili-with-kidney-beans) [Tier 1 (locked list): America's Test Kitchen]: Spices (chilli powder, cumin, coriander, oregano) bloomed with the onions; ground beef, kidney beans, tomatoes; long covered then uncovered simmer. _(read via search extract; curl 200)_
- [Pressure Cooker Ground Beef and Bean Chili (Serious Eats)](https://www.seriouseats.com/pressure-cooker-ground-beef-and-bean-chili) [Tier 1 (locked list): Serious Eats]: Brown part of the beef hard for flavour; bloom the spices in fat; beans added at the end so they keep their shape. _(read via search extract; curl 200)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in batch 1 from own cooking judgment before the research rule. Re-checked on 22 Oct 2026 against locked-list sources (below); differences are listed under own judgment.

## Own cooking judgment
- Lean 5% mince and a shorter 45 + 15 min simmer (ATK simmers longer with fattier beef); cocoa and cinnamon.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 75 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/beef-chili-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Not applied: CHECKLIST 7 asks for °F beside °C, but Joe's hard rule is metric units and the site validator flags imperial units, so the recipe stays metric only (conflict reported to Joe).
