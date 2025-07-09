import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '博客网站｜流客',
  description: '前端开发者流客的博客',
  icon: '/logo.png',
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  lang:'zh',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap' }],
  ],
  builderConfig: {
    tools: {
      postcss: (_, { addPlugins }) => {
        addPlugins([require('tailwindcss')]);
      },
    },
  },
  themeConfig: {
    lastUpdated: true,
    nav: [
      {
        text: '学习笔记',
        link: '/note/',
        activeMatch: '^/note/'
      },
      {
        text: '技术博客',
        link: '/blog/',
        activeMatch: '^/blog/'
      },
      {
        text: '在线简历',
        link: '/resume',
        activeMatch: '^/resume'
      },
      {
        text: '系统发布',
        link: '/system',
        activeMatch: '^/system'
      }
    ],
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/lkzwc/feddu' },
    ],
    footer: {
      message: 'Copyright © 2024 Design by lkzwc with ❤️'
    }
  }
});
