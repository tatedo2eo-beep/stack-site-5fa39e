# Research: Seared Scallops with Garlic-Thyme Butter and Lemon
Dish: Seared scallops / flavour: Classic. Private file, not published.

## Sources actually opened
- [Pan-Seared Scallops (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/4955-pan-seared-scallops) [Tier 1 (locked list): America's Test Kitchen]: Scallops pressed between towels and left 10 min; seasoned; half seared flat side down in just-smoking oil 1.5-2 min without moving; butter added, flipped and basted 30-90 s until the sides are firm and centres opaque; second batch in a wiped pan; lemon wedges. (Its lower centre temperature is not used; the site rule is opaque.) _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Simple Seared Scallops (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/12305-simple-seared-scallops) [Tier 1 (locked list): America's Test Kitchen]: Scallops blotted between towels 10 min; oil heated until just smoking; seasoned scallops cooked in two batches around the pan 3 min, flipped halfway; kept tented; lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Buttery Scallops With Lemon and Herbs (NYT Cooking)](https://cooking.nytimes.com/recipes/1022471-buttery-scallops-with-lemon-and-herbs) [Tier 2 (locked list): NYT Cooking]: Scallops seasoned and seared in butter without moving 3 min until golden; flipped, more butter with garlic and thyme for 1 min; lemon juice and zest; soft herbs and lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Seared Sea Scallops With Ginger-Lime Butter (NYT Cooking)](https://cooking.nytimes.com/recipes/1017970-seared-sea-scallops-with-ginger-lime-butter) [Tier 2 (locked list): NYT Cooking]: Side muscle removed, scallops patted dry and seasoned; seared in a film of nearly smoking oil in cast iron, browned gradually until crisp and caramelised, flipped and left until firm; served with a flavoured butter. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Side muscle removed and scallops pressed dry between towels for 10 min (ATK 4955; ATK 12305; NYT 1017970); seasoned just before cooking; seared flat side down in just-smoking oil without moving until deeply browned (ATK 4955 1.5-2 min; NYT 1017970); cooked in two batches so the pan is not crowded (ATK 4955; ATK 12305); butter added after flipping and basted (ATK 4955), with garlic and thyme (NYT 1022471); lemon wedges (all). Doneness by the site rule for shellfish: just opaque at the centre.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 10 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/seared-scallops-garlic-thyme-butter-lemon-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
