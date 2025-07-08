import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="container-custom py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-up order-2 lg:order-1">
            <div className="relative">
              <i className="fa fa-quote-left text-2xl md:text-4xl text-primary-400 absolute -left-2 md:-left-4 -top-1 md:-top-2 opacity-50"></i>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ml-4 md:ml-8">
                <span className="text-gradient">I'm a program developer</span>
                <br />
                <span className="text-gray-700">who is enthusiastic about</span>
                <br />
                <span className="text-gradient-accent">new technology</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 ml-4 md:ml-8 max-w-lg">
              I believe in code change the world! Let's build amazing things together.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="ml-4 md:ml-8">
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <div className="icon-tech text-blue-500 hover:text-blue-600 icon-float animate-delay-100 text-xl md:text-2xl">
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="icon-tech text-green-500 hover:text-green-600 icon-float animate-delay-200 text-xl md:text-2xl">
                  <i className="fa-brands fa-vuejs"></i>
                </div>
                <div className="icon-tech text-yellow-500 hover:text-yellow-600 icon-float animate-delay-300 text-xl md:text-2xl">
                  <i className="fa-brands fa-js-square"></i>
                </div>
                <div className="icon-tech text-green-600 hover:text-green-700 icon-float animate-delay-500 text-xl md:text-2xl">
                  <i className="fa-brands fa-node"></i>
                </div>
                <div className="icon-tech text-blue-600 hover:text-blue-700 icon-float text-xl md:text-2xl">
                  <i className="fa-brands fa-docker"></i>
                </div>
                <div className="icon-tech text-gray-800 hover:text-gray-900 icon-float animate-delay-100 text-xl md:text-2xl">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="icon-tech text-yellow-400 hover:text-yellow-500 icon-float animate-delay-200 text-xl md:text-2xl">
                  <i className="fa-brands fa-less"></i>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="ml-4 md:ml-8 flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/note" className="btn-primary text-center">
                <i className="fa fa-book mr-2"></i>
                Start Learning
              </Link>
              <Link to="/blog" className="btn-secondary text-center">
                <i className="fa fa-blog mr-2"></i>
                Read Blog
              </Link>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative animate-slide-up animate-delay-300 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-large max-w-md mx-auto lg:max-w-none">
              <img
                className="w-full h-auto object-cover"
                src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/5387dc7e035b3efe9d94516044de66a4.gif"
                alt="Developer coding animation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards - Hidden on mobile */}
            <div className="hidden md:block absolute -top-4 -right-4 card glass p-3 md:p-4 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium">Available for work</span>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-4 -left-4 card glass p-3 md:p-4 animate-float animate-delay-500">
              <div className="flex items-center space-x-2">
                <i className="fa fa-code text-primary-500 text-sm md:text-base"></i>
                <span className="text-xs md:text-sm font-medium">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What I <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Explore my learning journey, blog posts, and curated resources for frontend development
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* FE-DDU Card */}
            <div className="card-hover group animate-slide-up">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-calendar-check text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">FE-DDU</h3>
                <p className="text-gray-600 leading-relaxed">
                  个人学习打卡，工作日必打，大家可以一起参与进来。通过持续学习和分享，共同进步。
                </p>
                <div className="mt-6">
                  <Link to="/note" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                    开始学习 <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Blog Card */}
            <div className="card-hover group animate-slide-up animate-delay-200">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-blog text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">博客</h3>
                <p className="text-gray-600 leading-relaxed">
                  用最少的笔记学习最完整的知识点。精心整理的技术文章，帮助你快速掌握核心概念。
                </p>
                <div className="mt-6">
                  <Link to="/blog" className="text-secondary-600 hover:text-secondary-700 font-medium inline-flex items-center">
                    阅读博客 <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Resources Card */}
            <div className="card-hover group animate-slide-up animate-delay-300">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa fa-star text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">大神资源</h3>
                <p className="text-gray-600 leading-relaxed">
                  前端工具库、前端大神博客。精选的开发工具和学习资源，助力你的技术成长。
                </p>
                <div className="mt-6">
                  <Link to="/system" className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center">
                    探索资源 <i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient-accent">特别鸣谢</h3>
              <p className="text-gray-300 leading-relaxed">
                感谢以下平台和工具为本站提供支持
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">快速链接</h3>
              <div className="space-y-2">
                <Link to="/note" className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fa fa-book mr-2"></i>学习笔记
                </Link>
                <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fa fa-blog mr-2"></i>技术博客
                </Link>
                <Link to="/resume" className="block text-gray-300 hover:text-white transition-colors">
                  <i className="fa fa-user mr-2"></i>在线简历
                </Link>
              </div>
            </div>
            
            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">联系我</h3>
              <div className="space-y-3">
                <a href="https://github.com/lkzwc" target="_blank" rel="noreferrer noopener" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <i className="fa-brands fa-github text-xl mr-3"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2024 Design by <span className="text-gradient font-medium">lkzwc</span> with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
