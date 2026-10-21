# E-COnnect

**A little less waste. A lot more possibility.**

E-COnnect is a public sustainability web app that helps people choose a practical next step for things they already own: reuse, repair, donation, recycling or special handling.

**Website:** https://pallleuva.github.io/e-connect/

## The problem

People can want to do the right thing and still be unsure where an item belongs. Local programs have different rules: Naperville’s electronics collection excludes loose batteries; its hazardous-waste facility accepts batteries and oil-based paint but not latex paint. The [City of Aurora’s recycling resources](https://www.aurora.il.us/City-Services/Environment-and-Sustainability/Recycling) describe its Feed the Cart effort to reduce recycling contamination. E-COnnect brings these separate decisions into an item-by-item workflow.

This prototype is grounded in public program guidance. It does **not** claim completed community interviews, proven behavioral change, or measured environmental impact. Direct interviews and usability research are next steps.

## What works

- Search 15 everyday item categories with common synonyms.
- Optional, real browser-side object detection using TensorFlow.js / COCO-SSD. Uploaded photos stay in browser memory. The user must confirm the item category and condition.
- Condition-aware recommendations, with damaged-battery, broken-bulb and leaking-container handling overrides.
- Five curated regional resource listings, with original sources, acceptance notes and links to maps or official location finders.
- Save a personal checklist, tick preparation steps, record completed actions, and export a text copy.
- Responsive layout, keyboard-accessible forms and dialogs, reduced-motion support, and meaningful empty/error states.

## Scope and limitations

The first local pilot covers **Aurora, Naperville and the Fox Valley, Illinois**. Elgin’s Habitat ReStore is explicitly marked as a regional option, not an Aurora location. Outside this area, general ideas remain available but no personalized local facilities are recommended. Directory data is curated, not a live API: verify hours, eligibility, prices and accepted items with the provider before visiting. No partnerships, bookings, pickups or third-party communication are implied.

The object detector recognizes a limited set of COCO categories, such as laptops, phones, books, bottles and furniture. It cannot determine a bottle’s material, identify hazardous substances, diagnose damage, or guarantee recycling acceptance. Low-confidence or unsupported detections fall back to manual selection. The recommendation engine is deterministic, not generated environmental advice.

Counts are **self-reported actions**, not measured waste diversion or carbon savings. Browser storage is local to a device/browser and may be cleared. There is no backend, account system, shared marketplace, live availability or cloud synchronization.

## Run locally

No build or package installation is needed. Serve this directory using any static web server, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. JavaScript modules require HTTP rather than opening `index.html` directly as a file.

Tests use Node.js 18+ built-ins; no dependencies need to be installed:

```sh
npm run check
npm test
```

## Architecture

| File | Purpose |
| --- | --- |
| `index.html` | Accessible app shell, initial content, original vector illustration and dialogs |
| `style.css` | Responsive styling and print layout |
| `data.js` | Item catalog, source records, directory and model-to-item mapping |
| `engine.js` | Pure search, condition, recommendation and stored-data validation functions |
| `app.js` | Navigation, rendering, local persistence, photo detection and export |
| `tests/engine.test.js` | Coverage for all item/condition/community combinations and safety boundaries |

The site is deployed from the root of the `main` branch through **GitHub Pages**. `.nojekyll` enables direct static-file serving. There are no secrets or API keys.

## Privacy and third-party dependencies

Photos are not uploaded. They are held in browser memory and released when the photo dialog closes. They are never saved to local storage. Only the selected community and checklist are stored under the `econnect-city` and `econnect-plans` keys. The app has no analytics or advertising.

GitHub Pages serves the site. Google Fonts supplies DM Sans and Manrope. Photo identification loads **TensorFlow.js 4.22.0** and **COCO-SSD 2.2.3** from jsDelivr, then model weights from Google's hosting. These providers receive ordinary network requests and associated network metadata; the photo itself is not part of those requests. Links to organizations and Google Maps open external sites with their own policies.

Third-party model code and weights retain their upstream licenses. See [TensorFlow.js](https://github.com/tensorflow/tfjs), [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) and the [Google Fonts catalog](https://fonts.google.com/). App artwork and icons are original code-generated SVGs. Implementation and writing were developed with AI assistance and should be disclosed according to the event’s rules.

## Sources

Compiled and checked **October 20, 2026**. Short summaries are provided in the app; the original provider pages govern current acceptance.

- [City of Aurora recycling](https://www.aurora.il.us/City-Services/Environment-and-Sustainability/Recycling)
- [Naperville electronics recycling](https://www.naperville.il.us/services/garbage-and-recycling/electronics-recycling/)
- [Naperville household hazardous waste](https://www.naperville.il.us/services/garbage-and-recycling/household-hazardous-waste-facility/)
- [Naperville clothing and textiles](https://www.naperville.il.us/services/garbage-and-recycling/clothing-and-textile-recycling/)
- [Naperville curbside recycling](https://www.naperville.il.us/services/garbage-and-recycling/curbside-recycling-program/)
- [Naperville food scrap composting](https://www.naperville.il.us/services/garbage-and-recycling/food-scrap-compost/)
- [Goodwill Greater Milwaukee & Chicago donor guidelines](https://www.goodwillgreatermc.org/donate/donate-items/donor-guidelines)
- [Habitat Northern Fox Valley ReStore donations](https://habitatnfv.org/restores-northern-fox-valley/donate/)
- [US EPA used household batteries](https://www.epa.gov/recycle/used-household-batteries)

## Suggested demonstration

1. Search for a laptop, select **Needs repair**, and generate the next steps.
2. Save the checklist, tick a preparation step, and show the source-backed collection options.
3. Search for batteries and select **Swollen, damaged or leaking**. Explain why ordinary drop-off recommendations disappear.
4. Try a clear photo of a book or laptop. Confirm the category before generating guidance.
5. Complete an action in **My next steps** and export the checklist.

## Next steps

Interview local residents and waste-program staff; test usability with the people affected; add verified directories for more communities; record source update history; evaluate the image detector on a labeled test set; offer translations and improved offline support.
