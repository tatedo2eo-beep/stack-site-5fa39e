// Food-safety lines (raw egg / pasteurised eggs, raw fish frozen first, raw beef, 63-80 °C internal-temperature
// checks, allergy notes, hot-oil safety). They belong in a recipe's `safety` field (shown in the '⚠️ Food safety'
// box above the ingredients), never in `tips` (which the cat narrates). Same rules as /workspace/rw/safety/classify.py.
const BOIL = ["Don't taste the raw dough", 'Frying safety:', 'RAW NOTE', 'EGG NOTE', 'Egg safety', '71 °C cooked-egg method'];
const A = /pasteuri|pregnan|immun|vulnerable|elderly|very young|young children|older (people|adults)|anyone unwell|parasit|raw egg|raw-egg|raw flour|raw meat|raw chicken|raw beef|eaten raw|is not cooked|cross-contam|allerg|coeliac|celiac|food[- ]safe|for safety|safely cooked|safe ice cream|a safe (temperature|\d)|safe temperature|reached a safe|cooked safely|safe, fully cooked|safely cold|room temperature for 2 hours|within 2 hours|unattended|caffeine|salmonella|listeria|bacteria|germs|food poison|label for (egg|nut|gluten)|nut-free, in case|is safe at|fully cooked rather than raw|catches fire|never (move|pour|strain)[^.;]*hot oil|hot oil splashes|nut[^.;]*check[^.;]*label|cashews, so check the label|at least 7[14] ?°C|in case of burns|never fill an oil pot/i;
const T = /\b(63|70|71|72|73|74|75|80)\s?°C/i;
const MEAT = /chicken|beef|lamb|mince|meat|turkey|duck|\begg|yolk|thigh|liver|meatball|steak|filling|centre|center|thickest|broth|\bpot\b|kebab|loaf|flatbread|\bbird|bone|piece|batch|custard|pudding|reheat/i;
const NOT = /syrup|\boil\b|matcha|kombu|wobble|crack|means it only needs|at the same time|stay tender|heart turns|rather than boiling|without the outside overbrowning|turn the heat down/i;
const KEEP_EXACT = ['Sashimi-grade salmon works in exactly the same way.'];
function isSafetyLine(t) {
  if (typeof t !== 'string' || KEEP_EXACT.includes(t)) return false;
  if (BOIL.some(b => t.startsWith(b))) return true;
  if (A.test(t)) return true;
  return T.test(t) && MEAT.test(t) && !NOT.test(t);
}
// Build-time guard: any safety line still sitting in tips (e.g. a new recipe) moves to safety, wording unchanged.
function splitSafety(r) {
  const tips = (r.tips || []).filter(Boolean), safety = (r.safety || []).filter(Boolean);
  const moved = tips.filter(isSafetyLine);
  r.tips = tips.filter(x => !isSafetyLine(x));
  r.safety = safety.concat(moved.filter(x => !safety.includes(x)));
  return moved.length;
}
module.exports = { isSafetyLine, splitSafety };
