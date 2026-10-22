// Recipe schema validation, allergen/diet checks and the healthy-label rules.
// Everything here is computed from the recipe JSON; nothing is tagged by hand.
'use strict';

const CATEGORIES = ['burgers-sandwiches', 'chicken', 'beef-lamb', 'fish-seafood', 'pasta-noodles', 'rice-grains',
  'vegetarian', 'salads-bowls', 'soups-stews', 'breakfast', 'snacks-sides', 'desserts', 'drinks'];
const DIFFICULTY = ['easy', 'medium', 'hard'];
const DIETS = ['gluten-free', 'dairy-free', 'vegetarian', 'vegan', 'sugar-free'];
const NUTR = ['kcal', 'protein_g', 'carbs_g', 'sugar_g', 'free_sugar_g', 'fat_g', 'satfat_g', 'salt_g', 'fibre_g'];
const UNITS_OK = ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'pc', 'pinch', 'to taste', 'slice', 'clove', 'sprig', 'leaf',
  'bunch', 'handful', 'can', 'tin', 'stick', 'sheet', 'dash', 'drop'];
const UNITS_BANNED = /^(cups?|c|oz|ounces?|fl ?oz|lbs?|pounds?|pints?|quarts?|gallons?|sticks? of butter)$/i;

// EU 14 allergens (Regulation (EU) No 1169/2011, Annex II): canonical key -> accepted spellings
const ALLERGENS = {
  gluten: ['cereals containing gluten', 'gluten', 'wheat', 'cereals'],
  crustaceans: ['crustaceans', 'crustacean', 'shellfish (crustaceans)'],
  eggs: ['eggs', 'egg'],
  fish: ['fish'],
  peanuts: ['peanuts', 'peanut'],
  soybeans: ['soybeans', 'soybean', 'soy', 'soya'],
  milk: ['milk', 'dairy', 'lactose'],
  nuts: ['nuts', 'tree nuts', 'tree-nuts', 'nut'],
  celery: ['celery', 'celeriac'],
  mustard: ['mustard'],
  sesame: ['sesame', 'sesame seeds'],
  sulphites: ['sulphites', 'sulfites', 'sulphur dioxide', 'sulphur dioxide and sulphites', 'sulfur dioxide'],
  lupin: ['lupin', 'lupine'],
  molluscs: ['molluscs', 'mollusks', 'mollusc']
};
const ALLERGEN_KEYS = Object.keys(ALLERGENS);
function normAllergen(a) {
  const s = String(a).trim().toLowerCase();
  return ALLERGEN_KEYS.find(k => ALLERGENS[k].includes(s)) || null;
}

