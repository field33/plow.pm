const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = Object.assign({}, withNextra(), {
  images: {
    unoptimized: true,
  },
})
