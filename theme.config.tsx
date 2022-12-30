import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Footer} from "@components/Footer";

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
    component: Footer,
  },
}

export default config
