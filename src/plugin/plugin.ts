import { RspressPlugin } from '@rspress/shared';
const path = require('path');

export function pluginTest(slug: string): RspressPlugin {
  // 组件路径，组件的内容你需要自己实现
  const componentPath = path.join(__dirname, 'Example.tsx');

  console.log("componentPath",componentPath)
  return {
    // 插件名称
    name: 'plugintest',
    // 全局组件的路径
    globalUIComponents: [componentPath],
    addPages(config, isProd) {
        return [
          //  支持真实文件的绝对路径(filepath)，这样会读取磁盘中的 md(x) 内容
          {
            routePath: '/blog',
            filepath: path.join(__dirname, 'blog', 'index.md'),
          },
          //  支持通过 content 参数直接传入 md(x) 内容
          {
            routePath: '/blog/test',
            content: '# Demo2',
          },
        ];
      },
    // 构建阶段的全局变量定义
    builderConfig: {
      source: {
        define: {
          'process.env.slug': JSON.stringify(slug),
        },
      },
    },
  };
}