# Valentine App

A small click-based Valentine app personalized for **Amisha**.

## Run locally

Because browsers can block some features when opening raw files, run with a local web server:

```bash
python3 -m http.server 4173
```

Then open: `http://localhost:4173/index.html`

## Use it on your phone (same Wi-Fi)

1. Start the server on your laptop:
   ```bash
   python3 -m http.server 4173 --bind 0.0.0.0
   ```
2. Get your laptop IP:
   ```bash
   hostname -I
   ```
3. On your phone browser, open:
   `http://<your-laptop-ip>:4173/index.html`

## Send it to her with a public link

## Option A: Netlify Drop (fastest)
1. Zip `index.html`, `style.css`, `app.js`.
2. Go to https://app.netlify.com/drop
3. Drag/drop the zip.
4. Share the generated URL.

## Option B: GitHub Pages (fixes the 404 you shared)

### Why you saw that 404
If your repo is named something like `valentine-app`, the URL is:

`https://<username>.github.io/<repo-name>/`

**NOT** usually `https://<username>.github.io/` (unless your repo name is exactly `<username>.github.io`).

### Correct setup steps
1. Push files to GitHub repo.
2. Repo → **Settings** → **Pages**.
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main` and `/ (root)`
4. Confirm these files are in repo root with exact lowercase names:
   - `index.html`
   - `style.css`
   - `app.js`
5. Wait ~1–3 minutes and refresh the Pages URL.

### Correct URL examples
- If username is `amanonspot` and repo is `be-my-valentine`:
  - ✅ `https://amanonspot.github.io/be-my-valentine/`
  - ❌ `https://amanonspot.github.io/` (404 unless special repo name)

### If you want root domain URL (no `/repo-name/`)
Use a repository named exactly:

`amanonspot.github.io`

and put this project in that repo root.

## Notes
- The app stores `Official since Feb 14, 2026 💞` in browser localStorage after she taps **Yes**.
- If GIFs are blocked on a network, the app still continues with a fallback image/message.
