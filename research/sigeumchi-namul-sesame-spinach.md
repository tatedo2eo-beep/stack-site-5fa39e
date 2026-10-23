# Research: Sigeumchi Namul (Korean Sesame Spinach)
Dish: Namul / flavour: Spinach (sigeumchi). Private file, not published.

## Sources actually opened
- [Sigeumchi Namul (Serious Eats)](https://www.seriouseats.com/korean-marinated-spinach-banchan-sigeumchi-namul) [Tier 1 (locked list): Serious Eats]: Mature spinach blanched about 30 seconds, shocked in iced water, wrung dry and seasoned with vinegar, garlic, sesame oil, spring onion and sesame seeds. _(web search result; full recipe ingredients and directions text read (direct fetch 403/timeout))_
- [Korean Spinach (NYT Cooking)](https://cooking.nytimes.com/recipes/8828-korean-spinach) [Tier 2 (locked list): NYT Cooking]: Spinach blanched about 1 min, shocked and squeezed dry, then tossed with sesame oil, soy sauce, garlic, spring onion and sesame seeds. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list source(s) listed above; nothing copied.

## Own cooking judgment
- Wrung into a ball and cut into lengths.
- Dressing worked in by hand.
- A touch of rice vinegar.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 10 min + cook 5 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/sigeumchi-namul-sesame-spinach-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Sulphites added to allergens (vinegar, hot sauce or mustard may contain them)
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
