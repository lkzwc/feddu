import Theme from 'rspress/theme';
import Comment from '../src/components/comment/Comment';
import PasswordProtector from '../src/components/block/PasswordProtector';
import { usePageData } from 'rspress/runtime';
import './global.css';

const HomeLayout = () => <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <span className="text-gray-700 dark:text-gray-300">who is enthusiastic about</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">new technology</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 ml-4 md:ml-8 max-w-lg">
          I believe in code change the world! Let's build amazing things together.
        </p>

        {/* Tech Stack Icons */}
        <div className="ml-4 md:ml-8">
          <h3 className="text-base md:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 md:mb-4">Tech Stack</h3>
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
    <section className="py-12 md:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Explore my learning journey, blog posts, and curated resources for frontend development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* FE-DDU Card */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-calendar-check text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">FE-DDU</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                个人学习打卡，工作日必打，大家可以一起参与进来。通过持续学习和分享，共同进步。
              </p>
              <div className="mt-6">
                <a href="/note" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center">
                  开始学习 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse" style={{animationDelay: '200ms'}}>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-blog text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">博客</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                用最少的笔记学习最完整的知识点。精心整理的技术文章，帮助你快速掌握核心概念。
              </p>
              <div className="mt-6">
                <a href="/blog" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium inline-flex items-center">
                  阅读博客 <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-pulse" style={{animationDelay: '300ms'}}>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa fa-star text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">大神资源</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                前端工具库、前端大神博客。精选的开发工具和学习资源，助力你的技术成长。
              </p>
              <div className="mt-6">
                <a href="/system" className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium inline-flex items-center">
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
  <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    {/* 背景装饰 */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {/* 关于我 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fa fa-user text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">关于我</h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm">
            前端开发工程师，专注于现代 Web 技术栈。热爱分享技术心得，致力于构建优雅的用户体验。
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://github.com/lkzwc" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa-brands fa-github text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa fa-envelope text-sm"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              <i className="fa-brands fa-twitter text-sm"></i>
            </a>
          </div>
        </div>

        {/* 快速导航 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <i className="fa fa-compass text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">快速导航</h3>
          </div>
          <div className="space-y-3">
            <a href="/note/" className="block text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
              <i className="fa fa-book mr-2 text-blue-400"></i>学习笔记
            </a>
            <a href="/blog/" className="block text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
              <i className="fa fa-blog mr-2 text-green-400"></i>技术博客
            </a>
            <a href="/resume" className="block text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
              <i className="fa fa-user-tie mr-2 text-purple-400"></i>在线简历
            </a>
            <a href="/system" className="block text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200">
              <i className="fa fa-rocket mr-2 text-pink-400"></i>系统发布
            </a>
          </div>
        </div>

        {/* 技术栈 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <i className="fa fa-code text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">技术栈</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Vue', 'TypeScript', 'Node.js', 'Docker', 'K8s'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 特别鸣谢 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <i className="fa fa-heart text-white text-lg"></i>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">特别鸣谢</h3>
          </div>
          <div className="space-y-3">
            <a href="https://rspress.dev/zh/" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-3">
                  <img src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rspress/rspress-navbar-logo-dark-0904.png" alt="RSPress" className="h-6 w-auto" />
                  <span className="text-sm text-gray-300 group-hover:text-white">RSPress</span>
                </div>
              </div>
            </a>
            <a href="https://www.netlify.com" target="_blank" rel="noreferrer" className="block group">
              <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-3">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Netlify" className="h-6 w-auto" />
                  <span className="text-sm text-gray-300 group-hover:text-white">Netlify</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 分割线 */}
      <div className="border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="fa fa-code text-white text-sm"></i>
            </div>
            <span className="text-gray-400 text-sm">
              Made with <span className="text-red-400">❤️</span> by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">lkzwc</span>
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} 流客博客</span>
            <span className="hidden md:block">|</span>
            <span>Built with RSPress</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>;

// 自定义 Layout 组件，支持密码保护
const CustomLayout = (props: any) => {
  const { page } = usePageData();
  const pagePassword = page.frontmatter?.password as string;

  // 如果页面需要密码保护
  if (pagePassword) {
    return (
      <PasswordProtector password={pagePassword}>
        <Theme.Layout {...props} beforeDocFooter={<div><Comment key={props?.route?.path} /></div>} />
      </PasswordProtector>
    );
  }

  // 普通页面
  return <Theme.Layout {...props} beforeDocFooter={<div><Comment key={props?.route?.path}/></div>} />;
};

export default {
  ...Theme,
  Layout: CustomLayout,
  HomeLayout
};

export * from 'rspress/theme';
