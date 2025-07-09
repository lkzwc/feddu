import Theme from 'rspress/theme';
import Comment from '../src/components/comment/Comment';
import './global.css';

const HomeLayout = () => <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
  <header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    ></link>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8701466885719364"
     crossOrigin="anonymous"></script>
  </header>

  {/* Hero Section */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6 md:space-y-8 animate-pulse order-2 lg:order-1">
        <div className="relative">
          <i className="fa fa-quote-left text-2xl md:text-4xl text-blue-400 absolute -left-2 md:-left-4 -top-1 md:-top-2 opacity-50"></i>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ml-4 md:ml-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">I'm a program developer</span>
            <br />
            <span className="text-gray-700">who is enthusiastic about</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">new technology</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-600 ml-4 md:ml-8 max-w-lg">
          I believe in code change the world! Let's build amazing things together.
        </p>

        {/* Tech Stack Icons */}
        <div className="ml-4 md:ml-8">
          <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <div className="text-xl md:text-2xl text-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="text-xl md:text-2xl text-green-500 hover:text-green-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce" style={{animationDelay: '200ms'}}>
              <i className="fa-brands fa-vuejs"></i>
            </div>
            <div className="text-xl md:text-2xl text-yellow-500 hover:text-yellow-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce" style={{animationDelay: '300ms'}}>
              <i className="fa-brands fa-js-square"></i>
            </div>
            <div className="text-xl md:text-2xl text-green-600 hover:text-green-700 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce" style={{animationDelay: '500ms'}}>
              <i className="fa-brands fa-node"></i>
            </div>
            <div className="text-xl md:text-2xl text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce">
              <i className="fa-brands fa-docker"></i>
            </div>
            <div className="text-xl md:text-2xl text-gray-800 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce" style={{animationDelay: '100ms'}}>
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="text-xl md:text-2xl text-yellow-400 hover:text-yellow-500 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg animate-bounce" style={{animationDelay: '200ms'}}>
              <i className="fa-brands fa-less"></i>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="ml-4 md:ml-8 flex flex-col sm:flex-row gap-3 md:gap-4">
          <a href="/note" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl text-center">
            <i className="fa fa-book mr-2"></i>
            Start Learning
          </a>
          <a href="/blog" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300 text-center">
            <i className="fa fa-blog mr-2"></i>
            Read Blog
          </a>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="relative animate-pulse order-1 lg:order-2" style={{animationDelay: '300ms'}}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto lg:max-w-none">
          <img
            className="w-full h-auto object-cover"
            src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/5387dc7e035b3efe9d94516044de66a4.gif"
            alt="Developer coding animation"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Floating Cards - Hidden on mobile */}
        <div className="hidden md:block absolute -top-4 -right-4 bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-3 md:p-4 animate-bounce">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium">Available for work</span>
          </div>
        </div>

        <div className="hidden md:block absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-3 md:p-4 animate-bounce" style={{animationDelay: '500ms'}}>
          <div className="flex items-center space-x-2">
            <i className="fa fa-code text-blue-500 text-sm md:text-base"></i>
            <span className="text-xs md:text-sm font-medium">Full Stack Developer</span>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore my learning journey, blog posts, and curated resources for frontend development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* FE-DDU Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-calendar-check text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">FE-DDU</h3>
              <p className="text-gray-600 leading-relaxed">
                个人学习打卡，工作日必打，大家可以一起参与进来。通过持续学习和分享，共同进步。
              </p>
              <div className="mt-6">
                <a href="/note" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  开始学习 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse" style={{animationDelay: '200ms'}}>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-blog text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">博客</h3>
              <p className="text-gray-600 leading-relaxed">
                用最少的笔记学习最完整的知识点。精心整理的技术文章，帮助你快速掌握核心概念。
              </p>
              <div className="mt-6">
                <a href="/blog" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                  阅读博客 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse" style={{animationDelay: '300ms'}}>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-star text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">大神资源</h3>
              <p className="text-gray-600 leading-relaxed">
                前端工具库、前端大神博客。精选的开发工具和学习资源，助力你的技术成长。
              </p>
              <div className="mt-6">
                <a href="/system" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center">
                  探索资源 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  {/* Footer */}
  <footer className="bg-gray-900 text-white py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">特别鸣谢</h3>
          <p className="text-gray-300 leading-relaxed">
            感谢以下平台和工具为本站提供支持
          </p>
          <div className="space-y-3">
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noreferrer noopener"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
                alt="Deploys by Netlify"
                className="h-12 w-auto"
              />
            </a>
            <a
              href="https://rspress.dev/zh/"
              target="_blank"
              rel="noreferrer noopener"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png"
                alt="RSPress"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
 
        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">联系我</h3>
          <div className="space-y-3">
            <a
              href="https://github.com/lkzwc"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <i className="fa-brands fa-github text-xl mr-3"></i>
              <span>GitHub</span>
            </a>
            <div className="flex items-center text-gray-300">
              <i className="fa fa-envelope text-xl mr-3"></i>
              <span>联系邮箱</span>
            </div>
            <div className="flex items-center text-gray-300">
              <i className="fa fa-map-marker-alt text-xl mr-3"></i>
              <span>中国</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center">
        <p className="text-gray-400">
          Copyright © {new Date().getFullYear()} Design by{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">lkzwc</span>
          {' '}with ❤️
        </p>
      </div>
    </div>
  </footer>
</div>;

// 以下展示所有的 Props
const Layout = () => (
  <Theme.Layout
    /* 正文页 Footer 部分之前 */
    beforeDocFooter={<div><Comment /></div>}
  />
);

export default {
  ...Theme,
  Layout,
  HomeLayout
};

export * from 'rspress/theme';
