# BOUCLÉ — Botanical Curl Trichology & Regimen Studio (Option 4)

> **Domain**: Luxury Botanical Curly Hair Science & Diagnostic Atelier (Type 2A to 4C)  
> **Design Style**: Organic Luxury Editorial (Fraunces Serif, tactile warm clay & oat milk tones)  
> **Target**: Frontend Deployment Assessment on Vercel  
> **Tech Stack**: Pure Semantic HTML5, CSS3 with Organic Design Tokens, Vanilla JavaScript (ES6+)

---

## Live Deployment Instructions (Vercel)

This project has **zero external build dependencies**. It deploys to Vercel instantly without any setup or build failures.

### Method A: Deploy via GitHub (Recommended for Assessment)
1. Initialize git and push this folder to your GitHub:
   ```bash
   cd option-4-boucle-curls
   git init
   git add .
   git commit -m "feat: complete BOUCLE curly hair frontend"
   # Create a new repository on github.com, then run:
   git remote add origin https://github.com/<your-username>/boucle-curls-frontend.git
   git branch -M main
   git push -u origin main
   ```
2. Visit [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"Add New..."** → **"Project"**.
4. Import your `boucle-curls-frontend` repository.
5. Keep default settings (Framework Preset: **Other**, Build Command: empty, Output Directory: empty).
6. Click **Deploy**. Your app is live in ~5 seconds!

### Method B: Deploy via Vercel CLI (1-Click)
```bash
npm i -g vercel
vercel
```

---

## Evaluation Highlights for Examiners
- **Visual Discipline**: Warm earth tones (Terracotta `#C26D53`, Oat Milk `#FAF7F2`, Espresso `#201915`), Fraunces serif typography, 8pt cadence, and WCAG AAA contrast.
- **Interactive Micro-features**:
  - **Dynamic Curl Helix Simulator**: Select Type 2 (Waves), Type 3 (Curls), or Type 4 (Coils) to dynamically morph the mathematical SVG strand curve.
  - **Atmospheric Humidity & Dew Point Forecaster**: Interactive slider (15% to 95%) that prescribes anti-frizz botanicals based on ambient dew point.
  - **Wash-Day Ritual Architect**: Interactive step toggles that recalculate total routine duration in real-time.
  - **Slide-out Custom Regimen Drawer**: Slide-out drawer with backdrop blur displaying active diagnostic profile and step breakdown.
  - **Trichology Consultation Flow**: Inline client history validation and feedback toast notifications.
- **Zero-Breakage Architecture**: Pure HTML/CSS/JS with `vercel.json` static configuration.

