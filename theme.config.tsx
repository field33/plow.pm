import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import {Footer} from "@components/Footer";
import {PlowLogo} from "@components/PlowLogo";
import {MatrixIcon} from "@components/MatrixIcon";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Plow',
      description:
          frontMatter.description || 'Plow: The ontology package manager',
      openGraph: {
        images: [
          {
            url: "/plow_social.png",
            width: 588,
            height: 308,
          }
        ]
      }
    }
  },
  logo: <span className="flex items-center gap-2"><PlowLogo small primary/>Plow</span>,
  logoLink: true,
  project: {
    link: 'https://github.com/field33/plow',
  },
  chat: {
    link: 'https://matrix.to/#/#plow_pm:matrix.org',
    icon: MatrixIcon,
  },
  docsRepositoryBase: 'https://github.com/field33/plow.pm/blob/main',
  footer: {
    component: Footer,
  },
}

export default config
