# Research: Crisp Salt and Pepper Squid with Chilli, Garlic and Spring Onion
Dish: Salt and pepper squid / flavour: Classic. Private file, not published.

## Sources actually opened
- [Salt and Pepper Squid (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/15979-salt-and-pepper-squid-jiaoyan-xianyou) [Tier 1 (locked list): America's Test Kitchen]: Squid rings coated in a cornflour-flour batter; fried in 3 batches about 2 min until light golden, oil kept hot between batches; drained on a rack; garlic, ginger, chillies and scallions cooked in a little frying oil in a wok, squid tossed with a salt, white pepper and five-spice mix. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Salt and Pepper Shrimp (NYT Cooking)](https://cooking.nytimes.com/recipes/1025494-salt-and-pepper-shrimp) [Tier 2 (locked list): NYT Cooking]: Salt and ground pepper mix made first; shellfish patted dry and tossed in cornflour; fried in batches until barely golden and crisp, drained on a rack; garlic fried in 2 tbsp oil until just golden, chillies 30 s, heat off, then the fried shellfish tossed in with the salt and pepper mix. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Five-Spice Crisp-Fried Squid (NYT Cooking)](https://cooking.nytimes.com/recipes/1016314-five-spice-crisp-fried-squid) [Tier 2 (locked list): NYT Cooking]: Squid rinsed and patted dry; cornflour seasoned with salt, pepper, cayenne and five-spice; fried at 375 °F without crowding about 2 min until lightly browned; chillies, coriander and lime wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Fried Squid (NYT Cooking)](https://cooking.nytimes.com/recipes/1012707-fried-squid) [Tier 2 (locked list): NYT Cooking]: Squid blotted between layers of paper towels; floured and shaken in a sieve; fried in batches about 2 min until lightly browned and cooked through; do not overcook; lemon wedges. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the seafood chapter. Quantities are my own; the core method matches the locked-list sources listed above; nothing copied. Fish cooked to at least 63 °C and shellfish until opaque (site rules, FSIS), regardless of the lower pull temperatures some sources give.

## Own cooking judgment
- Squid blotted very dry (NYT 1012707; NYT 1016314; NYT 1025494); a dry cornflour-based coating shaken off (NYT 1016314; NYT 1025494; NYT 1012707 sieve); fried in batches without crowding about 2 min until light golden (ATK 15979; NYT 1016314 375 °F; NYT 1012707 do not overcook); drained on a rack (ATK; NYT 1025494); garlic and chillies cooked in a little oil, heat off, squid tossed with the salt and pepper mix and spring onions (NYT 1025494; ATK 15979); lime wedges (NYT 1016314). My own: cornflour plus a little plain flour for the coating; white and black pepper with no MSG or five-spice.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 20 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/crisp-salt-pepper-squid-chilli-garlic-spring-onion-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 4. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Salt given in grams (06-G1): 0.75 tsp fine salt -> 4.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
