import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/note', label: '笔记', icon: 'fa-book' },
    { path: '/blog', label: '博客', icon: 'fa-blog' },
    { path: '/resume', label: '在线简历', icon: 'fa-user' },
    { path: '/system', label: '系统发布', icon: 'fa-cog' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gradient">
            流客的网站
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <i className={`fa ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/lkzwc/feddu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <i className={`fa ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
              <a
                href="https://github.com/lkzwc/feddu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
