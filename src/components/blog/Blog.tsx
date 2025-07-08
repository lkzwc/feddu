import React from "react";
import { usePageData } from "rspress/runtime";
import { BlogItem } from "./BlogItem";
import "../../../theme/output.css";

export default function Blog() {
  const info = usePageData();

  const blogPosts = info?.siteData?.pages
    ?.filter(
      (item) => item.routePath.includes("/blog/") && item.routePath !== '/blog/'
    ) || [];

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
        {blogPosts.length > 0 ? (
          <>
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
              {blogPosts.map((item, index) => (
                <div
                  key={item.routePath}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogItem item={item} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* 空状态 */
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa fa-blog text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">暂无博客文章</h3>
            <p className="text-gray-600 mb-8">正在努力创作中，敬请期待...</p>
            <a href="/" className="btn-primary">
              <i className="fa fa-home mr-2"></i>
              返回首页
            </a>
          </div>
        )}
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
  );
}
