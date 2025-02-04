/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Airgap Kasm Technologies',
    description: 'The unofficial store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: ' https://dlammert.github.io/kasm-registry/',
    contactUrl: 'https://none.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
