// UI strings for English. Copy this file to ar.js / es.js and translate; set dir:'rtl' for Arabic.
const S = module.exports = {
  code: 'en', dir: 'ltr', name: 'English', ogLocale: 'en_GB',
  nav: { home: 'Home', recipes: 'Recipes', protein: 'High Protein', who: 'WHO Healthy', plans: 'Plans', login: 'Sign in' },
  categories: {
    'burgers-sandwiches': 'Burgers & sandwiches', chicken: 'Chicken', 'beef-lamb': 'Beef & lamb',
    'fish-seafood': 'Fish & seafood', 'pasta-noodles': 'Pasta & noodles', 'rice-grains': 'Rice & grains',
    vegetarian: 'Vegetarian', 'salads-bowls': 'Salads & bowls', 'soups-stews': 'Soups & stews',
    breakfast: 'Breakfast', 'snacks-sides': 'Snacks & sides', desserts: 'Desserts', drinks: 'Drinks'
  },
  groups: { salty: 'Salty', sweet: 'Sweet', more: 'More' },
  chapters: {
    burgers: { name: 'Burgers', intro: 'Smash burgers, chicken burgers and everything in a bun. Pick a dish, then pick your flavour.' },
    chicken: { name: 'Chicken', intro: 'Weeknight chicken that is big on flavour: skillets, curries, bowls and salads.' },
    pasta: { name: 'Pasta', intro: 'Quick pasta dinners with proper sauces, measured in grams so they come out right every time.' },
    'cookies-bars-brownies': { name: 'Cookies, bars & brownies', intro: 'Chewy cookies, fudgy brownies and traybakes, weighed for reliable results.' },
    'cakes-cupcakes': { name: 'Cakes & cupcakes', intro: 'Loaf cakes, layer cakes and cupcakes. Bake by weight and they work.' },
    more: { name: 'More recipes', intro: 'Breakfasts, soups, sides, drinks and more, while the next chapters are being written.' }
  },
  diets: { 'gluten-free': 'Gluten-free', 'dairy-free': 'Dairy-free', vegetarian: 'Vegetarian', vegan: 'Vegan', 'sugar-free': 'No added sugar' },
  difficulty: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
  allergens: {
    gluten: 'Cereals containing gluten', crustaceans: 'Crustaceans', eggs: 'Eggs', fish: 'Fish', peanuts: 'Peanuts',
    soybeans: 'Soybeans', milk: 'Milk', nuts: 'Tree nuts', celery: 'Celery', mustard: 'Mustard', sesame: 'Sesame',
    sulphites: 'Sulphites', lupin: 'Lupin', molluscs: 'Molluscs'
  },
  nutr: { kcal: 'Energy', protein_g: 'Protein', carbs_g: 'Carbohydrate', sugar_g: 'of which sugars', fat_g: 'Fat', satfat_g: 'of which saturates', salt_g: 'Salt', fibre_g: 'Fibre' },
  ui: {
    inspiredBy: 'Inspired by techniques from', and: 'and',
    originalNote: 'Our recipes are original, written by us and inspired by techniques from professional chefs and test kitchens. They are not affiliated with or endorsed by them.',
    prep: 'Prep', cook: 'Cook', total: 'Total', min: 'min', servings: 'Servings', difficulty: 'Difficulty',
    ingredients: 'Ingredients', method: 'Method', equipment: 'Equipment', tips: 'Tips', storage: 'Storage',
    allergens: 'Allergens (EU 14)', noAllergens: 'None of the 14 major EU allergens.', allergenNote: 'Always check the labels of the products you use.',
    nutrition: 'Nutrition per serving', perServing: 'per serving', proteinPer100: 'Protein per 100 kcal',
    nutritionNote: 'Estimated values', print: 'Print', cookMode: 'Cook mode', save: 'Save', saved: 'Saved',
    watch: '▶ Watch this step', whyHealthy: "Why it's healthy", meets: 'meets', limit: 'limit',
    ad: 'Advertisement', adPlaceholder: 'Ad placeholder', skipHero: 'Skip ↓', scroll: 'Scroll ↓',
    allRecipes: 'All recipes', search: 'Search recipes', searchPh: 'Burger, chickpeas, lemon…', category: 'Category', any: 'Any',
    allCats: 'All categories', time: 'Total time', diet: 'Diet', favOnly: 'My favourites only', clear: 'Clear filters',
    noResults: 'No recipes match those filters yet.', recipesCount: 'recipes', theme: 'Theme', menu: 'Menu',
    seeAll: 'See all recipes →', comingSoon: 'Coming soon', draft: 'Draft', placeholder: 'Placeholder',
    prev: '← Prev', chapters: 'Chapters', flavours: 'flavours', flavour: 'flavour', free: 'Free', premium: 'Premium',
    lockTitle: 'Unlock all flavours with Premium', lockText: 'This flavour is part of Premium. You can see the ingredients and nutrition; the quantities and the full method are for members.',
    lockCta: 'See Premium', lockSoon: 'Premium is coming soon. No payments are taken yet.', previewOn: 'Premium preview is on (test only).', previewOff: 'Turn off',
    chooseFlavour: 'Choose your flavour', otherDishes: 'More dishes in', next: 'Next →', exit: 'Exit cook mode', moreIn: 'More in', backTo: 'Back to'
  }
};

// Book chapters without a hand-written intro get a short generic one.
for (const c of require('../src/lib/book-chapters.json')) if (!S.chapters[c.key]) S.chapters[c.key] = { name: c.name, intro: `${c.name}: pick a dish, then pick your flavour.` };
