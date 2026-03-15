// =============================================================================
// data/researchThemes.js  —  CUSTOMIZE YOUR KNOWLEDGE GRAPH
// =============================================================================
// This controls the interactive graph on the home page.
// It visualizes how your research topics connect to each other.
//
// STEPS:
//   1. Edit researchNodes — rename topics to match your work
//   2. Edit researchEdges — draw connections between topics
//   3. Each node must have a unique "id" string
//   4. Each edge references two node id strings
//
// NODE GROUP → COLOR:
//   "core"   → Gold  (your main research areas)
//   "method" → Blue  (methods and techniques)
//   "domain" → Green (application areas)
//
// TIP: 6–10 nodes works best. Too many nodes = cluttered graph.
// =============================================================================

export const researchNodes = [

  // CORE NODES — Main research areas (Gold)
  {
    id: "YOUR_CORE_TOPIC_1",       // unique ID — use lowercase-with-dashes
    label: "YOUR CORE TOPIC 1",    // text shown on graph
    group: "core",
    size: 22,                      // circle size: 10–25
    description: "One sentence describing this research area.",
    papers: [1, 2],                // IDs from publications.js
  },
  {
    id: "YOUR_CORE_TOPIC_2",
    label: "YOUR CORE TOPIC 2",
    group: "core",
    size: 18,
    description: "One sentence describing this research area.",
    papers: [1, 3],
  },
  {
    id: "YOUR_CORE_TOPIC_3",
    label: "YOUR CORE TOPIC 3",
    group: "core",
    size: 16,
    description: "One sentence describing this research area.",
    papers: [2, 3],
  },

  // METHOD NODES — Techniques you use (Blue)
  {
    id: "YOUR_METHOD_1",
    label: "YOUR METHOD 1",         // e.g. "Deep Learning"
    group: "method",
    size: 14,
    description: "One sentence describing this method.",
    papers: [1],
  },
  {
    id: "YOUR_METHOD_2",
    label: "YOUR METHOD 2",
    group: "method",
    size: 12,
    description: "One sentence describing this method.",
    papers: [2],
  },

  // DOMAIN NODES — Application areas (Green)
  {
    id: "YOUR_DOMAIN_1",
    label: "YOUR DOMAIN 1",         // e.g. "Healthcare", "Finance"
    group: "domain",
    size: 12,
    description: "One sentence describing this domain.",
    papers: [3],
  },
  {
    id: "YOUR_DOMAIN_2",
    label: "YOUR DOMAIN 2",
    group: "domain",
    size: 11,
    description: "One sentence describing this domain.",
    papers: [1],
  },

]

// =============================================================================
// EDGES — Connections between topics
// source and target must exactly match a node's "id" above.
// weight: 1 (thin) to 3 (thick)
// =============================================================================
export const researchEdges = [
  { source: "YOUR_CORE_TOPIC_1", target: "YOUR_CORE_TOPIC_2", weight: 3 },
  { source: "YOUR_CORE_TOPIC_1", target: "YOUR_METHOD_1",     weight: 2 },
  { source: "YOUR_CORE_TOPIC_1", target: "YOUR_DOMAIN_1",     weight: 2 },
  { source: "YOUR_CORE_TOPIC_2", target: "YOUR_CORE_TOPIC_3", weight: 2 },
  { source: "YOUR_CORE_TOPIC_2", target: "YOUR_METHOD_2",     weight: 2 },
  { source: "YOUR_CORE_TOPIC_3", target: "YOUR_DOMAIN_2",     weight: 1 },
  { source: "YOUR_METHOD_1",     target: "YOUR_DOMAIN_1",     weight: 1 },
  { source: "YOUR_METHOD_2",     target: "YOUR_DOMAIN_2",     weight: 1 },
]

// DO NOT change groupColors unless you want to restyle the graph.
export const groupColors = {
  core:   "#e8a900",
  method: "#7dd3fc",
  domain: "#86efac",
}
