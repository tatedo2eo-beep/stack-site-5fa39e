# Chef Knowledge Base: Index

> **Private. Not for publication.** Built 22 Oct 2026 (Africa/Cairo) for writing and checking the site's recipes. Sources are restricted to `SOURCES-LOCKED.md`. Every cited URL was opened and read (curl or WebFetch) and no quote was invented. Chef and outlet names live **only** in these files.

## How to use
1. Before writing a recipe, read the topic file. Take the ratios, temperatures, sequencing and cues from it.
2. After drafting, run **`CHECKLIST.md`** line by line.
3. Where a file notes a **Disagreement → Pick**, follow the pick (usually the safer or more tested option).
4. The site's safety minimums (06-G9) override any chef's doneness preference.

## Files

| File | Topic | Techniques | Unique source URLs | Main sources |
|---|---|---|---|---|
| `01-burgers-ground-meat.md` | Burgers and ground meat | 15 (B1–B15) | 24 | Serious Eats (Kenji), ATK, Gordon Ramsay, AmazingRibs (Meathead), FSIS, FoodSafety.gov |
| `02-chicken.md` | Chicken | 11 (C1–C11) | 32 | Serious Eats (incl. Keller and Ricker excerpts), ATK, AmazingRibs, NYT Cooking (incl. Dunlop Gong Bao), Jacques Pépin (KQED), Madhur Jaffrey (Happy Foodie), FSIS, FoodSafety.gov |
| `03-cookies-bars-brownies.md` | Cookies, bars, brownies, blondies, shortbread, sugar cookies, macarons | 13 (K1–K13) | 29 | Serious Eats, ATK, King Arthur, NYT Cooking, Dorie Greenspan, Paul Hollywood, Mary Berry, Sugar Geek Show, Pierre Hermé, Le Cordon Bleu, Milk Bar (Tosi), FSIS, FoodSafety.gov |
| `04-pasta.md` | Pasta | 10 (P1–P10) | 17 | Serious Eats (Gritzer, Kenji), NYT Cooking (Hazan adaptations, Melissa Clark, Ian Fisher), ATK, FSIS, FoodSafety.gov |
| `05-cakes.md` | Cakes, genoise, buttercreams, chocolate tempering and ganache | 13 (CK1–CK13) | 39 | King Arthur, ATK, Serious Eats (Stella Parks, Kenji), Sugar Geek Show, École Valrhona, Pierre Hermé, Le Cordon Bleu, NYT (Saffitz, Greenspan), Milk Bar (Tosi), Rose Levy Beranbaum, Mary Berry, Dominique Ansel (reference only) |
| `06-general.md` | Seasoning, balance, browning, heat, frying safety, emulsions, knife cuts, food safety, stocks, mother sauces, rice and grains | 12 (G1–G12) | 38 | ATK, Serious Eats, Le Cordon Bleu, CIA, ICE, FSIS, FoodSafety.gov, NYT/Hazan |
| `CHECKLIST.md` | Recipe review checklist | 7 sections (pass 2 lines added for every new topic) | — | cross-references the files above |
| `SOURCES-LOCKED.md` | Approved source list (maintained by others, read-only) | — | — | — |

**Totals (after pass 2):** 74 techniques and 157 unique URLs across all files. Per-file counts add up to more than that because shared URLs, such as the FSIS chart, are cited in several files.

**Video-derived items:** 3 of the allowed ~10, all from written companion pages, tagged [V]:
- Gordon Ramsay, "Burger in 10 Minutes"
- Serious Eats / Wursthall smash burger
- KQED Jacques Pépin, trussing

The Le Cordon Bleu macaronage page is a "technique video" page, but only its **written recipe** was used, and it is not counted as a video. No video was watched.

**Claude Code:** not used, so there is no log entry.

**Verification:** every cited URL was opened.
- Most were fetched by curl to a raw cache, with HTTP 200 and the text read.
- Sugar Geek Show, AmazingRibs, FSIS, FoodSafety.gov and two NYT Cooking recipes block curl. These were read in full with WebFetch.
- None of the banned outlets are cited, and a grep of the files confirmed it.

