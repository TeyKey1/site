import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Konva - JavaScript Canvas 2d Library',
  tagline:
    'The ultimate bridge between your Vanilla/React/Vue/Svelte/Angular app and canvas graphics',
  favicon: 'img/favicon.ico',
  themes: ['./src/theme-live-codeblock'],

  // Set the production url of your site here
  url: 'https://konvajs.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'konvajs', // Usually your GitHub org/user name.
  projectName: 'konva', // Usually your repo name.

  // TODO: change to 'throw'
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      async: true,
      defer: true,
      'data-domain': 'konvajs.org',
    },
    {
      src: 'https://cdn.convertbox.com/convertbox/js/embed.js',
      id: 'app-convertbox-script',
      async: true,
      'data-uuid': 'db9e320b-6d6c-49c4-ba5c-b29e6d5fc91c',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'content',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/konvajs/site/tree/new/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/konvajs/site/tree/new/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social.jpeg',
    navbar: {
      title: 'Konva',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          to: 'docs/sandbox.html',
          position: 'left',
          label: 'Demos',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'dropdown',
          label: 'Frameworks',
          position: 'left',
          items: [
            {
              label: 'React',
              to: '/docs/react/index.html',
            },
            {
              label: 'Vue',
              to: '/docs/vue/index.html',
            },
            {
              label: 'Svelte',
              to: '/docs/svelte/index.html',
            },
          ],
        },
        {
          label: 'Kai',
          to: '/kai',
        },
        {
          to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          label: 'Price',
          position: 'left',
        },
        {
          href: 'https://github.com/konvajs/konva',
          className: 'header-github-link',
          position: 'right',
        },
        {
          href: 'https://discord.gg/8FqZwVT',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://twitter.com/lavrton',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/index.html',
            },
            {
              label: 'Demos',
              to: '/docs/sandbox.html',
            },
            {
              label: 'API Reference',
              to: '/api/Konva.html',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/konva',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/8FqZwVT',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lavrton',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/konvajs/konva',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            {
              label: 'React',
              href: '/docs/react/index.html',
            },
            {
              label: 'Vue',
              href: '/docs/vue/index.html',
            },
            {
              label: 'Svelte',
              href: '/docs/svelte/index.html',
            },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Konva. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'GGPOY1E1YM',

      // Public API key: it is safe to commit it
      apiKey: '85c8716bb7c8a1b811b0217c46e2b4e2',

      indexName: 'new-konvajs',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
