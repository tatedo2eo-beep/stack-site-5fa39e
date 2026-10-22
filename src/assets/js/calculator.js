/*! Joe's Stack Nutrition Calculator - vanilla JS, no dependencies.
 * Every formula and threshold below is cited in sources.md (S1, S2, ... refer to it).
 * Works in the browser (auto-binds to [data-nc]) and in Node (module.exports = NC).
 */
(function (root) {
  'use strict';

  // ---------- constants (each one is cited in sources.md) ----------
  var C = {
    KCAL_PER_G: { protein: 4, fat: 9, carb: 4 }, // S15 FAO (general Atwater factors)
    // S2 EFSA: PAL 1.4, 1.6, 1.8, 2.0 = low active (sedentary), moderately active, active, very active
    PAL: { sedentary: 1.4, moderate: 1.6, active: 1.8, very: 2.0 },
    DEFICIT_KCAL: 500,             // S3 AHA/ACC/TOS: energy deficit of 500 (or 750) kcal/day
    FLOOR_KCAL: { female: 1200, male: 1500 }, // S3: usual prescriptions 1200-1500 (women) / 1500-1800 (men)
    SURPLUS: 0.10,                 // S4 Iraki 2019: hyper-energetic diet ~10-20 %
    GAIN_PCT_WEEK: [0.25, 0.5],    // S4: weight gain ~0.25-0.5 % of body weight per week
    PROTEIN_PRI: 0.83,             // S5 EFSA PRI, g/kg/day, adults
    PROTEIN_OLDER_MIN: 1.0,        // S9 PROT-AGE / S10 ESPEN: at least 1.0-1.2 g/kg/day (>65 y)
    OLDER_AGE: 65,                 // S9: "older people (>65 years)"
    PROTEIN_MAX_ENERGY: 0.35,      // S13 AMDR protein 10-35 % of energy
    FAT_TARGET: 0.30,              // S11 WHO: total fat 30 % of energy or less
    FAT_MIN: 0.20,                 // S12 EFSA / S13 AMDR: 20-35 % of energy
    CARB_RDA_G: 130,               // S13 RDA carbohydrate 130 g/day
    CARB_REF: [0.45, 0.60],        // S12 EFSA reference intake range 45-60 E%
    SATFAT_MAX: 0.10,              // S11 WHO / S14 DGA 2025-2030: <=10 % of energy
    SUGAR_MAX: 0.10, SUGAR_IDEAL: 0.05, // S11 WHO free sugars <10 %, ideally <=5 %
    SALT_MAX_G: 5, SODIUM_MAX_MG: 2000, // S11 WHO / S17 WHO sodium fact sheet
    FIBRE_MIN_G: 25,               // S11 WHO / S12 EFSA: 25 g/day adults
    FIBRE_PER_1000: 14,            // S13 14 g per 1,000 kcal (DGA 2020-2025 appendix)
    FRUIT_VEG_G: 400,              // S11 WHO: at least 400 g/day
    WATER_L: { female: 2.0, male: 2.5 }, // S12 EFSA adequate total water intake
    BMI: { under: 18.5, over: 25, obese: 30 }, // S18 WHO
    MSJ_MAX_AGE: 78,               // S1: equation derived from people aged 19-78
    PROTEIN_RDA_US: 0.8,           // S6 Morton 2018: "the RDA of 0.8 g protein/kg/day"
    // Site rule (not research): Macro Meals = at least 10 g protein per 100 kcal
    MACRO_MEALS_G_PER_100KCAL: 10
  };

  // Sources shown on the page under each number (full quotes in sources.md)
  var SRC = {
    S1: ['Mifflin-St Jeor 1990 (Am J Clin Nutr)', 'https://pubmed.ncbi.nlm.nih.gov/2305711/'],
    S2: ['EFSA Dietary Reference Values summary 2017 (PAL 1.4-2.0)', 'https://www.efsa.europa.eu/sites/default/files/2017_09_DRVs_summary_report.pdf'],
    S3: ['AHA/ACC/TOS obesity guideline 2013', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5819889/'],
    S4: ['Iraki et al. 2019 (Sports)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6680710/'],
    S5: ['EFSA protein opinion 2012 (0.83 g/kg)', 'https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2012.2557'],
    S6: ['Morton et al. 2018 meta-analysis (Br J Sports Med)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5867436/'],
    S7: ['ISSN position stand on protein 2017', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/'],
    S8: ['Leidy et al. 2015 (Am J Clin Nutr)', 'https://pubmed.ncbi.nlm.nih.gov/25926512/'],
    S9: ['PROT-AGE 2013', 'https://pubmed.ncbi.nlm.nih.gov/23867520/'],
    S10: ['ESPEN 2014', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4208946/'],
    S11: ['WHO Healthy diet fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet'],
    S12: ['EFSA reference intakes (press release)', 'https://www.efsa.europa.eu/en/press/news/nda100326'],
    S13: ['US Dietary Guidelines 2020-2025, Appendix 1', 'https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf'],
    S14: ['US Dietary Guidelines 2025-2030', 'https://cdn.realfood.gov/DGA.pdf'],
    S15: ['FAO food energy factors 2003', 'https://www.fao.org/4/y5022e/y5022e04.htm'],
    S17: ['WHO sodium fact sheet', 'https://www.who.int/news-room/fact-sheets/detail/sodium-reduction'],
    S18: ['WHO BMI cut-offs', 'https://www.who.int/data/gho/data/themes/topics/topic-details/GHO/body-mass-index']
  };
  var PROFILE_SRC = { general: ['S14', 'S5', 'S6'], active: ['S7', 'S5'], lose: ['S8', 'S5'], 'active-lose': ['S8', 'S7'], lift: ['S6', 'S7'], 'lift-lose': ['S6', 'S7'] };
  var BASE = '/';   // site base path; read from data-base on the calculator element

  function round(x, step) { step = step || 1; return Math.round(x / step) * step; }
  function r1(x) { return Math.round(x * 10) / 10; }

  // S1 Mifflin-St Jeor 1990, simplified sex-specific form:
  // men: 10*kg + 6.25*cm - 5*age + 5 ; women: 10*kg + 6.25*cm - 5*age - 161
  function bmr(sex, kg, cm, age) {
    return 10 * kg + 6.25 * cm - 5 * age + (sex === 'male' ? 5 : -161);
  }

  function proteinPlan(p) {
    var activePAL = p.activity === 'active' || p.activity === 'very';
    var pr;
    if (p.lifts) {
      // S6 Morton 2018 break point 1.62 g/kg/d (95% CI 1.03-2.20); S4 Iraki 1.6-2.2; S7 ISSN 1.4-2.0
      pr = p.goal === 'lose'
        ? { range: [1.6, 2.2], target: 2.2, key: 'lift-lose' }
        : { range: [1.6, 2.2], target: 1.6, key: 'lift' };
    } else if (p.goal === 'lose') {
      // S8 Leidy 2015: 1.2-1.6 g/kg/d during weight loss; S7 ISSN 1.4-2.0 for exercising people
      pr = activePAL
        ? { range: [1.4, 2.0], target: 1.6, key: 'active-lose' }
        : { range: [1.2, 1.6], target: 1.6, key: 'lose' };
    } else if (activePAL) {
      pr = { range: [1.4, 2.0], target: 1.4, key: 'active' };      // S7 ISSN
    } else {
      pr = { range: [1.2, 1.6], target: 1.2, key: 'general' };     // S14 DGA 2025-2030
    }
    pr.older = p.age > C.OLDER_AGE;
    pr.min = pr.older ? C.PROTEIN_OLDER_MIN : C.PROTEIN_PRI;
    if (pr.older && pr.target < 1.2) pr.target = 1.2;               // S9: >=1.2 if active; 1.0-1.2 baseline
    return pr;
  }

  /**
   * compute(input) -> result. Pure function, no DOM.
   * input: { sex:'female'|'male', age, heightCm, weightKg,
   *          activity:'sedentary'|'moderate'|'active'|'very', lifts:bool,
   *          goal:'lose'|'maintain'|'gain', pregnant:bool, condition:bool }
   */
  function compute(input) {
    var p = input || {};
    var errors = [];
    if (p.sex !== 'female' && p.sex !== 'male') errors.push('Choose female or male.');
    if (!(p.age >= 1 && p.age <= 110)) errors.push('Enter your age in years (1 to 110).');
    if (!(p.heightCm >= 120 && p.heightCm <= 230)) errors.push('Enter a height between 120 and 230 cm.');
    if (!(p.weightKg >= 30 && p.weightKg <= 300)) errors.push('Enter a weight between 30 and 300 kg.');
    if (!C.PAL[p.activity]) errors.push('Choose an activity level.');
    if (['lose', 'maintain', 'gain'].indexOf(p.goal) < 0) errors.push('Choose a goal.');
    if (errors.length) return { status: 'error', errors: errors };

    if (p.age < 18) return { status: 'blocked', reason: 'under18' };
    if (p.pregnant) return { status: 'blocked', reason: 'pregnant' };
    if (p.condition) return { status: 'blocked', reason: 'condition' };

    var notes = [];
    var bmi = p.weightKg / Math.pow(p.heightCm / 100, 2);
    var bmiClass = bmi < C.BMI.under ? 'under' : bmi >= C.BMI.obese ? 'obese' : bmi >= C.BMI.over ? 'over' : 'healthy';
    if (p.age > C.MSJ_MAX_AGE) notes.push('ageOutside');

    var b = bmr(p.sex, p.weightKg, p.heightCm, p.age);
    var pal = C.PAL[p.activity];
    var tdee = b * pal;
    var floor = C.FLOOR_KCAL[p.sex];
    var target, adj = 'none';

    if (p.goal === 'lose') {
      if (bmiClass === 'under') { target = tdee; adj = 'underweightNoDeficit'; }
      else if (tdee <= floor) { target = tdee; adj = 'atFloor'; }
      else if (tdee - C.DEFICIT_KCAL < floor) { target = floor; adj = 'floor'; }
      else { target = tdee - C.DEFICIT_KCAL; adj = 'deficit'; }
    } else if (p.goal === 'gain') {
      target = tdee * (1 + C.SURPLUS); adj = 'surplus';
      if (!p.lifts) notes.push('gainNoLifting');
    } else {
      target = tdee;
    }
    target = round(target, 10);   // displayed calorie target; macros are built from this number

    // Protein
    var pr = proteinPlan(p);
    var proteinG = pr.target * p.weightKg;
    var proteinCapped = false;
    var maxProteinG = target * C.PROTEIN_MAX_ENERGY / C.KCAL_PER_G.protein;
    if (proteinG > maxProteinG) { proteinG = maxProteinG; proteinCapped = true; }
    proteinG = round(proteinG);

    // Fat at 30 % of energy; lowered (never below 20 %) only if carbs would drop below 130 g
    var fatPct = C.FAT_TARGET;
    var proteinKcal = proteinG * C.KCAL_PER_G.protein;
    var carbG = (target - proteinKcal - target * fatPct) / C.KCAL_PER_G.carb;
    if (carbG < C.CARB_RDA_G) {
      var needed = (target - proteinKcal - C.CARB_RDA_G * C.KCAL_PER_G.carb) / target;
      fatPct = Math.max(C.FAT_MIN, Math.min(C.FAT_TARGET, needed));
    }
    var fatG = round(target * fatPct / C.KCAL_PER_G.fat);
    carbG = round((target - proteinKcal - fatG * C.KCAL_PER_G.fat) / C.KCAL_PER_G.carb);
    if (carbG < 0) carbG = 0;
    var carbPct = carbG * C.KCAL_PER_G.carb / target;
    if (carbG < C.CARB_RDA_G) notes.push('carbBelowRDA');

    var res = {
      status: 'ok',
      inputs: p,
      bmi: r1(bmi), bmiClass: bmiClass,
      bmr: round(b), pal: pal, tdee: round(tdee), target: target, adjustment: adj, floor: floor,
      gainKgWeek: p.goal === 'gain' ? [r1(p.weightKg * C.GAIN_PCT_WEEK[0] / 100 * 10) / 10, r1(p.weightKg * C.GAIN_PCT_WEEK[1] / 100 * 10) / 10] : null,
      protein: {
        g: proteinG, gPerKg: r1(proteinG / p.weightKg * 10) / 10, targetGPerKg: pr.target,
        range: pr.range, rangeG: [round(pr.range[0] * p.weightKg), round(pr.range[1] * p.weightKg)],
        minGPerKg: pr.min, minG: round(pr.min * p.weightKg), profile: pr.key, older: pr.older,
        capped: proteinCapped, pct: Math.round(proteinKcal / target * 100),
        perMealG: [round(proteinG / 4), round(proteinG / 3)],
        mmKcal: round(proteinG / C.MACRO_MEALS_G_PER_100KCAL * 100, 10)
      },
      fat: { g: fatG, pct: Math.round(fatG * C.KCAL_PER_G.fat / target * 100), minG: round(target * C.FAT_MIN / C.KCAL_PER_G.fat), satMaxG: round(target * C.SATFAT_MAX / C.KCAL_PER_G.fat) },
      carbs: { g: carbG, pct: Math.round(carbPct * 100), belowRDA: carbG < C.CARB_RDA_G },
      fibreG: Math.max(C.FIBRE_MIN_G, round(target * C.FIBRE_PER_1000 / 1000)),
      sugar: { maxG: round(target * C.SUGAR_MAX / C.KCAL_PER_G.carb), idealG: round(target * C.SUGAR_IDEAL / C.KCAL_PER_G.carb) },
      salt: { maxG: C.SALT_MAX_G, sodiumMg: C.SODIUM_MAX_MG },
      waterL: C.WATER_L[p.sex],
      fruitVegG: C.FRUIT_VEG_G,
      notes: notes
    };
    if (p.activity === 'active' || p.activity === 'very') res.notes.push('waterActive');
    return res;
  }

  // ---------- DOM layer ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(n) { return Number(n).toLocaleString('en-GB'); }

  var PROFILE_TEXT = {
    'general': 'For most adults who don\u2019t train hard. The EU minimum to avoid shortfall is 0.83 g/kg; the current US Dietary Guidelines (2025\u20132030) suggest 1.2\u20131.6 g/kg, so we start at 1.2.',
    'active': 'You\u2019re active, so you use and repair more protein. The International Society of Sports Nutrition says 1.4\u20132.0 g/kg covers most exercising people; we start at 1.4.',
    'lose': 'Eating less can cost you muscle as well as fat. Reviews of weight-loss studies found 1.2\u20131.6 g/kg helps keep muscle and keeps you fuller, so we use the top of that range.',
    'active-lose': 'You\u2019re active and eating less, so protein helps protect muscle. We use 1.6 g/kg: the top of the weight-loss range (1.2\u20131.6) and inside the sports range (1.4\u20132.0).',
    'lift': 'For lifting, a large 2018 meta-analysis found muscle gains level off at about 1.6 g/kg a day (some people benefit up to about 2.2), so 1.6 is the target and 2.2 the sensible top.',
    'lift-lose': 'Lifting while eating less is when protein matters most for keeping muscle. We use 2.2 g/kg, the upper end of the 2018 meta-analysis range; sports-nutrition experts say lean lifters may even need more.'
  };

  function srcs(ids) {
    return '<p class="nc-src">Source' + (ids.length > 1 ? 's' : '') + ': ' + ids.map(function (k) {
      return '<a href="' + SRC[k][1] + '" target="_blank" rel="noopener">' + esc(SRC[k][0]) + '</a>';
    }).join(' \u00b7 ') + '</p>';
  }

  function render(res) {
    if (res.status === 'error') {
      return '<div class="nc-warn" role="alert"><p>' + res.errors.map(esc).join('<br>') + '</p></div>';
    }
    if (res.status === 'blocked') {
      var msg = {
        under18: '<strong>This calculator is for adults (18+).</strong> Teenagers are still growing, so adult formulas and calorie cuts don\u2019t apply. For advice on eating well while growing, talk to a GP, school nurse or registered dietitian. Our recipes are fine for the whole family as normal meals.',
        pregnant: '<strong>We don\u2019t give numbers during pregnancy or breastfeeding.</strong> Your energy and protein needs change by trimester and while feeding, so please ask your midwife, doctor or a registered dietitian.',
        condition: '<strong>We don\u2019t give numbers when you have a medical condition</strong> (for example diabetes, kidney disease, an eating disorder, or if you take medicine that affects weight or appetite). Please ask your doctor or a registered dietitian; for some conditions, such as kidney disease, high protein can be harmful.'
      }[res.reason];
      return '<div class="nc-note" role="status"><p>' + msg + '</p></div>';
    }

    var p = res.inputs, pr = res.protein;
    var h = [];
    function stat(label, value, sub, why, extra, cls) {
      h.push('<article class="nc-stat' + (cls ? ' ' + cls : '') + '"><h3 class="nc-stat-label">' + label + '</h3><p class="nc-stat-value">' + value + '</p>' +
        (sub ? '<p class="nc-stat-sub">' + sub + '</p>' : '') + (why ? '<p class="nc-stat-why">' + why + '</p>' : '') + (extra || '') + '</article>');
    }

    var goalWhy = {
      none: 'This is roughly what you burn in a day, so eating about this much should keep your weight steady.',
      deficit: 'That\u2019s 500 kcal below what you burn, the moderate deficit used in medical weight-loss guidelines. Expect slow, steady loss rather than fast results.',
      floor: 'A full 500 kcal cut would take you below ' + fmt(res.floor) + ' kcal, the lowest level guidelines usually prescribe without medical supervision, so we stopped there.',
      atFloor: 'You already burn about ' + fmt(res.floor) + ' kcal or less, so we won\u2019t suggest eating less. Moving more, or a chat with a dietitian, is the safer route.',
      underweightNoDeficit: 'Your BMI is under 18.5 (WHO: underweight), so we don\u2019t suggest a deficit. This shows your maintenance calories; please talk to a doctor before trying to lose weight.',
      surplus: 'That\u2019s about 10% above what you burn, the low end of the 10\u201320% surplus suggested for building muscle. Aim to gain about ' + (res.gainKgWeek ? res.gainKgWeek[0] + '\u2013' + res.gainKgWeek[1] : '') + ' kg a week; faster usually means more fat.'
    }[res.adjustment];

    var macro = '<div class="nc-bar" role="img" aria-label="Protein ' + pr.pct + '%, fat ' + res.fat.pct + '%, carbs ' + res.carbs.pct + '% of calories">' +
      '<span class="nc-bar-p" style="width:' + pr.pct + '%"></span><span class="nc-bar-f" style="width:' + res.fat.pct + '%"></span><span class="nc-bar-c" style="width:' + res.carbs.pct + '%"></span></div>' +
      '<p class="nc-range">Your calories split: protein ' + pr.pct + '% \u00b7 Fat ' + res.fat.pct + '% \u00b7 Carbs ' + res.carbs.pct + '%</p>';
    stat('Daily calories', fmt(res.target) + ' kcal',
      'Maintenance (TDEE) \u2248 ' + fmt(res.tdee) + ' kcal \u00b7 BMR \u2248 ' + fmt(res.bmr) + ' kcal',
      'Your BMR is what your body burns at rest (Mifflin-St Jeor formula); we multiply it by ' + res.pal + ' for your activity level to get your daily burn. ' + goalWhy,
      macro + srcs(['S1', 'S2'].concat(res.adjustment === 'surplus' ? ['S4'] : p.goal === 'lose' ? ['S3'] : []).concat(res.adjustment === 'underweightNoDeficit' ? ['S18'] : [])), 'nc-span-all');

    var protWhy = PROFILE_TEXT[pr.profile];
    if (pr.older) protWhy += ' Over 65, experts advise at least 1.0\u20131.2 g/kg (1.2+ if you\u2019re active), because muscles respond less to protein with age.';
    if (pr.capped) protWhy += ' At your weight that would be more than 35% of your calories (the top of the accepted range), so we capped it there.';
    var protIds = PROFILE_SRC[pr.profile].slice();
    if (pr.older) protIds.push('S9', 'S10');
    if (pr.capped) protIds.push('S13');
    stat('Protein', pr.g + ' g a day', pr.gPerKg + ' g per kg \u00b7 range ' + pr.range[0] + '\u2013' + pr.range[1] + ' g/kg (' + pr.rangeG[0] + '\u2013' + pr.rangeG[1] + ' g) \u00b7 minimum ' + pr.minG + ' g (' + (pr.older ? '1.0 g/kg over 65' : 'EU 0.83 g/kg; US RDA 0.8 g/kg') + ')',
      protWhy,
      '<p class="nc-stat-why">Split it over 3\u20134 meals: about ' + pr.perMealG[0] + '\u2013' + pr.perMealG[1] + ' g each. <strong>With our recipes:</strong> <a href="' + BASE + 'macro-meals/">Macro Meals</a> (coming soon) will give at least ' + C.MACRO_MEALS_G_PER_100KCAL + ' g protein per 100 kcal, so ' + pr.g + ' g of protein would fit in about ' + fmt(pr.mmKcal) + ' kcal of them.</p>' + srcs(protIds));

    stat('Fat', res.fat.g + ' g a day', res.fat.pct + '% of calories \u00b7 don\u2019t go below about ' + res.fat.minG + ' g (20%) \u00b7 saturated fat under ' + res.fat.satMaxG + ' g',
      'Fat is essential: it carries vitamins A, D, E and K and supplies fats your body can\u2019t make. WHO suggests keeping it to about 30% of calories, mostly from olive oil, nuts, seeds and fish rather than butter and fatty meat.',
      srcs(['S11', 'S12', 'S13', 'S15']));

    stat('Carbs', res.carbs.g + ' g a day', res.carbs.pct + '% of calories (what\u2019s left after protein and fat)',
      'Carbs are your main fuel for training and your brain. Choose whole grains, beans, fruit and veg' +
      (res.carbs.belowRDA ? '. Your number is under 130 g, the amount the brain is estimated to need, so don\u2019t cut carbs further.' : (res.carbs.pct < 45 ? '. It\u2019s a bit under the usual 45\u201360% because your protein is higher, which is fine.' : '.')),
      srcs(['S13', 'S12', 'S15']));


    stat('Fibre', 'at least ' + res.fibreG + ' g', 'WHO and EFSA: 25 g minimum; US guidance: 14 g per 1,000 kcal',
      'Fibre keeps digestion regular and is linked to lower risk of heart disease and type 2 diabetes. Beans, lentils, oats, whole grains and at least ' + res.fruitVegG + ' g of fruit and veg a day get you there.',
      srcs(['S11', 'S12', 'S13']));

    stat('Free sugar', 'under ' + res.sugar.maxG + ' g', 'ideally under ' + res.sugar.idealG + ' g (5% of calories)',
      'Free sugar means added sugar plus honey, syrups and fruit juice, not the sugar inside whole fruit or plain milk. WHO advises under 10% of calories, and under 5% for extra benefit.',
      srcs(['S11', 'S15']));

    stat('Salt', 'under ' + res.salt.maxG + ' g', 'that\u2019s ' + fmt(res.salt.sodiumMg) + ' mg sodium, about one teaspoon',
      'Too much salt raises blood pressure. Most salt comes from bread, sauces, stock cubes and ready meals, so check labels and taste before adding more.',
      srcs(['S11', 'S17']));

    stat('Water', 'about ' + res.waterL.toFixed(1) + ' litres', 'total from drinks and food',
      'This is the EU reference for adults in a mild climate with moderate activity; food usually provides part of it.' +
      (res.notes.indexOf('waterActive') >= 0 ? ' You\u2019re active, so drink extra around exercise and in hot weather.' : ' Drink more when it\u2019s hot or you sweat a lot.'), srcs(['S12']), 'nc-span-all');

    var extra = [];
    if (res.bmiClass !== 'healthy') extra.push('Your BMI is ' + res.bmi + ' (WHO cut-offs: ' + { under: 'underweight, under 18.5', over: 'overweight, 25 or more', obese: 'obesity, 30 or more' }[res.bmiClass] + '). BMI doesn\u2019t tell muscle from fat, so treat it as a rough guide.');
    if (res.notes.indexOf('gainNoLifting') >= 0) extra.push('Building muscle needs resistance training. Without it, extra calories mostly become fat, so consider adding 2\u20133 strength sessions a week.');
    if (res.notes.indexOf('ageOutside') >= 0) extra.push('The calorie formula was built from people aged 19\u201378, so it is less certain for you. Use it as a starting point and adjust.');
    if (pr.capped && res.bmiClass === 'obese') extra.push('Protein per kg works best for lean people; at a higher body weight a dietitian can set a more precise number.');
    extra.push('These are estimates. Formulas can be off by 10% or more for any one person, so track your weight for 2\u20133 weeks and adjust by about 100\u2013200 kcal if it isn\u2019t moving the way you want.');

    return '<p class="nc-summary">For a ' + p.age + '-year-old ' + (p.sex === 'male' ? 'man' : 'woman') + ', ' + Math.round(p.heightCm) + ' cm, ' + r1(p.weightKg) + ' kg (BMI ' + res.bmi + '):</p>' +
      '<div class="nc-results">' + h.join('') + '</div>' +
      extra.map(function (t) { return '<div class="nc-note"><p>' + t + '</p></div>'; }).join('');
  }

  function bind(rootEl) {
    var f = rootEl.querySelector('form');
    if (rootEl.getAttribute('data-base')) BASE = rootEl.getAttribute('data-base');
    var out = rootEl.querySelector('[data-nc-out]');
    if (!f || !out) return;
    function q(n) { return f.elements[n]; }
    function radio(n) { var el = f.querySelector('input[name="' + n + '"]:checked'); return el ? el.value : ''; }
    function num(n) { var v = q(n) && q(n).value; return v === '' || v == null ? NaN : parseFloat(String(v).replace(',', '.')); }

    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var kg = num('nc-kg'), cm = num('nc-cm');   // metric only
      var res = compute({
        sex: radio('nc-sex'), age: num('nc-age'), heightCm: cm, weightKg: kg,
        activity: q('nc-activity').value, lifts: radio('nc-lift') === 'yes', goal: radio('nc-goal'),
        pregnant: !!(q('nc-pregnant') && q('nc-pregnant').checked), condition: !!(q('nc-condition') && q('nc-condition').checked)
      });
      out.innerHTML = render(res);
      out.classList.remove('nc-hidden');
      out.setAttribute('tabindex', '-1');
      out.focus({ preventScroll: true });
      out.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });

    // Pregnancy option only makes sense for the female option
    function syncSex() { var w = rootEl.querySelector('[data-nc-preg]'); if (w) { var fem = radio('nc-sex') === 'female'; w.classList.toggle('nc-hidden', !fem); if (!fem) q('nc-pregnant').checked = false; } }
    f.addEventListener('change', function (e) { if (e.target.name === 'nc-sex') syncSex(); });
    syncSex();
  }

  var NC = { compute: compute, render: render, bmr: bmr, constants: C, bind: bind };
  if (typeof module !== 'undefined' && module.exports) module.exports = NC;
  else root.NutritionCalc = NC;

  if (typeof document !== 'undefined') {
    var start = function () { document.querySelectorAll('[data-nc]').forEach(bind); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  }
})(typeof window !== 'undefined' ? window : this);
