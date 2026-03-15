// =============================================================================
// siteConfig.js — YOUR MAIN CONFIGURATION FILE
// =============================================================================
// This is the ONLY file you need to edit to personalize the website.
// Change the values below to your own details.
// The entire website updates automatically once you fill this in.
//
// HOW TO USE:
//   1. Replace every value that says YOUR_ with your own information
//   2. Save the file
//   3. The browser will refresh and show your changes instantly
// =============================================================================

const siteConfig = {

  // ---------------------------------------------------------------------------
  // PERSONAL INFORMATION
  // ---------------------------------------------------------------------------
  name: {
    first: "FIRST_NAME",    // e.g. "Maria"
    last:  "LAST_NAME",     // e.g. "Santos"
  },

  title:       "YOUR_TITLE",           // e.g. "AI Researcher" or "Software Engineer"
  tagline:     "YOUR_TAGLINE",         // e.g. "Machine Learning · Computer Vision · NLP"
  institution: "YOUR_INSTITUTION",     // e.g. "MIT" or "Stanford University"
  location:    "YOUR_CITY, YOUR_COUNTRY", // e.g. "Cambridge, USA"
  degree:      "YOUR_DEGREE (YEAR_START–YEAR_END)", // e.g. "B.S. Computer Science (2022–2026)"

  // ---------------------------------------------------------------------------
  // CONTACT & SOCIAL LINKS
  // ---------------------------------------------------------------------------
  email:    "YOUR_EMAIL@example.com",
  github:   "https://github.com/YOUR_GITHUB_USERNAME",
  scholar:  "https://scholar.google.com/",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  cv:       "/YOUR_NAME_CV.pdf",  // Put your CV PDF in the /public folder with this filename

  // ---------------------------------------------------------------------------
  // SHORT BIOGRAPHY  (appears on Home and About pages)
  // Write 2–3 sentences about yourself.
  // ---------------------------------------------------------------------------
  bio: "YOUR_BIO_HERE. Write 2-3 sentences about your background and research focus. This appears on the home page and about page.",

  // ---------------------------------------------------------------------------
  // RESEARCH VISION  (longer statement — Home page)
  // Write 2 paragraphs. Use \n\n to separate them.
  // ---------------------------------------------------------------------------
  researchVision: `YOUR_FIRST_PARAGRAPH_HERE. Describe the broad vision and goals of your research. What problem are you trying to solve? What impact do you hope to have?

YOUR_SECOND_PARAGRAPH_HERE. Describe your specific approach and methodology. What makes your work unique or interesting?`,

  // ---------------------------------------------------------------------------
  // RESEARCH INTERESTS  (appear as tags on Home and About pages)
  // ---------------------------------------------------------------------------
  researchInterests: [
    "YOUR_RESEARCH_INTEREST_1",   // e.g. "Machine Learning & Deep Learning"
    "YOUR_RESEARCH_INTEREST_2",   // e.g. "Natural Language Processing"
    "YOUR_RESEARCH_INTEREST_3",   // e.g. "Computer Vision"
    "YOUR_RESEARCH_INTEREST_4",   // e.g. "AI Safety & Alignment"
    "YOUR_RESEARCH_INTEREST_5",   // e.g. "Robotics & Autonomous Systems"
  ],

  // ---------------------------------------------------------------------------
  // GOOGLE SCHOLAR METRICS
  // Find these on your Google Scholar profile page.
  // If you don't have one yet, set all values to 0.
  // ---------------------------------------------------------------------------
  scholarMetrics: {
    citations: 0,    // Total citations
    hIndex:    0,    // h-index
    i10Index:  0,    // i10-index
    since:     2024, // Year your publications started
  },

  // ---------------------------------------------------------------------------
  // EDUCATION
  // Add each degree. Copy the block to add more than one.
  // ---------------------------------------------------------------------------
  education: [
    {
      degree:      "YOUR_DEGREE",           // e.g. "B.S. Computer Science"
      institution: "YOUR_INSTITUTION",      // e.g. "Massachusetts Institute of Technology"
      location:    "YOUR_CITY, COUNTRY",    // e.g. "Cambridge, USA"
      period:      "YEAR – YEAR",           // e.g. "2022 – 2026"
      details: [
        "YOUR_SCHOLARSHIP_OR_HIGHLIGHT",    // e.g. "Full Merit Scholarship"
        "YOUR_FOCUS_OR_ACTIVITIES",         // e.g. "Focus on machine learning and robotics"
      ],
      current: true,  // true = currently enrolled, false = graduated
    },
    // To add another degree, copy the block above and paste it here.
  ],

  // ---------------------------------------------------------------------------
  // RESEARCH EXPERIENCE
  // Copy the block to add more roles.
  // ---------------------------------------------------------------------------
  experience: [
    {
      role:        "YOUR_ROLE",          // e.g. "Undergraduate Researcher"
      institution: "YOUR_LAB_OR_INST",   // e.g. "AI Safety Lab, MIT"
      period:      "Mon YEAR – Present",
      bullets: [
        "YOUR_RESPONSIBILITY_1",         // e.g. "Designed and implemented ML pipelines for..."
        "YOUR_RESPONSIBILITY_2",         // e.g. "Co-authored papers published in..."
        "YOUR_RESPONSIBILITY_3",
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // AWARDS & CERTIFICATIONS
  // Copy any block to add more.
  // ---------------------------------------------------------------------------
  awards: [
    {
      title:  "YOUR_AWARD_TITLE",   // e.g. "Best Paper Award"
      issuer: "YOUR_ISSUER",        // e.g. "NeurIPS 2024"
      year:   2024,
    },
    {
      title:  "YOUR_CERTIFICATE",   // e.g. "Deep Learning Specialization"
      issuer: "YOUR_ISSUER",        // e.g. "Coursera / deeplearning.ai"
      year:   2023,
    },
  ],

}

module.exports = siteConfig
