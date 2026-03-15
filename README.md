# 🎓 Academic Portfolio — Open Source Template

A beautiful, production-ready portfolio website for researchers, academics, and students.
Dark "Scholarly Noir" design with animated particles, interactive knowledge graph, publication
dashboard with BibTeX export, project modals, skill radar chart, and more.

> **You do not need to know React to use this template.**
> Almost everything is customized by editing plain text in a few data files.

---

## 🌐 Live Demo

[View Demo →]([https://YOUR_DEMO_LINK_HERE](https://portfolio-template-mauve-one.vercel.app/))

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🎨 Scholarly Noir theme | Dark background, warm gold accents, elegant serif fonts |
| ✨ Particle background | Animated floating gold particles on every page |
| 🕸️ Knowledge graph | Interactive D3.js map of your research topics |
| 📚 Publication dashboard | Filter by status, type, topic — with BibTeX modals |
| 🔬 Reproducibility panel | Per-paper links to code, datasets, notebooks |
| 📊 Scholar metrics | Citations, h-index, i10-index display |
| 🧩 Project modals | Expandable detail view for each project |
| 📈 Animated counters | Stats that count up on scroll |
| 📱 Mobile-friendly | Works on phones, tablets, and desktops |
| 🚀 Free deployment | GitHub Pages and Vercel both supported |

---

## 📁 What's in This Folder

```
portfolio/
│
├── siteConfig.js          ⭐ START HERE — fill in your personal info
│
├── data/
│   ├── publications.js    Add your papers here
│   ├── projects.js        Add your projects here
│   ├── researchThemes.js  Customize the knowledge graph
│   ├── blog.js            Add blog post previews
│   └── profile.js         DO NOT edit — reads from siteConfig.js
│
├── pages/
│   ├── index.js           Home page
│   ├── about.js           About page
│   ├── research.js        Publications page
│   ├── projects.js        Projects page
│   ├── skills.js          Skills page  ← also edit the skills array inside
│   ├── blog.js            Writing page
│   ├── contact.js         Contact page
│   ├── 404.js             Not found page
│   ├── _app.js            App wrapper (do not edit)
│   └── _document.js       HTML head / SEO tags
│
├── components/            UI building blocks (do not edit)
├── styles/globals.css     Design system / colors (do not edit)
│
├── public/
│   ├── profile.jpg        ⭐ Put your photo here
│   └── YOUR_NAME_CV.pdf   ⭐ Put your CV here
│
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ⚡ Setup — Step by Step

### Requirements

You need these installed on your computer:

- **Node.js 18+** → [nodejs.org](https://nodejs.org) (download the LTS version)
- **npm** → comes with Node.js automatically
- **Git** → [git-scm.com](https://git-scm.com)

Check they work by opening a terminal and typing:
```bash
node --version    # should show v18 or higher
npm --version     # should show a number
```

### Install and Run

```bash
# 1. Clone or download this repository
git clone https://github.com/aliakarma/portfolio-template.git
cd portfolio-template

# 2. Install dependencies (only needed once)
npm install

# 3. Start the local development server
npm run dev

# 4. Open in your browser
# → http://localhost:3000
```

The site will automatically refresh every time you save a file.

---

## ✏️ How to Customize

### Step 1 — Your Personal Info (most important)

Open **`siteConfig.js`** and replace every `YOUR_` value:

```js
name: {
  first: "Maria",        // your first name
  last:  "Santos",       // your last name
},
title:       "AI Researcher",
institution: "MIT",
location:    "Cambridge, USA",
email:       "maria@mit.edu",
github:      "https://github.com/maria-santos",
scholar:     "https://scholar.google.com/citations?user=XXXX",
linkedin:    "https://www.linkedin.com/in/maria-santos",
cv:          "/Maria_Santos_CV.pdf",
bio:         "Write 2–3 sentences about yourself here.",
```

Save the file → browser refreshes → your name and info appear everywhere.

---

### Step 2 — Profile Photo

1. Find a photo of yourself (square crop, min 400×400 px)
2. Rename it to exactly: **`profile.jpg`**
3. Place it in the **`public/`** folder
4. It appears automatically on the About page

---

### Step 3 — Your CV

1. Export your CV as a PDF
2. Rename it (e.g. `Maria_Santos_CV.pdf`)
3. Place it in the **`public/`** folder
4. In `siteConfig.js` update: `cv: "/Maria_Santos_CV.pdf"`

---

### Step 4 — Publications

Open **`data/publications.js`** and replace the example entries with your own papers.

Each paper looks like this:

```js
{
  id: 1,                    // unique number — don't repeat
  title: "Your Paper Title",
  authors: ["Santos, M.", "Co-Author, A.", "et al."],
  authorsStr: "Santos, M., Co-Author, A., et al.",
  venue: "International Conference on Machine Learning",
  venueShort: "ICML",
  type: "conference",       // "conference" | "journal" | "book_chapter"
  year: 2024,
  status: "published",      // "published" | "accepted" | "review"
  statusLabel: "ICML 2024",
  tags: ["Machine Learning", "Optimization"],
  doi:      "https://doi.org/10.xxxx/xxxxx",  // or null
  pdf:      "https://arxiv.org/pdf/xxxx",      // or null
  code:     "https://github.com/you/repo",     // or null
  dataset:  null,
  notebook: null,
  abstract: "Paste your full abstract here.",
  bibtex: `@inproceedings{santos2024,
  title={Your Paper Title},
  author={Santos, Maria},
  booktitle={ICML},
  year={2024}
}`,
},
```

Add as many as you want. Delete the examples when you are done.

---

### Step 5 — Projects

Open **`data/projects.js`** and fill in your projects:

```js
{
  id: 1,
  title: "My Project Name",
  description: "2–3 sentences explaining what it does and why it's interesting.",
  technologies: ["Python", "PyTorch", "FastAPI"],
  github: "https://github.com/you/repo",  // or null
  demo:   null,
  tags: ["Machine Learning", "Healthcare"],
  themes: ["Deep Learning", "Applications"],
  featured: true,   // true = top section, false = "All Projects" section
  status: "Published",
  paper: 1,         // id from publications.js, or null
},
```

Set `featured: true` for your best 3 projects (they appear prominently at the top).

---

### Step 6 — Knowledge Graph

Open **`data/researchThemes.js`** and rename the placeholder nodes and edges to match your research areas.

```js
// A node = one research topic
{
  id: "machine-learning",      // unique ID (lowercase-with-dashes)
  label: "Machine Learning",   // text on graph
  group: "core",               // "core" (gold) | "method" (blue) | "domain" (green)
  size: 20,                    // circle size: 10–25
  description: "One sentence.",
  papers: [1, 2],              // IDs from publications.js
},

// An edge = a connection between two topics
{ source: "machine-learning", target: "computer-vision", weight: 2 },
// weight: 1 = thin line, 3 = thick line
```

Keep 6–10 nodes total. The graph gets cluttered with more.

---

### Step 7 — Skills

Open **`pages/skills.js`** and edit the `skills` object at the top of the file:

```js
const skills = {
  'AI & Machine Learning': [
    { name: 'Python',       level: 92 },  // level = 0 to 100
    { name: 'PyTorch',      level: 85 },
    { name: 'Scikit-learn', level: 80 },
  ],
  'Research & Writing': [
    { name: 'Academic Writing', level: 90 },
    { name: 'Literature Review', level: 88 },
  ],
}
```

Also edit the `clusters` array a bit lower — these become the word cloud at the bottom.

---

### Step 8 — SEO Meta Tags

Open **`pages/_document.js`** and update the 4 meta tag lines at the top:

```js
<meta name="description"  content="Maria Santos — AI Researcher at MIT specializing in machine learning." />
<meta name="keywords"     content="Maria Santos, AI, Machine Learning, MIT" />
<meta property="og:title" content="Maria Santos — AI Researcher" />
<meta property="og:description" content="Machine Learning · Computer Vision · NLP" />
```

---

## 🚀 Deploy for Free

### Option A — Vercel (easiest, recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → sign in with GitHub
3. Click **New Project** → select your repository → click **Deploy**

Done. Live at `https://your-repo.vercel.app`. Auto-deploys on every git push.

---

### Option B — GitHub Pages

```bash
# Update your homepage URL in package.json first:
# "homepage": "https://YOUR_USERNAME.github.io"

npm run deploy
```

Then go to: GitHub repo → **Settings** → **Pages** → Source: **gh-pages branch**

> If your repo is NOT named `username.github.io`, uncomment `basePath` in `next.config.js`
> and set it to your repo name: `basePath: '/your-repo-name'`

---

## ❌ Common Mistakes

| Mistake | What happens | Fix |
|---------|-------------|-----|
| Photo not named `profile.jpg` | Photo doesn't appear | Rename to exactly `profile.jpg` |
| Two publications with same `id` | Display bug | Give every paper a unique number |
| Writing `""` instead of `null` for empty links | JavaScript error | Use `null`, not `""` |
| Editing `data/profile.js` directly | Changes get ignored | Edit `siteConfig.js` instead |
| More than 3 projects with `featured: true` | Layout looks crowded | Keep featured ≤ 3 |
| Edge `source`/`target` typo | Graph won't render | Copy the exact `id` string from the node |
| CV file not in `public/` folder | Download link broken | Move PDF into `public/` folder |

---

## 🎨 Changing the Color Scheme

The gold color is defined in `tailwind.config.js`. To change it, find the `gold` section
and replace the hex values with your preferred color. The main accent is `gold-500: '#e8a900'`.

---

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 14](https://nextjs.org) | React framework + static export |
| [TailwindCSS 3](https://tailwindcss.com) | Styling |
| [Framer Motion 11](https://framer.com/motion) | Animations |
| [D3.js 7](https://d3js.org) | Knowledge graph |
| [Lucide React](https://lucide.dev) | Icons |
| Google Fonts | Cormorant Garamond, Source Serif 4, JetBrains Mono |

---

## 📄 License

MIT — free to use, modify, and share for any purpose.
