// =============================================================================
// data/projects.js  —  ADD YOUR PROJECTS HERE
// =============================================================================
// Each object is one project card on the Projects page.
//
// FIELD GUIDE:
//   id           — Unique number starting from 1
//   title        — Short project name
//   description  — 2-3 sentences describing what the project does
//   technologies — Tools/languages used (shown as small tags)
//   github       — GitHub repo URL, or null
//   demo         — Live demo URL, or null
//   tags         — 2-4 broad topic tags (colored badges)
//   themes       — Research themes (used by the knowledge graph page)
//   featured     — true = "Featured Projects" section (top 3 max)
//                  false = "All Projects" section below
//   status       — "Published" | "Accepted" | "Under Review" | "Research"
//   paper        — id number from publications.js for the linked paper, or null
// =============================================================================

export const projects = [

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1  (set featured: true for your top 3)
  // ---------------------------------------------------------------------------
  {
    id: 1,
    title: "YOUR_PROJECT_1_NAME",
    description: "YOUR_PROJECT_1_DESCRIPTION. Write 2-3 sentences explaining what this project does, what problem it solves, and what makes it interesting.",
    technologies: ["Python", "YOUR_TOOL_2", "YOUR_TOOL_3", "YOUR_TOOL_4"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME",
    demo:   null,
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    themes: ["YOUR_THEME_1", "YOUR_THEME_2"],
    featured: true,
    status: "Published",
    paper: 1,  // matches id in publications.js, or null
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2
  // ---------------------------------------------------------------------------
  {
    id: 2,
    title: "YOUR_PROJECT_2_NAME",
    description: "YOUR_PROJECT_2_DESCRIPTION.",
    technologies: ["Python", "YOUR_TOOL_2", "YOUR_TOOL_3"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_2",
    demo:   null,
    tags: ["YOUR_TAG_1", "YOUR_TAG_2"],
    themes: ["YOUR_THEME_1"],
    featured: true,
    status: "Under Review",
    paper: 2,
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3
  // ---------------------------------------------------------------------------
  {
    id: 3,
    title: "YOUR_PROJECT_3_NAME",
    description: "YOUR_PROJECT_3_DESCRIPTION.",
    technologies: ["Python", "YOUR_TOOL_2"],
    github: null,
    demo:   null,
    tags: ["YOUR_TAG_1", "YOUR_TAG_2"],
    themes: ["YOUR_THEME_1"],
    featured: true,
    status: "Research",
    paper: null,
  },

  // ---------------------------------------------------------------------------
  // ADDITIONAL PROJECT  (featured: false → appears in "All Projects")
  // ---------------------------------------------------------------------------
  {
    id: 4,
    title: "YOUR_PROJECT_4_NAME",
    description: "YOUR_PROJECT_4_DESCRIPTION.",
    technologies: ["YOUR_TOOL_1", "YOUR_TOOL_2"],
    github: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_4",
    demo:   null,
    tags: ["YOUR_TAG_1"],
    themes: ["YOUR_THEME_1"],
    featured: false,
    status: "Accepted",
    paper: 3,
  },

  // ---- PASTE MORE PROJECTS BELOW THIS LINE ----

]
