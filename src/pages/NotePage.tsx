import React from 'react'

const NotePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero py-20">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fa fa-book text-4xl text-primary-600"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">学习笔记</h1>
          <p className="text-xl text-gray-600 mb-8">
            这里将展示我的学习笔记和技术文档，敬请期待...
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/" className="btn-primary">
              <i className="fa fa-home mr-2"></i>
              返回首页
            </a>
            <a href="/blog" className="btn-secondary">
              <i className="fa fa-blog mr-2"></i>
              查看博客
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotePage
