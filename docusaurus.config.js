// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "流客的网站",
  url: "https://github.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lkzwc", // Usually your GitHub org/user name.
  projectName: "fe-ddu", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/lkzwc/fe-ddu",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/lkzwc/fe-ddu",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        indexName: "blog_data",
        appId: "N0P0MBUWP4",
        apiKey: "7bae6c5f49a157bfc92e4bef759f0166",
      },
      navbar: {
        logo: {
          alt: "流客-个人博客",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "readme",
            position: "left",
            label: "笔记",
          },
          { to: "/blog", label: "博客", position: "left" },
          {
            label: "工具链",
            to: "/share",
          },
          {
            href: "https://github.com/lkzwc/fe-ddu",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "What's  DDU?",
            items: [
              {
                label: "DDU",
                to: "/docs/readme",
              },
            ],
          },
          {
            title: "Star",
            items: [
              {
                label: "Github",
                href: "https://github.com/lkzwc/fe-ddu",
              },
            ],
          },
          {
            title: "博客",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "鸣谢",
            items: [
              {
                html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
              },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener"><img style="height:50px;margin-top:0.5rem" src="https://www.docusaurus.cn/img/docusaurus_keytar.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `Copyright ©️ ${new Date().getFullYear()} &#128278;  by lkzwc `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
