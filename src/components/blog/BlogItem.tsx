import React from "react";
import "../../../theme/output.css";

export function BlogItem(props) {
  const {
    item: { title, routePath, lastUpdatedTime },
  } = props;

  // 格式化日期
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article className="group relative">
      <div className="card-hover overflow-hidden animate-slide-up">
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
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
            <a
              href={`${routePath}.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {title}
            </a>
          </h3>

          {/* 元信息 */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <i className="fa fa-calendar text-primary-400"></i>
              <span>{formatDate(lastUpdatedTime)}</span>
            </div>

            <div className="flex items-center space-x-1 text-primary-500 group-hover:text-primary-600 transition-colors">
              <span className="text-xs font-medium">阅读</span>
              <i className="fa fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

          {/* 标签 */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full font-medium">
              技术博客
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
              前端开发
            </span>
          </div>

          {/* 底部装饰线 */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>

      {/* 悬浮阴影效果 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl transform translate-y-4"></div>
    </article>
  );
}
