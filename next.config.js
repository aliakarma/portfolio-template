/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // For GitHub Pages with a project repo (NOT username.github.io):
  // Uncomment the line below and replace 'your-repo-name' with your repo name.
  // basePath: '/your-repo-name',
}
module.exports = nextConfig
