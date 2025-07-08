import React from 'react'

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero py-20">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="fa fa-user text-4xl text-secondary-600"></i>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">在线简历</h1>
          <p className="text-xl text-gray-600 mb-8">
            我的个人简历和职业经历，正在完善中...
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/" className="btn-primary">
              <i className="fa fa-home mr-2"></i>
              返回首页
            </a>
            <a href="https://github.com/lkzwc" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <i className="fa-brands fa-github mr-2"></i>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