// Ingredient keyword -> allergen. strong = auto-added (with a warning); weak = warning only.
const NOT = (re, ex) => ({ re, ex });
const ALLERGEN_HINTS = {
  gluten: { strong: [NOT(/\b(wheat|flour|bread|breadcrumbs?|panko|buns?|brioche|baguette|pitta?|tortillas?|wraps?|pasta|spaghetti|penne|fusilli|tagliatelle|linguine|lasagne|macaroni|noodles?|couscous|bulgu?r|freekeh|barley|rye|spelt|semolina|seitan|soy sauce|beer|crackers?|biscuits?|pastry|filo|phyllo|croutons?)\b/, /(gluten[- ]free|rice (flour|noodles?)|corn ?flour|cornflour|almond flour|chickpea flour|gram flour|buckwheat|rice paper|tamari|coconut flour)/)],
           weak: [NOT(/\boats?\b|\boatmeal\b/, /gluten[- ]free/)] },
  milk: { strong: [NOT(/\b(milk|butter|buttermilk|cheese|cheddar|parmesan|parmigiano|mozzarella|feta|halloumi|ricotta|mascarpone|paneer|labneh|cream|creme fraiche|crème fraîche|yogh?urt|ghee|whey|kefir|custard|brioche)\b/, /(coconut|almond|oat|soy|soya|rice|cashew|plant|vegan|dairy[- ]free|peanut|nut|cocoa|shea|apple) (milk|butter|cream|yogh?urt|cheese)|cream of tartar|coconut cream|ice cream substitute/)] },
  eggs: { strong: [NOT(/\b(eggs?|egg yolks?|egg whites?|mayonnaise|mayo|aioli|meringue|brioche|hollandaise)\b/, /(vegan|egg[- ]free) (mayo|mayonnaise)|eggplant/)] },
  fish: { strong: [NOT(/\b(fish|salmon|tuna|cod|haddock|hake|pollock|anchov(y|ies)|sardines?|mackerel|trout|sea ?bass|tilapia|halibut|sole|plaice|monkfish|swordfish|bonito|dashi)\b/, /fish-free/)] },
  crustaceans: { strong: [NOT(/\b(prawns?|shrimps?|crabs?|lobsters?|crayfish|langoustines?|scampi)\b/, /^$/)] },
  molluscs: { strong: [NOT(/\b(mussels?|clams?|oysters?|squid|calamari|octopus|scallops?|cockles?|whelks?|oyster sauce)\b/, /oyster mushrooms?/)] },
  peanuts: { strong: [NOT(/\b(peanuts?|peanut butter|groundnuts?|satay)\b/, /^$/)] },
  nuts: { strong: [NOT(/\b(almonds?|hazelnuts?|walnuts?|cashews?|pecans?|pistachios?|macadamias?|brazil nuts?|praline|marzipan|frangipane)\b/, /^$/)] },
  soybeans: { strong: [NOT(/\b(soy|soya|tofu|edamame|miso|tempeh|tamari)\b/, /^$/)] },
  celery: { strong: [NOT(/\b(celery|celeriac)\b/, /^$/)], weak: [NOT(/\b(stock|bouillon)\b/, /celery-free/)] },
  mustard: { strong: [NOT(/\bmustard\b/, /^$/)], weak: [NOT(/\b(mayonnaise|mayo|curry powder)\b/, /^$/)] },
  sesame: { strong: [NOT(/\b(sesame|tahini|tahina|halva|halwa|za'?atar)\b/, /^$/)] },
  sulphites: { strong: [NOT(/\b(wine|dried apricots?|sherry|port|vermouth|cider)\b/, /^$/)], weak: [NOT(/\b(vinegar|pickles?|gherkins?|dried fruit|raisins?)\b/, /^$/)] },
  lupin: { strong: [NOT(/\blupin/, /^$/)] }
};

const MEAT_FISH = /\b(beef|veal|steak|chicken|turkey|duck|goose|pork|bacon|ham|pancetta|prosciutto|chorizo|salami|sausages?|lamb|mutton|goat|venison|mince(?!d garlic)|meatballs?|gelatine?|lard|suet|anchov(y|ies)|fish|salmon|tuna|cod|prawns?|shrimps?|crab|lobster|mussels?|squid|octopus|scallops?|oyster sauce|fish sauce|worcestershire|dashi|bone broth|chicken stock|beef stock|fish stock)\b/;
const MEAT_FISH_EX = /(veg(etari)?an|plant[- ]based|meat[- ]free|soy|mushroom) (mince|sausages?|bacon|meatballs?|stock|chicken)|vegetable stock|eggplant/;
const ANIMAL = /\b(honey|eggs?|milk|butter|cheese|cream|yogh?urt|ghee|whey|mayonnaise|mayo|brioche)\b/;
const ANIMAL_EX = /(vegan|plant|coconut|almond|oat|soy|soya|peanut|nut|cocoa|cashew|egg[- ]free|dairy[- ]free) (milk|butter|cream|yogh?urt|cheese|mayo|mayonnaise)|coconut cream|eggplant/;
const ADDED_SUGAR = /\b(sugar|caster|icing sugar|honey|syrup|molasses|treacle|agave|jam|marmalade|ketchup|sweetened|condensed milk|dulce de leche|nutella|chocolate|caramel|date syrup|fruit juice|orange juice|apple juice)\b/;
const ADDED_SUGAR_EX = /(sugar snap|sugar[- ]free|unsweetened|no added sugar|lemon juice|lime juice|dark chocolate 9\d%)/;

// Fruit and vegetables (WHO counts these, but not potatoes and other starchy roots)
const VEG = /\b(tomato(es)?|cherry tomatoes|spinach|lettuce|little gem|rocket|arugula|watercress|kale|chard|cabbage|pak choi|bok choy|broccoli|broccolini|cauliflower|carrots?|onions?|red onions?|spring onions?|shallots?|leeks?|bell peppers?|(red|green|yellow|orange) peppers?|capsicums?|courgettes?|zucchini|aubergines?|eggplants?|cucumbers?|mushrooms?|peas|green beans|runner beans|asparagus|celery|fennel|beetroot|radish(es)?|okra|pumpkin|squash|sweetcorn|corn kernels|artichokes?|avocados?|apples?|bananas?|berries|strawberries|blueberries|raspberries|blackberries|mangoes|mango|oranges?|pineapple|pears?|peaches|peach|grapes|melon|watermelon|pomegranate|figs?|cherries|kiwis?|apricots?|plums?|dates|raisins|lemons?|limes?)\b/;
const VEG_EX = /\b(juice|zest|stock|sauce|ketchup|paste|powder|purée? concentrate|ground|dried chilli|black pepper|white pepper|pepper flakes|cayenne|potato|sweet potato|cassava|yam|plantain|jam|syrup|oil)\b/;
const PC_WEIGHT = [[/cherry tomato/, 15], [/tomato/, 120], [/red onion|onion/, 150], [/spring onion/, 15], [/shallot/, 30], [/carrot/, 80],
  [/pepper|capsicum/, 160], [/courgette|zucchini/, 200], [/aubergine|eggplant/, 300], [/cucumber/, 300], [/avocado/, 150],
  [/apple/, 150], [/banana/, 120], [/pear/, 170], [/orange/, 150], [/peach/, 150], [/mango/, 200],
  [/lettuce leaves|leaves/, 10], [/lettuce|little gem/, 150], [/mushroom/, 20], [/leek/, 150]];

function vegGramsPerServing(r) {
  let g = 0;
  for (const ing of r.ingredients) {
    const item = (ing.item || '').toLowerCase();
    if (!VEG.test(item) || VEG_EX.test(item) || typeof ing.qty !== 'number') continue;
    if (ing.unit === 'g') g += ing.qty;
    else if (ing.unit === 'kg') g += ing.qty * 1000;
    else if (ing.unit === 'pc') { const w = PC_WEIGHT.find(([re]) => re.test(item)); if (w && !/lemon|lime/.test(item)) g += ing.qty * w[1]; }
    else if (ing.unit === 'handful') g += ing.qty * 30;
  }
  return g / r.servings;
}

const textOf = ing => `${ing.item || ''} ${ing.note || ''}`.toLowerCase();
const itemOf = ing => (ing.item || '').toLowerCase();
function hit(rules, s) { return (rules || []).some(({ re, ex }) => re.test(s) && !ex.test(s)); }

const DIET_ALIASES = { 'no-added-sugar': 'sugar-free', 'no added sugar': 'sugar-free', 'gluten free': 'gluten-free', 'dairy free': 'dairy-free', 'glutenfree': 'gluten-free' };
function normDiet(r) { if (Array.isArray(r.diet)) r.diet = [...new Set(r.diet.map(d => DIET_ALIASES[String(d).toLowerCase()] || String(d).toLowerCase()))]; return r; }

// ---------- validation ----------
function validate(r, file) {
  normDiet(r);
  const E = [], W = [];
  const req = (k, ok, msg) => { if (!ok) E.push(`${k}: ${msg}`); };
  const isStr = v => typeof v === 'string' && v.trim().length > 0;
  const isNum = v => typeof v === 'number' && isFinite(v);
  req('slug', isStr(r.slug) && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug), 'lowercase-kebab string required');
  if (file && r.slug && !file.endsWith(`${r.slug}.json`)) W.push(`file name should be ${r.slug}.json`);
  req('title', isStr(r.title), 'required');
  req('category', CATEGORIES.includes(r.category), `one of ${CATEGORIES.join(', ')}`);
  req('cuisine', isStr(r.cuisine), 'required');
  req('summary', isStr(r.summary), 'required');
  req('servings', Number.isInteger(r.servings) && r.servings > 0 && r.servings <= 48, 'integer 1-48');
  req('prep_min', isNum(r.prep_min) && r.prep_min >= 0, 'number >= 0');
  req('cook_min', isNum(r.cook_min) && r.cook_min >= 0, 'number >= 0');
  req('difficulty', DIFFICULTY.includes(r.difficulty), 'easy|medium|hard');
  req('equipment', Array.isArray(r.equipment) && r.equipment.every(isStr), 'array of strings');
  req('ingredients', Array.isArray(r.ingredients) && r.ingredients.length > 0, 'non-empty array');
  (r.ingredients || []).forEach((ing, i) => {
    const p = `ingredients[${i}]`;
    if (!ing || typeof ing !== 'object') return E.push(`${p}: object required`);
    req(p + '.item', isStr(ing.item), 'required');
    req(p + '.qty', ing.qty === null || (isNum(ing.qty) && ing.qty > 0), 'positive number or null');
    req(p + '.unit', isStr(ing.unit), 'required');
    if (isStr(ing.unit)) {
      if (UNITS_BANNED.test(ing.unit.trim())) E.push(`${p}.unit: "${ing.unit}" is not metric (use g, ml, tsp, tbsp, pc...)`);
      else if (!UNITS_OK.includes(ing.unit)) W.push(`${p}.unit: unusual unit "${ing.unit}"`);
      if (ing.unit === 'to taste' && ing.qty !== null) W.push(`${p}: "to taste" should have qty null`);
      if (ing.unit !== 'to taste' && ing.qty === null) W.push(`${p}: qty null but unit is "${ing.unit}"`);
    }
    if (/\b(cups?|oz|ounces?|lbs?)\b/i.test(`${ing.item} ${ing.note || ''}`)) W.push(`${p}: mentions imperial units`);
    if (ing.group !== undefined && !isStr(ing.group)) E.push(`${p}.group: string`);
  });
  req('steps', Array.isArray(r.steps) && r.steps.length > 0, 'non-empty array');
  (r.steps || []).forEach((s, i) => {
    req(`steps[${i}].title`, s && isStr(s.title), 'required');
    req(`steps[${i}].text`, s && isStr(s.text), 'required');
    if (s && s.clip !== undefined && s.clip !== null && !isStr(s.clip)) E.push(`steps[${i}].clip: string`);
    if (s && /\b\d+\s?°F\b|\bcups?\b|\boz\b/.test(s.text || '')) W.push(`steps[${i}]: mentions imperial units`);
  });
  req('tips', Array.isArray(r.tips) && r.tips.every(isStr), 'array of strings');
  req('storage', isStr(r.storage), 'required');
  req('allergens', Array.isArray(r.allergens), 'array');
  (r.allergens || []).forEach(a => { if (!normAllergen(a)) E.push(`allergens: "${a}" is not one of the EU 14`); });
  req('diet', Array.isArray(r.diet), 'array');
  (r.diet || []).forEach(d => { if (!DIETS.includes(d)) E.push(`diet: "${d}" unknown (${DIETS.join(', ')})`); });
  const n = r.nutrition_per_serving;
  req('nutrition_per_serving', n && typeof n === 'object', 'object');
  if (n && typeof n === 'object') {
    NUTR.forEach(k => req('nutrition_per_serving.' + k, isNum(n[k]) && n[k] >= 0, 'number >= 0'));
    if (isNum(n.kcal) && n.kcal <= 0 && r.category !== 'drinks') E.push('nutrition_per_serving.kcal: must be > 0');
    if (n.free_sugar_g > n.sugar_g + 0.05) E.push('free_sugar_g cannot exceed sugar_g');
    if (n.satfat_g > n.fat_g + 0.05) E.push('satfat_g cannot exceed fat_g');
    if (n.sugar_g > n.carbs_g + 0.05) E.push('sugar_g cannot exceed carbs_g');
    if (isNum(n.kcal) && n.kcal > 20) {
      const est = 4 * n.protein_g + 4 * n.carbs_g + 9 * n.fat_g + 2 * n.fibre_g;
      const dev = Math.abs(est - n.kcal) / n.kcal;
      if (dev > 0.15) W.push(`kcal ${n.kcal} vs ${Math.round(est)} from macros (${Math.round(dev * 100)}% off) - check nutrition`);
    }
  }
  req('nutrition_source', isStr(r.nutrition_source), 'required');
  req('image', r.image === null || isStr(r.image), 'string or null');
  req('image_alt', isStr(r.image_alt) || r.image === null, 'required when image is set');
  return { errors: E, warnings: W };
}

// Allergens: declared + auto-detected strong hits. Returns {list, added, maybe}
function checkAllergens(r) {
  const declared = new Set((r.allergens || []).map(normAllergen).filter(Boolean));
  const added = [], maybe = [];
  for (const [k, h] of Object.entries(ALLERGEN_HINTS)) {
    if (declared.has(k)) continue;
    for (const ing of r.ingredients) {
      const s = textOf(ing);
      if (hit(h.strong, s)) { declared.add(k); added.push(`${k} (from "${ing.item}")`); break; }
      if (hit(h.weak, s)) { maybe.push(`${k}? (from "${ing.item}")`); break; }
    }
  }
  return { list: ALLERGEN_KEYS.filter(k => declared.has(k)), added, maybe };
}

// Diet tags: keep only declared tags that the ingredients and allergens support.
function checkDiet(r, allergens) {
  const A = new Set(allergens);
  const items = r.ingredients.map(itemOf);
  const anyItem = (re, ex) => items.find(s => re.test(s) && !(ex && ex.test(s)));
  const ok = [], dropped = [];
  for (const d of r.diet || []) {
    let why = null;
    if (d === 'gluten-free' && A.has('gluten')) why = 'contains gluten';
    if (d === 'dairy-free' && A.has('milk')) why = 'contains milk';
    if (d === 'vegetarian' || d === 'vegan') {
      const m = anyItem(MEAT_FISH, MEAT_FISH_EX);
      if (m) why = `contains "${m}"`;
      else if (A.has('fish') || A.has('crustaceans') || A.has('molluscs')) why = 'contains fish/shellfish allergen';
    }
    if (d === 'vegan' && !why) {
      const m = anyItem(ANIMAL, ANIMAL_EX);
      if (m) why = `contains "${m}"`; else if (A.has('milk') || A.has('eggs')) why = 'contains milk/eggs allergen';
    }
    if (d === 'sugar-free') {
      const m = anyItem(ADDED_SUGAR, ADDED_SUGAR_EX);
      if (m) why = `contains "${m}"`; else if (r.nutrition_per_serving.free_sugar_g > 0.5) why = 'free sugars > 0.5 g per serving';
    }
    if (why) dropped.push(`${d}: ${why}`); else ok.push(d);
  }
  // vegan implies vegetarian + dairy-free
  if (ok.includes('vegan')) { for (const t of ['vegetarian', 'dairy-free']) if (!ok.includes(t)) ok.push(t); }
  return { list: DIETS.filter(d => ok.includes(d)), dropped };
}

// ---------- healthy labels ----------
const HP_MIN = 10; // g protein per 100 kcal
const MEAL_SALT_MAX = 1.7; // g per main-meal serving = 5 g/day / 3 main meals
const NON_MEAL = ['snacks-sides', 'desserts', 'drinks'];
const r1 = x => Math.round(x * 10) / 10;

function health(r) {
  const n = r.nutrition_per_serving, kcal = n.kcal;
  const p100 = kcal > 0 ? n.protein_g / kcal * 100 : 0;
  const highProtein = { pass: kcal > 0 && p100 >= HP_MIN, value: r1(p100), threshold: HP_MIN };
  const pct = (g, f) => kcal > 0 ? g * f / kcal * 100 : Infinity;
  const isMeal = !NON_MEAL.includes(r.category);
  const saltMax = isMeal ? MEAL_SALT_MAX : Math.round(5 * kcal / 2000 * 100) / 100;
  const fibreMin = Math.round(25 * kcal / 2000 * 10) / 10;
  const veg = Math.round(vegGramsPerServing(r));
  const checks = [
    { key: 'fat', label: 'Total fat', value: r1(pct(n.fat_g, 9)), unit: '% of energy', op: '≤', limit: 30, pass: pct(n.fat_g, 9) <= 30 },
    { key: 'satfat', label: 'Saturated fat', value: r1(pct(n.satfat_g, 9)), unit: '% of energy', op: '<', limit: 10, pass: pct(n.satfat_g, 9) < 10 },
    { key: 'sugar', label: 'Free sugars', value: r1(pct(n.free_sugar_g, 4)), unit: '% of energy', op: '<', limit: 10, pass: pct(n.free_sugar_g, 4) < 10 },
    { key: 'salt', label: 'Salt', value: n.salt_g, unit: 'g', op: '≤', limit: saltMax, pass: n.salt_g <= saltMax,
      note: isMeal ? 'one third of the WHO 5 g/day limit (main meal)' : 'energy share of 5 g per 2000 kcal (snack, side, dessert or drink)' },
    { key: 'fibreveg', label: 'Fibre or fruit & veg', value: `${n.fibre_g} g fibre / ${veg} g veg`, unit: '', op: '≥',
      limit: `${fibreMin} g fibre or 80 g fruit & veg`, pass: n.fibre_g >= fibreMin || veg >= 80 }
  ];
  const who = { pass: kcal > 0 && checks.every(c => c.pass), checks, veg };
  return { highProtein, who };
}

module.exports = { CATEGORIES, DIETS, ALLERGEN_KEYS, validate, checkAllergens, checkDiet, health, vegGramsPerServing, HP_MIN, MEAL_SALT_MAX };
