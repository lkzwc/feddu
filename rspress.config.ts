import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '博客网站｜LK',
  description: '前端开发者LK的博客',
  icon: '/logo-new.svg',
  logo: {
    light: '/logo-new.svg',
    dark: '/logo-dark.svg',
  },
  logoText: 'LK博客',
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
    sidebar: {
      '/note/': [
        {
          text: '学习笔记',
          items: [
            '/note/',
            {
              text: 'Basic',
              collapsed: true,
              items: [
                '/note/basic/ast',
                '/note/basic/bfc',
                '/note/basic/cjs',
                '/note/basic/closure',
                '/note/basic/copy',
                '/note/basic/datatype',
                '/note/basic/delegate',
                '/note/basic/event',
                '/note/basic/extends',
                '/note/basic/iterator',
                '/note/basic/netmode',
                '/note/basic/new',
                '/note/basic/optimize',
                '/note/basic/post',
                '/note/basic/programtype',
                '/note/basic/promise',
                '/note/basic/running',
                '/note/basic/this'
              ]
            },
            {
              text: '浏览器',
              collapsed: true,
              items: [
                '/note/chrome/architecture',
                '/note/chrome/gc',
                '/note/chrome/link',
                '/note/chrome/repaint',
                '/note/chrome/router'
              ]
            },
            {
              text: '设计模式',
              collapsed: true,
              items: [
                '/note/design/concept',
                '/note/design/subscribe'
              ]
            },
            {
              text: 'Docker',
              collapsed: true,
              items: [
                '/note/docker/docker',
                '/note/docker/dockeroptimize',
                '/note/docker/dockerup'
              ]
            },
            {
              text: '工程化',
              collapsed: true,
              items: [
                '/note/engineering/hmr',
                '/note/engineering/npm',
                '/note/engineering/secure',
                '/note/engineering/vite'
              ]
            },
            {
              text: 'K8s',
              collapsed: true,
              items: [
                '/note/k8s/controller',
                '/note/k8s/k8s',
                '/note/k8s/service'
              ]
            },
            {
              text: 'React',
              collapsed: true,
              items: [
                '/note/react/diff',
                '/note/react/fiber',
                '/note/react/hook',
                '/note/react/performanceopt',
                '/note/react/setState',
                '/note/react/virtualdom'
              ]
            },
            {
              text: 'Vue',
              collapsed: true,
              items: [
                '/note/vue/vue'
              ]
            },
            {
              text: '源码阅读',
              collapsed: true,
              items: [
                '/note/source-read/koa'
              ]
            },
            {
              text: '源码实现',
              collapsed: true,
              items: [
                '/note/source-realize/call',
                '/note/source-realize/concurrency',
                '/note/source-realize/debounce',
                '/note/source-realize/inject',
                '/note/source-realize/instanceof',
                '/note/source-realize/iterator',
                '/note/source-realize/promise'
              ]
            }
          ]
        }
      ]
    },
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
