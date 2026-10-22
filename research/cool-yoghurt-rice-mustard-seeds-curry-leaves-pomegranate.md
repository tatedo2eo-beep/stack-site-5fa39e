# Research: Cool Yoghurt Rice with Mustard Seeds, Curry Leaves and Pomegranate
Dish: Curd rice / flavour: Classic. Private file, not published.

## Sources actually opened
- [Curd Rice, Indian Rice with Yogurt (Serious Eats)](https://www.seriouseats.com/curd-rice-indian-rice-with-yogurt) [Tier 1 (locked list): Serious Eats]: Long-grain rice cooked with butter, water and salt about 20 min; curd chillies fried in oil until golden; mustard seeds popped in oil, then asafoetida, cumin and curry leaves fried about 10 s; spice oil mixed into the rice with thick yoghurt and salt; pomegranate seeds, coriander and fried chillies to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Cumin and Cashew Yogurt Rice (NYT Cooking)](https://cooking.nytimes.com/recipes/1024605-cumin-and-cashew-yogurt-rice) [Tier 2 (locked list): NYT Cooking]: Room-temperature cooked basmati mixed with ginger and salt, then full-fat yoghurt folded in until it resembles a thick rice pudding; cashews and green chilli cooked in ghee 2-3 min, cumin seeds toasted 30-60 s, chilli powder and asafoetida stirred in; poured over the rice with coriander. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the rice chapter. Quantities are my own (salt, stock and soy set to keep each serving at about 3 g salt or less); the core method matches the locked-list sources listed above; nothing copied. Ham, mirin, fish sauce, kombu and seasoning granules in the sources are not used.

## Own cooking judgment
- Long-grain rice cooked with water and salt about 20 min (SE); rice cooled before the yoghurt is folded in (NYT); ginger and salt (NYT); yoghurt mixed in until it looks like a thick rice pudding (NYT; SE); cashews and green chilli fried in fat (NYT); mustard seeds popped, then cumin, asafoetida and curry leaves fried briefly (SE; NYT) and poured over (NYT; SE); pomegranate and coriander (SE). Extra water for very soft rice, milk to loosen, dried chillies in place of curd chillies and the cooling and no-reheat rules are my own.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 25 min against the step times.
- Quantities checked against servings (4). Nutrition worked from USDA FDC (see content/notes/cool-yoghurt-rice-mustard-seeds-curry-leaves-pomegranate-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C9 (curry base).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Storage: added "refrigerate within 2 hours" line (06-G9)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