## House safety overrides (apply everywhere)
- Ground meat **71 °C**. All poultry **74 °C**, measured before it leaves the heat. Whole cuts **63 °C + 3 min**. Egg dishes **71 °C**. Leftovers reheated to **74 °C**.
- Raw or lightly cooked egg needs a pasteurised-egg note. Raw dough or flour needs a do-not-eat-raw note.
- Chef recommendations below these temperatures (medium-rare burgers, 65 °C chicken breast) are recorded but **not used**.

## Pass 2 changes (22 Oct 2026)
- **New techniques:**
  - 03-K9 blondies (expanded), K11 shortbread, K12 sugar cookies, K13 macarons
  - 05-CK11 genoise, CK12 buttercreams (American, Swiss, Italian, cream cheese), CK13 chocolate tempering and ganache
  - 06-G10 stocks, G11 mother sauces and roux, G12 rice and grains
  - 02-C11 Dunlop stir-fry marinade and Ricker brined, air-dried birds
- **Additions to existing techniques:** Keller roast chicken (02-C8), Saffitz oil sponge (05-CK6), Tosi high-liquid creaming (05-CK3).
- **Re-verified from the full pages:**
  - **AmazingRibs wet vs dry brine (02-C3):** the figures match the page, and more figures were added.
  - **Meathead dry-brining (02-C2):** the page was re-read. The dry-brine strength is **corrected to 0.5–0.7 %** (it previously said about 1 %), in 02-C2, 06-G1 and CHECKLIST.
  - **Hazan butter-and-onion tomato sauce (04-P9):** re-read from NYT. The page gives both "2 cups" and "a 28-oz can", so the ambiguity is noted. Serious Eats corroborates the method but not the quantities, so the numbers are still single-source.
- **Safety picks made:**
  - Swiss meringue at **85 °C** (Stella Parks), not 43 °C (Sugar Geek).
  - Stock kept **2 days** chilled (ATK), not 5 (SE).
  - Rice leftovers follow G9 (3–4 days), not SE's 1 week.
  - Milk and white chocolate melted at **≤ 45 °C**: Valrhona says 45–50 °C, King Arthur 40 °C.

## Known gaps (consolidated, after pass 2)
- **Locked-list names still without a readable allowed-outlet text:**
  - **Cédric Grolet:** only book listings and a Le Cordon Bleu event page.
  - **Harold McGee:** curiouscook.typepad is Cloudflare-blocked to curl and WebFetch, and his NYT columns return 403.
  - **Modernist Cuisine:** the pages that open are blog or video announcements with no figures. modernistcookingathome.com is a fan blog, not cited.
  - **Heston Blumenthal:** only on Epicurious (banned), SBS, The Times, Great British Chefs and Michelin.
  - **Aaron Franklin:** the NYT article is empty or 403; the other copies are MasterClass or blogs.
  - **Samin Nosrat:** the NYT page has no readable text.
  - Massimo Bottura and FERRANDI were not searched this pass.
  - Bread and pizza names are out of scope.
- **Partly drawn on:**
  - **Tosi:** milkbarstore.com was used for the blondie cue and the cake creaming. Most Milk Bar recipes are behind a login or are mix-based.
  - **Ansel:** his site has only a yogurt cake and a banana bread, kept as reference formulas.
  - **Saffitz:** sponge cake only; no cookie recipe found.
- **Topics still not covered:** oat cookies; angel food (detailed); chocolate cakes with hot liquid; laminated and entremets work; stand-alone velveting (the Serious Eats page timed out or returned 403).
- **Single-source items, labelled in the files:**
  - Hazan quantities (04-P9)
  - Dunlop marinade amounts (02-C11)
  - risotto numbers (06-G12)
  - stock gelatin fix (06-G10)
  - Tosi creaming variant (05-CK3)
  - Ansel formulas (05 gaps)
  - reduced cream for milk and white chocolate ganache (05-CK13)
- **Outlet flag:** Mary Berry (shortbread) and Madhur Jaffrey come from thehappyfoodie.co.uk, the publisher's book-excerpt site. The authors are on the locked list, but the outlet is not named on it. Confirm with Joe if he wants outlet-level strictness.
- **Labelled house rules (unsourced):**
  - burger build order (01)
  - texture-contrast rule (06-G2)
  - fryer fill level (06-G6)
  - discarding shellfish that stay shut (06-G9)
  - 8×8 blondie scaling and timing start (03-K9, marked own judgment)
