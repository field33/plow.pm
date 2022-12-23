import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Plow</span>,
  logoLink: true,
  project: {
    link: 'https://github.com/field33/plow',
  },
  chat: {
    link: 'https://matrix.to/#/#plow_pm:matrix.org',
  },
  docsRepositoryBase: 'https://github.com/field33/plow.pm',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
