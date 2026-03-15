<div align="center">

# The Academic Portfolio — Built for Researchers

**A stunning, production-ready portfolio for academics, researchers, and students.**
*Stop using plain Google Sites. Your work deserves better.*

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)](https://framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-e8a900?style=for-the-badge)](LICENSE)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br />

[**View Live Demo →**](https://YOUR_DEMO_LINK_HERE) &nbsp;·&nbsp; [**Use This Template →**](https://github.com/YOUR_USERNAME/YOUR_REPO/generate) &nbsp;·&nbsp; [**Report a Bug**](https://github.com/YOUR_USERNAME/YOUR_REPO/issues)

<br />

> ⭐ **If this template saves you time, please give it a star — it helps other researchers find it.**

<br />

---

</div>

<br />

## Why This Template?

Most academic portfolios look like they were built in 2010.
This one doesn't.

Built with the same tools used by top-tier tech products, this template gives you a portfolio that looks like you hired a designer — without hiring a designer. It is dark, elegant, and serious. Exactly the impression you want to make on PhD committees, hiring managers, and collaborators.

**And the best part:** you do not need to know React, JavaScript, or web development. Just fill in a few text files and your site is ready.

<br />

---

## What It Looks Like

<br />

```
┌─────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░  ·  ·  gold particle background  ·  ·  ·  ·  ·  ·  ·  ░  │
│  ░                                                        ░  │
│  ░   YOUR NAME                  ┌──────────────────────┐  ░  │
│  ░   ─────────────              │  12  Publications    │  ░  │
│  ░   AI Researcher              │   5  Research Areas  │  ░  │
│  ░                              │  16  Citations       │  ░  │
│  ░   "Designing safe and        │   3  h-index         │  ░  │
│  ░    trustworthy systems."     └──────────────────────┘  ░  │
│  ░                                                        ░  │
│  ░   [View Research]  [Scholar]  [Download CV]            ░  │
│  ░                                                        ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────────┘
```

<br />

---

## Features

<br />

### 🎨 Design System

| | Feature | Detail |
|---|---------|--------|
| ◆ | **Scholarly Noir Theme** | Deep dark background, warm gold accents, Cormorant Garamond + JetBrains Mono |
| ◆ | **Animated Particle Field** | 80 floating gold particles on a canvas — subtle and elegant |
| ◆ | **Page Transitions** | Framer Motion enter/exit animations between every page |
| ◆ | **Scroll Reveal** | Sections animate into view as you scroll down |
| ◆ | **Noise Texture** | Adds depth and a print-like quality to the background |
| ◆ | **Fully Responsive** | Looks great on mobile, tablet, and desktop |

<br />

### 📚 Publications

| | Feature | Detail |
|---|---------|--------|
| ◆ | **Publication Dashboard** | Filter papers by status, type, and topic tag |
| ◆ | **BibTeX Modal** | One-click BibTeX copy for every paper |
| ◆ | **Reproducibility Panel** | Per-paper links to code, dataset, and notebook |
| ◆ | **Scholar Metrics** | Citations, h-index, i10-index on the home page |
| ◆ | **Abstract Expand** | Clean collapsible abstract for each paper |
| ◆ | **Status Badges** | Color-coded Published / Accepted / Under Review |

<br />

### 🕸️ Knowledge Graph

| | Feature | Detail |
|---|---------|--------|
| ◆ | **D3.js Force Graph** | Interactive, draggable research topic network |
| ◆ | **Hover Tooltips** | Description and paper count on hover |
| ◆ | **Color-coded Groups** | Core topics (gold), Methods (blue), Domains (green) |
| ◆ | **Auto-layout** | Topics arrange themselves — no manual positioning needed |

<br />

### 🧩 Everything Else

| | Feature | Detail |
|---|---------|--------|
| ◆ | **Project Cards** | Modal detail view with linked publication |
| ◆ | **Skills Radar Chart** | SVG radar chart built from your skill data |
| ◆ | **Animated Counters** | Stats count up when they enter the viewport |
| ◆ | **Contact Form** | Pre-fills your email client — no backend needed |
| ◆ | **Custom 404** | Branded not-found page |
| ◆ | **Free to Deploy** | Works on Vercel and GitHub Pages |

<br />

---

## Quick Start

You need **Node.js 18+** installed. Download it at [nodejs.org](https://nodejs.org) if you don't have it.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Install dependencies (only once)
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** — your site is running.

Now open **`siteConfig.js`** and replace the `YOUR_` placeholders with your own details.
The browser refreshes automatically every time you save.

<br />

---

## Customization Guide

> **Everything you need to edit is in one of five files.**
> You never need to touch any component, style, or config file.

<br />

### `siteConfig.js` — Your Identity

This is the only file most users ever need to edit.
It controls your name, bio, links, education, experience, and awards everywhere on the site.

```js
name:        { first: "Maria", last: "Santos" },
title:       "AI Researcher",
institution: "MIT",
email:       "maria@mit.edu",
github:      "https://github.com/maria-santos",
scholar:     "https://scholar.google.com/...",
bio:         "2–3 sentences about your research focus.",
```

Save the file → browser refreshes → your info appears everywhere instantly.

<br />

### `data/publications.js` — Your Papers

Each paper is one object in the array. Add as many as you want.

```js
{
  id:          1,
  title:       "Your Paper Title",
  authorsStr:  "Santos, M., Co-Author, A., et al.",
  venueShort:  "NeurIPS",
  type:        "conference",    // "conference" | "journal" | "book_chapter"
  year:        2024,
  status:      "published",    // "published" | "accepted" | "review"
  statusLabel: "NeurIPS 2024",
  tags:        ["Machine Learning", "Optimization"],
  doi:         "https://doi.org/...",   // or null
  pdf:         "https://arxiv.org/...", // or null
  code:        "https://github.com/...", // or null
  abstract:    "Paste your full abstract here.",
  bibtex:      `@inproceedings{...}`,
},
```

<br />

### `data/projects.js` — Your Projects

```js
{
  id:           1,
  title:        "Project Name",
  description:  "2–3 sentences about what it does and why it matters.",
  technologies: ["Python", "PyTorch", "FastAPI"],
  github:       "https://github.com/you/repo",
  featured:     true,   // true = shown at top of page
  status:       "Published",
  paper:        1,      // links to publications.js id, or null
},
```

<br />

### `data/researchThemes.js` — Knowledge Graph

```js
// A node = one research topic bubble
{ id: "machine-learning", label: "Machine Learning",
  group: "core",   // "core" (gold) | "method" (blue) | "domain" (green)
  size: 20, description: "One sentence.", papers: [1, 2] },

// An edge = a connection between two topics
{ source: "machine-learning", target: "computer-vision", weight: 2 },
// weight: 1 (thin line) → 3 (thick line)
```

<br />

### `pages/skills.js` — Your Skills

Edit the `skills` object at the top of the file:

```js
const skills = {
  'AI & Machine Learning': [
    { name: 'Python',  level: 92 },  // level = 0–100
    { name: 'PyTorch', level: 85 },
  ],
}
```

<br />

### Adding Your Photo and CV

| What | Where to put it | How to link |
|------|----------------|-------------|
| Profile photo | `public/profile.jpg` | Automatic — no action needed |
| CV / Resume | `public/Maria_Santos_CV.pdf` | Set `cv: "/Maria_Santos_CV.pdf"` in `siteConfig.js` |

<br />

---

## Deployment

### → Vercel (Recommended — zero config, free)

```bash
# Push your code to GitHub, then run:
npx vercel
```

Or go to [vercel.com](https://vercel.com), connect your GitHub repo, and click **Deploy**.
Every future `git push` auto-deploys your changes. No configuration needed.

<br />

### → GitHub Pages (Free)

```bash
# 1. Set your homepage URL in package.json:
#    "homepage": "https://YOUR_USERNAME.github.io"

# 2. Run the deploy command
npm run deploy

# 3. In GitHub: Settings → Pages → Source: gh-pages branch
```

> **Note:** If your repo is named `my-portfolio` (not `username.github.io`), uncomment
> `basePath: '/my-portfolio'` in `next.config.js`.

<br />

---

## Project Structure

```
portfolio/
│
├── siteConfig.js          ← ⭐ Edit this first — all personal info lives here
│
├── data/
│   ├── publications.js    ← Your papers
│   ├── projects.js        ← Your projects
│   ├── researchThemes.js  ← Knowledge graph nodes and edges
│   ├── blog.js            ← Blog post previews
│   └── profile.js         ← DO NOT edit (auto-reads from siteConfig)
│
├── pages/
│   ├── index.js           Home page
│   ├── about.js           About page
│   ├── research.js        Publications page
│   ├── projects.js        Projects page
│   ├── skills.js          Skills page  ← also edit the skills object here
│   ├── blog.js            Writing page
│   ├── contact.js         Contact page
│   └── 404.js             Not found page
│
├── components/            UI components — do not edit
├── styles/globals.css     Design system — do not edit
│
└── public/
    ├── profile.jpg        ← Your photo goes here
    └── YOUR_NAME_CV.pdf   ← Your CV goes here
```

<br />

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org) | 14 | React framework + static export |
| [TailwindCSS](https://tailwindcss.com) | 3 | Utility-first styling |
| [Framer Motion](https://framer.com/motion) | 11 | Animations and page transitions |
| [D3.js](https://d3js.org) | 7 | Force-directed knowledge graph |
| [Lucide React](https://lucide.dev) | latest | Icon library |
| Google Fonts | — | Cormorant Garamond · Source Serif 4 · JetBrains Mono |

<br />

---

## Common Questions

<details>
<summary><b>My changes aren't showing up in the browser</b></summary>
<br />
Make sure you saved the file. The dev server watches for file saves automatically. If it still doesn't update, stop the server with <code>Ctrl + C</code> and run <code>npm run dev</code> again.
</details>

<details>
<summary><b>My profile photo isn't appearing</b></summary>
<br />
The filename must be exactly <code>profile.jpg</code> (all lowercase) inside the <code>public/</code> folder. If you have a PNG file, rename it to <code>.jpg</code> or change the <code>src</code> attribute in <code>pages/about.js</code>.
</details>

<details>
<summary><b>The knowledge graph isn't rendering</b></summary>
<br />
Every <code>source</code> and <code>target</code> value in <code>researchEdges</code> must exactly match a node's <code>id</code> in <code>researchNodes</code>. A single typo or extra space will break the graph silently. Copy and paste the id strings rather than retyping them.
</details>

<details>
<summary><b>GitHub Pages shows a blank white page</b></summary>
<br />
If your repository is not named <code>username.github.io</code>, you must uncomment the <code>basePath</code> line in <code>next.config.js</code> and set it to your repository name. For example: <code>basePath: '/my-portfolio'</code>.
</details>

<details>
<summary><b>Can I use this without a Google Scholar profile?</b></summary>
<br />
Yes. Set all <code>scholarMetrics</code> values to <code>0</code> in <code>siteConfig.js</code> and set <code>scholar: "#"</code>. The metrics section still displays cleanly.
</details>

<details>
<summary><b>Can I change the gold color to match my style?</b></summary>
<br />
Yes. Open <code>tailwind.config.js</code> and find the <code>gold</code> color block. Replace the hex values with your preferred color. The main accent is <code>gold-500: '#e8a900'</code>.
</details>

<br />

---

## Contributing

Found a bug? Have an improvement idea?

1. [Open an issue](https://github.com/YOUR_USERNAME/YOUR_REPO/issues) describing the problem
2. Fork the repo and create a branch: `git checkout -b fix/description`
3. Make your changes and open a pull request

All contributions are welcome and appreciated.

<br />

---

<div align="center">

---

### Enjoying this template?

**A ⭐ star takes one second and helps other researchers discover this project.**

[⭐ Star on GitHub](https://github.com/YOUR_USERNAME/YOUR_REPO)

---

Built with care for the academic community &nbsp;·&nbsp; MIT License &nbsp;·&nbsp; Free forever

[⬆ Back to top](#the-academic-portfolio--built-for-researchers)

</div>
