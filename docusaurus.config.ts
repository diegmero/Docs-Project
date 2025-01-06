import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bienvenidos a Heitic',
  tagline: 'Información Actualizada',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://heitic.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'diegmero', // Usually your GitHub org/user name.
  projectName: 'diego docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Publicaciones Recientes',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Heitic',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/diegmero',
          'aria-label': 'GitHub',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa-brands fa-github"></i>',
        },
        {
          href: 'https://www.linkedin.com/in/diego-alejandro-romero-mercado-3858b6208/o',
          'aria-label': 'GitHub',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa-brands fa-linkedin"></i>',
          
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Guía de inicio',
              to: '/docs/intro',
            },
            {
              label: 'Tutoriales',
              to: '/docs/category/tutorial-docker',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Últimas actualizaciones',
              to: '/blog/archive',
            },
          ],
        },
        {
          title: 'Conecta',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/in/diego-alejandro-romero-mercado-3858b6208/',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/diegmero',
            },
          ],
        },
        {
          title: 'Contribuir',
          items: [
            {
              label: 'Código fuente',
              to: 'https://github.com/diegmero/diego-docs',
            },
            {
              label: 'Aportar contribuciones',
              to: 'https://github.com/diegmero/diego-docs/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Heitic Docs | Desarrollado por Diego Romero`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'javascript', 'typescript', 'css', 'less','scss', 'json', 'markdown', 'java', 'php', 'ruby', 'python', 'go', 'rust', 'jsx', 'docker']
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;

