import React from 'react'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'React 18 新特性详解',
      excerpt: '深入了解 React 18 带来的并发特性、自动批处理等新功能...',
      date: '2024-01-15',
      tags: ['React', 'JavaScript', '前端'],
      readTime: '5 分钟阅读'
    },
    {
      id: 2,
      title: 'TypeScript 高级类型技巧',
      excerpt: '掌握 TypeScript 的高级类型系统，提升代码质量和开发效率...',
      date: '2024-01-10',
      tags: ['TypeScript', '类型系统'],
      readTime: '8 分钟阅读'
    },
    {
      id: 3,
      title: 'Vite 构建工具深度解析',
      excerpt: '了解 Vite 的工作原理，以及如何在项目中高效使用...',
      date: '2024-01-05',
      tags: ['Vite', '构建工具', '性能优化'],
      readTime: '6 分钟阅读'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-down">
            技术博客
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-slide-up animate-delay-200">
            分享前端开发经验、技术心得和学习笔记，与你一起探索技术的无限可能
          </p>
          
          {/* 统计信息 */}
          <div className="mt-12 flex justify-center space-x-8 animate-fade-in animate-delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold">{blogPosts.length}</div>
              <div className="text-sm opacity-80">文章总数</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                <i className="fa fa-eye"></i>
              </div>
              <div className="text-sm opacity-80">持续更新</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                <i className="fa fa-heart"></i>
              </div>
              <div className="text-sm opacity-80">用心分享</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 博客列表 */}
      <div className="container-custom py-16">
        {/* 分类标签 */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-soft">
            <span className="text-gray-600">分类:</span>
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              全部 ({blogPosts.length})
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              前端开发
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              技术分享
            </span>
          </div>
        </div>
        
        {/* 博客卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="card-hover group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 卡片头部 - 渐变背景 */}
              <div className="h-32 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 relative overflow-hidden">
                {/* 装饰性图案 */}
                <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <i className="fa fa-blog text-white text-sm"></i>
                  </div>
                </div>
                
                {/* 悬浮效果装饰 */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>
              
              {/* 卡片内容 */}
              <div className="p-6 bg-white relative">
                {/* 标题 */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                {/* 摘要 */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* 元信息 */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <i className="fa fa-calendar text-primary-400"></i>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-xs">{post.readTime}</span>
                </div>
                
                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* 底部装饰线 */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* 底部 CTA */}
      <div className="bg-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            想要了解更多？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            关注我的 GitHub，获取最新的技术分享和项目更新
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/lkzwc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fa-brands fa-github mr-2"></i>
              关注 GitHub
            </a>
            <a href="/note" className="btn-secondary">
              <i className="fa fa-book mr-2"></i>
              查看笔记
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
