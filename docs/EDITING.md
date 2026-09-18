# Editing the website

These paths describe the GitHub/downloaded version. In the Sites authoring checkout, public website files are under `dist/`.

## Text, prices, and shop details

Edit `index.html` with a text editor. Search for the text you want to change, and keep the surrounding HTML tags intact.

| Change | Where to update |
| --- | --- |
| Haircut + beard price | Description metadata, orange price strip, and service card |
| Shape-up price | Description metadata, orange price strip, and service card |
| Chair rental price and terms | Description metadata and the `chairs` section |
| Hours | Hero notes, price strip, and visit section |
| Phone number | All visible phone numbers plus every `tel:` and `sms:` link |
| Address | Visit section, directions URL, and location text |
| Main colors | Variables at the start of `assets/css/styles.css` |

Phone links use international format, for example `tel:+14842746879`. Text links use `sms:+14842746879`. Calling and texting require a compatible application on the visitor's device. Keep the visible phone number as a fallback.

Update README shop information when you change the public details.

## Photos

Place new photographs in `assets/images/`. In `index.html`, update each image's `src`, `alt`, `width`, and `height` to match the new file. The dimensions should be the image's actual pixel dimensions; CSS handles display size. Use only images the shop is allowed to publish, and retain a backup before replacing originals.

## Connect online booking

The current booking section asks the customer to call or text; it does not show unverified availability or claim that a booking is confirmed.

When the shop has a working booking page:

1. Get the shop's exact customer-facing appointment URL from its booking provider.
2. In the `book` section, add an anchor using that URL and the label `Choose a day and time`. Keep the phone and text options available.
3. Update the section copy to explain that customers select a service and time on that booking page.
4. Test the booking page on a phone. Confirm that service prices, business hours, staff, and confirmation messages are correct.

Do not place secret API keys in HTML, JavaScript, or a GitHub repository. A secure server and real scheduling integration are required before replacing the external booking page with an embedded custom appointment system.

## Check before publishing

Open the website on a phone and a computer. Check the navigation menu, service details, photos, booking links, and directions. Use Tab and Enter to check the menu with a keyboard. Upload the complete `assets/` folder along with the HTML files so no photographs or styles are missing.

If you change hosting domains, update the live-site links in README and the home link in `404.html`.
