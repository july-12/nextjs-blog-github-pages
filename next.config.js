// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const basePath = '/nextjs-blog-github-pages'
module.exports = {
  // assetPrefix: isProd ? '/nextjs-blog-github-pages/' : '',
  basePath: basePath,
  // assetPrefix: basePath + '/',
  images: {
    // path: [`${basePath}/_next/image`],
    // path: `${basePath}/_next/image`,
    // unoptimized: true,
  },
}