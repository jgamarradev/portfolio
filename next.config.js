/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para static export (GitHub Pages)
  images: {
    unoptimized: true, // Requerido para GitHub Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jgamarra.lovestoblog.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  reactStrictMode: true,
}

module.exports = nextConfig

