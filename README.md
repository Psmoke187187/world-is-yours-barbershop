# World Is Yours Barbershop

The complete, responsive website for World Is Yours Barbershop in Allentown, Pennsylvania. Built with plain HTML, CSS, and JavaScript. No framework, paid plugin, installation, or build step is required.

[Open the website](https://world-is-yours-barbershop.gsantiago0829.chatgpt.site) · [GitHub repository](https://github.com/Psmoke187187/world-is-yours-barbershop)

## Files and folders

In the GitHub repository, the publishable website is at the root:

| Path | Purpose |
| --- | --- |
| `index.html` | Home, services, haircut gallery, chair rental, booking, and location |
| `assets/css/styles.css` | Colors, typography, layout, and responsive styling |
| `assets/js/main.js` | Accessible mobile navigation |
| `assets/images/` | Eight existing shop/work photos, including the logo photo |
| `favicon.svg` | Browser tab icon |
| `404.html` | Page-not-found screen |
| `.nojekyll` | Keeps the HTML website buildless on GitHub Pages |
| `docs/EDITING.md` | How to update prices, contact details, photos, and booking |
| `.gitignore` | Excludes local files and credentials |

The Sites authoring checkout keeps these public files inside `dist/`, with this README and `docs/` alongside it. Its `.openai/hosting.json` points to `dist`. The GitHub copy contains the same public files directly at the root so `index.html` opens immediately after downloading it.

## Open on your computer

1. On GitHub, choose **Code → Download ZIP** and extract it.
2. Open `index.html` in a browser. No setup is needed.
3. For a local web server, run `python3 -m http.server 8000` in the downloaded folder, then open `http://localhost:8000`.

In the Sites authoring checkout, open `dist/index.html`, or run `python3 -m http.server 8000 --directory dist` instead.

## Included

- Responsive layouts for phones, tablets, and computers.
- Haircut + beard: **$35**; shape-up: **$20**.
- Existing shop photos and haircut gallery.
- Barber chair information: **$160 per week**.
- Call, text, and Google Maps directions links.
- Booking section for customers to request a day, time, and service by phone or text.
- Keyboard-accessible navigation, skip link, focus indicators, and reduced-motion support.
- Relative asset paths that work from a downloaded folder and from a hosted subdirectory.

## Shop information

- **Name:** World Is Yours Barbershop
- **Address:** 1323 W. Turner St., Allentown, PA
- **Phone:** 484-274-6879
- **Hours:** 6:00 AM–7:00 PM

These details and photographs were retained from the existing shop website. Confirm any business changes before updating promotions.

## Booking behavior

The site opens the visitor's phone or messaging application. It does **not** automatically reserve appointments, collect customer information, or send messages. The shop must confirm every requested time. Live time-slot selection requires the shop's booking-service URL; see `docs/EDITING.md`.

## Publishing

The existing live website is hosted at the link above. Upload `index.html`, `404.html`, `favicon.svg`, `.nojekyll`, and the entire `assets/` folder to a static web host. Keep their relative paths intact. README and docs are for the owner and do not need to be published.

All images came from the existing shop project. They are not licensed here for unrelated reuse. No analytics, external fonts, tracking cookies, or third-party JavaScript are included.
