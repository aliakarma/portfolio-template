// =============================================================================
// pages/_document.js  —  HTML head / SEO meta tags
// WHAT TO EDIT: Update the description, keywords, og:title, og:description
//               with your own name and research focus.
// DO NOT change the font links or NextScript tags.
// =============================================================================
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta charSet="utf-8" />
        {/* Edit these 4 meta tags with your own details */}
        <meta name="description"        content="YOUR_NAME — YOUR_TITLE specializing in YOUR_RESEARCH_AREAS at YOUR_INSTITUTION." />
        <meta name="keywords"           content="YOUR_NAME, YOUR_FIELD, YOUR_KEYWORD_1, YOUR_KEYWORD_2, YOUR_INSTITUTION" />
        <meta property="og:title"       content="YOUR_NAME — YOUR_TITLE" />
        <meta property="og:description" content="YOUR_TAGLINE" />
        <meta property="og:type"        content="website" />
        <meta name="twitter:card"       content="summary_large_image" />
        {/* Place your favicon.ico in the /public folder */}
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts — do not change */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
