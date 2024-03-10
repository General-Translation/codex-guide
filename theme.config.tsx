import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import LogoComponent from './components/LogoComponent'



const config: DocsThemeConfig = {
  logo: LogoComponent,
  project: {
    icon: 'Return to app',
    link: 'https://codex.ai',
  },
  docsRepositoryBase: 'https://github.com/General-Translation/codex-guide',
  head: (
    <>
      <link rel="icon" href="https://guide.codex.ai/favicon.ico" type="image/x-icon" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  },
  footer: {
    text: '2024 General Translation, Inc.',
  },
}

export default config
