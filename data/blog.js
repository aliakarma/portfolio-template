// =============================================================================
// data/blog.js  —  ADD YOUR BLOG POST PREVIEWS HERE
// =============================================================================
// These appear on the Writing page as preview cards.
// Set placeholder: false when a post is real, true when it's planned/upcoming.
// =============================================================================

export const blogPosts = [
  {
    id: 1,
    title: "YOUR_POST_TITLE_1",
    date: "YYYY-MM-DD",           // e.g. "2025-03-15"
    category: "YOUR_CATEGORY",    // e.g. "Research", "Tutorial", "Opinion"
    readTime: "X min",
    excerpt: "YOUR_EXCERPT_1. Write 2-3 sentences summarizing the post.",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    placeholder: true,            // set to false when published
  },
  {
    id: 2,
    title: "YOUR_POST_TITLE_2",
    date: "YYYY-MM-DD",
    category: "YOUR_CATEGORY",
    readTime: "X min",
    excerpt: "YOUR_EXCERPT_2.",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2"],
    placeholder: true,
  },
  {
    id: 3,
    title: "YOUR_POST_TITLE_3",
    date: "YYYY-MM-DD",
    category: "YOUR_CATEGORY",
    readTime: "X min",
    excerpt: "YOUR_EXCERPT_3.",
    tags: ["YOUR_TAG_1"],
    placeholder: true,
  },
]
