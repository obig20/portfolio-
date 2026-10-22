# Noha Tilahun — Portfolio Website

A responsive, static portfolio website built from the information in the supplied CV. It uses HTML, CSS, and vanilla JavaScript, so no build step or package installation is required.

## Run locally
1. Extract `noha-tilahun-portfolio.zip`.
2. Open `index.html` in a browser.
3. For a local server, run `python -m http.server 8000` from the project directory and visit `http://localhost:8000`.

## Included
- `index.html` — all portfolio content and metadata
- `styles.css` — responsive design and reduced-motion support
- `script.js` — mobile navigation and dynamic copyright year
- `assets/Noha-Tilahun-CV.pdf` — CV download target

## Personalize before publishing
- Add the exact LinkedIn, GitHub, and Tableau profile URLs in `index.html`. They are intentionally not invented.
- Replace the abstract hero illustration in the HTML/CSS with a professional portrait if desired; no portrait was supplied.
- Add genuine project repository/demo links and screenshots when available.
- Review the Google Data Analytics certificate date/status in the CV and update the education entry if the certificate is completed.
- Confirm whether “R&D Group” is the employer's preferred public name and add dates for the freelance transcription entry if known.

## Deploy
### Netlify
Create a new site by importing the project repository, or drag the extracted project folder into Netlify's manual deploy area. There is no build command; publish directory is the project root.

### Vercel
Push the folder to a Git repository, import it into Vercel, and select the static/Other framework preset. Leave the build command empty and set the output directory to `.` if prompted.

### GitHub Pages
Push the files to a repository, then choose **Settings → Pages → Deploy from a branch**, select the branch and root (`/`). The site will be published at the repository's GitHub Pages URL.

## Notes
- The contact email and telephone links work directly through the visitor's email/phone app.
- There is no contact form or backend; no fake form has been included.
- External font loading uses Google Fonts. The page has sans-serif fallbacks if the fonts are unavailable.
- This is a static site and can be hosted on any static web host.
