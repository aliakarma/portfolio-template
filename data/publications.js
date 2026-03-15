// =============================================================================
// data/publications.js  —  ADD YOUR PAPERS HERE
// =============================================================================
// Each object in this array is one publication card on the Research page.
//
// STEPS:
//   1. Delete the 3 example entries below
//   2. Copy one example block and fill in your own paper details
//   3. Repeat for each paper you want to list
//
// FIELD GUIDE:
//   id          — Unique number. Count up: 1, 2, 3 ...
//   title       — Full paper title
//   authors     — Array of author name strings
//   authorsStr  — Same names as one comma-separated string
//   venue       — Full conference or journal name
//   venueShort  — Short abbreviation shown on cards  (e.g. "NeurIPS", "Nature")
//   type        — "conference"  |  "journal"  |  "book_chapter"
//   year        — Publication year (number, no quotes)
//   status      — "published"  |  "accepted"  |  "review"
//   statusLabel — Short badge text  (e.g. "NeurIPS 2024", "Under Review · Nature")
//   tags        — Array of topic tags shown as colored badges
//   doi         — Full DOI URL string, or null
//   pdf         — Link to PDF (arXiv etc.), or null
//   code        — GitHub repo URL, or null
//   dataset     — Dataset URL, or null
//   notebook    — Colab/Jupyter URL, or null
//   abstract    — Full abstract text
//   bibtex      — BibTeX citation string
// =============================================================================

export const publications = [

  // ---------------------------------------------------------------------------
  // EXAMPLE 1 — Published conference paper
  // ---------------------------------------------------------------------------
  {
    id: 1,
    title: "YOUR_PAPER_TITLE_1",
    authors: ["YOUR_LAST_NAME, YOUR_INITIAL.", "COAUTHOR_LAST, INITIAL.", "et al."],
    authorsStr: "YOUR_LAST_NAME, YOUR_INITIAL., COAUTHOR_LAST, INITIAL., et al.",
    venue: "Full Conference Name",
    venueShort: "CONF_SHORT",          // e.g. "NeurIPS", "ICML", "CVPR"
    type: "conference",
    year: 2024,
    status: "published",
    statusLabel: "CONF_SHORT 2024",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    doi:      null,   // e.g. "https://doi.org/10.xxxx/xxxxx"
    pdf:      null,   // e.g. "https://arxiv.org/pdf/xxxx.xxxxx"
    code:     null,   // e.g. "https://github.com/YOU/repo"
    dataset:  null,
    notebook: null,
    abstract: "YOUR_ABSTRACT_HERE. Paste your full abstract. This is shown when the user expands the card.",
    bibtex: `@inproceedings{YOURKEY2024,
  title={YOUR_PAPER_TITLE_1},
  author={YOUR_LAST_NAME, YOUR_FIRST_NAME and COAUTHOR_LAST, COAUTHOR_FIRST},
  booktitle={Full Conference Name},
  year={2024},
  organization={PUBLISHER}
}`,
  },

  // ---------------------------------------------------------------------------
  // EXAMPLE 2 — Journal article under review
  // ---------------------------------------------------------------------------
  {
    id: 2,
    title: "YOUR_PAPER_TITLE_2",
    authors: ["YOUR_LAST_NAME, YOUR_INITIAL.", "et al."],
    authorsStr: "YOUR_LAST_NAME, YOUR_INITIAL., et al.",
    venue: "Full Journal Name",
    venueShort: "JOURNAL_SHORT",
    type: "journal",
    year: 2025,
    status: "review",
    statusLabel: "Under Review · JOURNAL_SHORT",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2"],
    doi:      null,
    pdf:      null,
    code:     null,
    dataset:  null,
    notebook: null,
    abstract: "YOUR_ABSTRACT_HERE.",
    bibtex: `@article{YOURKEY2025,
  title={YOUR_PAPER_TITLE_2},
  author={YOUR_LAST_NAME, YOUR_FIRST_NAME and others},
  journal={Full Journal Name},
  year={2025},
  note={Under Review}
}`,
  },

  // ---------------------------------------------------------------------------
  // EXAMPLE 3 — Accepted book chapter
  // ---------------------------------------------------------------------------
  {
    id: 3,
    title: "YOUR_PAPER_TITLE_3",
    authors: ["YOUR_LAST_NAME, YOUR_INITIAL.", "et al."],
    authorsStr: "YOUR_LAST_NAME, YOUR_INITIAL., et al.",
    venue: "Publisher Name (Book Chapter)",
    venueShort: "PUBLISHER",
    type: "book_chapter",
    year: 2025,
    status: "accepted",
    statusLabel: "Book Chapter · PUBLISHER",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2"],
    doi:      null,
    pdf:      null,
    code:     null,
    dataset:  null,
    notebook: null,
    abstract: "YOUR_ABSTRACT_HERE.",
    bibtex: `@incollection{YOURKEY2025b,
  title={YOUR_PAPER_TITLE_3},
  author={YOUR_LAST_NAME, YOUR_FIRST_NAME and others},
  booktitle={Book Title},
  publisher={Publisher Name},
  year={2025}
}`,
  },

  // ---- PASTE MORE PAPERS BELOW THIS LINE ----

]
