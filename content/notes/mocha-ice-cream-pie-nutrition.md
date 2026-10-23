# Nutrition working: Mocha Ice Cream Pie

Servings: 12. Source: USDA FoodData Central per-100 g values (SR Legacy/FDC ids listed). Energy uses the USDA kcal value for each food. Salt = sodium x 2.5. Free sugars = sugars from added sugar, honey, chocolate, ketchup, bread/buns, mayonnaise, vanilla and citrus juice (WHO definition; whole or mashed fruit, milk and yoghurt sugars are not free).

| Ingredient | USDA food | g | kcal | protein | carbs | sugar | free sugar | fat | sat fat | sodium mg | fibre |
|---|---|---|---|---|---|---|---|---|---|---|---|
| chocolate biscuit crumbs | ESTIMATE: chocolate wafer biscuit crumbs, typical label values | 206 | 892.0 | 13.6 | 148.3 | 61.80 | 61.80 | 28.8 | 9.27 | 1236 | 7.2 |
| icing sugar | Sugars, powdered (FDC 169656) | 28 | 108.9 | 0.0 | 27.9 | 27.39 | 27.39 | 0.0 | 0.00 | 1 | 0.0 |
| fine salt | Salt, table (SR 02047) | 1.5 | 0.0 | 0.0 | 0.0 | 0.00 | 0.00 | 0.0 | 0.00 | 581 | 0.0 |
| unsalted butter, melted | Butter, without salt (SR 01145) | 57 | 408.7 | 0.5 | 0.0 | 0.03 | 0.00 | 46.2 | 29.28 | 6 | 0.0 |
| chocolate sauce | ESTIMATE: thin chocolate syrup (sugar, cocoa, water), typical label values | 99 | 267.3 | 2.0 | 64.3 | 54.45 | 54.45 | 1.0 | 0.49 | 69 | 2.5 |
| cold whole milk | Milk, whole, 3.25% milkfat, with added vitamin D (FDC 171265) | 227 | 138.5 | 7.2 | 10.9 | 11.46 | 0.00 | 7.4 | 4.23 | 98 | 0.0 |
| caster sugar | Sugars, granulated (SR 19335) | 149 | 576.6 | 0.0 | 149.0 | 148.70 | 148.70 | 0.0 | 0.00 | 1 | 0.0 |
| instant espresso powder | Beverages, coffee, instant, regular, powder (FDC 171893) | 11 | 38.8 | 1.3 | 8.3 | 0.00 | 0.00 | 0.1 | 0.02 | 4 | 0.0 |
| Dutch-process cocoa powder | Cocoa, dry powder, unsweetened, processed with alkali (FDC 169594) | 11 | 24.2 | 2.0 | 6.4 | 0.19 | 0.00 | 1.4 | 0.85 | 2 | 3.3 |
| cold double cream | Cream, fluid, heavy whipping (FDC 170859) | 454 | 1543.6 | 12.9 | 12.9 | 13.26 | 0.00 | 163.8 | 104.57 | 123 | 0.0 |
| vanilla | Vanilla (USDA SR 02050) | 4 | 11.5 | 0.0 | 0.5 | 0.51 | 0.51 | 0.0 | 0.00 | 0 | 0.0 |
| chocolate sandwich biscuits, broken into small pieces (optional) | ESTIMATE: chocolate sandwich cookies with cream filling, typical label values (SR 18166 range) | 113 | 542.4 | 5.2 | 78.0 | 42.94 | 42.94 | 22.6 | 6.21 | 452 | 3.2 |
| double cream (113-227 g) | Cream, fluid, heavy whipping (FDC 170859) | 170 | 578.0 | 4.8 | 4.8 | 4.96 | 0.00 | 61.3 | 39.15 | 46 | 0.0 |
| icing sugar (7-14 g) | Sugars, powdered (FDC 169656) | 10 | 38.9 | 0.0 | 10.0 | 9.78 | 9.78 | 0.0 | 0.00 | 0 | 0.0 |
| extra chocolate sandwich biscuits, broken (optional) | ESTIMATE: chocolate sandwich cookies with cream filling, typical label values (SR 18166 range) | 30 | 144.0 | 1.4 | 20.7 | 11.40 | 11.40 | 6.0 | 1.65 | 120 | 0.8 |
| extra chocolate sauce, for drizzling | ESTIMATE: thin chocolate syrup (sugar, cocoa, water), typical label values | 40 | 108.0 | 0.8 | 26.0 | 22.00 | 22.00 | 0.4 | 0.20 | 28 | 1.0 |
| **Total** | | | 5421 | 51.6 | 568.1 | 408.88 | 378.97 | 339.1 | 195.94 | 2768 | 18.0 |

**Per serving (total / 12):** kcal 452, protein_g 4.3, carbs_g 47.3, sugar_g 34.1, free_sugar_g 31.6, fat_g 28.3, satfat_g 16.3, salt_g 0.58, fibre_g 1.5

## Checks
- Protein per 100 kcal: 1.0 g -> High Protein (>=10): no
- Fat energy: 56% (<=30%: fail)
- Sat fat energy: 32.5% (<10%: fail)
- Free sugar energy: 28.0% (<10%: fail)
- Salt: 0.58 g/serving (modest = <= 1.7 g, about a third of WHO's 5 g/day: pass)
- WHO Healthy by these numbers: no

## Assumptions
- Salt: 1 tsp fine salt taken as 6 g.
- Contains caffeine from the espresso powder.
- An ice-cream maker is needed.
