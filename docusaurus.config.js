// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "前端个人博客-流客",
  url: "https://github.com/lkzwc/fe-ddu",
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
          editUrl: "https://github.com/lkzwc/fe-ddu",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/lkzwc/fe-ddu",
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
      navbar: {
        title: "流客-个人博客",
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
            label: "前端工具",
            items: [
              {
                label: "What Character",
                href: "http://www.amp-what.com/",
              },
              {
                label: "Image compress and tansfer",
                href: "https://anywebp.com/",
              },
            ],
          },
          {
            label: "友链",
            items: [
              {
                label: "前端进阶题-山月",
                href: "https://q.shanyue.tech/",
              },
              {
                label: "前端源码-若川",
                href: "https://lxchuan12.gitee.io/",
              },
            ],
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
            title: "What DDU?",
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} &#128278;  The frontend blog by lkzwc `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
