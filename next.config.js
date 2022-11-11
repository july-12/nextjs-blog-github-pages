// next.config.js
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true
  },
  env: {
    BASE_PATH: process.env.BASE_PATH
  }
}
