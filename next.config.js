// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/nextjs-blog-github-pages/' : '',
  basePath: '/nextjs-blog-github-pages',
  images: {
    unoptimized: true,
  },
}