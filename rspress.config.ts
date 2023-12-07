import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginTest } from './src/plugin/plugin';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '流客的网站',
  description: '前端开发者流客的博客',
  icon: '/logo.png',
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  lang:'zh',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lkzwc/feddu' },
    ],
    // footer:{
    //     title: "鸣谢",
    //     items: [
    //       {
    //         html: `
    //         <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
    //           <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
    //         </a>
    //       `,
    //       },
    //       {
    //         html: `<a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener"><img style="height:50px;margin-top:0.5rem" src="https://www.docusaurus.cn/img/docusaurus_keytar.png" /><a/>`,
    //       },
    //     ],
    // }
  },
  plugin:[pluginTest("hello")]
});
