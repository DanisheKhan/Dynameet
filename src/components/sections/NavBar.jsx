import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationItems } from '../../data/content'
import { Logo } from '../'

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('HOME')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // Utility function to handle navigation and always scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  // Update active item based on current location and scroll to top
  useEffect(() => {
    const path = location.pathname
    const currentItem = navigationItems.find(item => {
      if (path === '/' && item.href === '/') return true
      if (path !== '/' && item.href === path) return true
      return false
    })

    if (currentItem) {
      setActiveItem(currentItem.label)
      // Scroll to top when location changes
      scrollToTop()
    }
  }, [location.pathname])

  const handleNavClick = (item) => {
    setActiveItem(item.label)
    setIsMobileMenuOpen(false)

    if (item.href.startsWith('/')) {
      navigate(item.href)
      // Scroll to top after navigation
      window.scrollTo(0, 0)
      return
    }
    if (item.href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Store the hash to scroll to after navigation completes
        const hash = item.href
        navigate('/')
        // Need to wait for navigation to complete before scrolling
        setTimeout(() => {
          if (hash === '#home') {
            window.scrollTo(0, 0)
          } else {
            const element = document.querySelector(hash)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }, 300) // Increased timeout for reliable navigation
        return
      }

      if (item.href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <nav className={`fixed ${scrolled ? 'top-[12px] sm:top-[10px]' : 'top-[30px] sm:top-[25px]'} left-0 right-0 w-full flex justify-center px-3 sm:px-4 z-50 transition-all duration-300 ease-in-out`}>
      <div className={`w-full max-w-[1328px] h-auto min-h-[52px] sm:min-h-[60px] md:min-h-[66px] rounded-[30px] sm:rounded-[40px] ${scrolled ? 'glass-premium' : 'glass'} flex flex-wrap md:flex-nowrap items-center justify-between px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-0 shadow-lg relative overflow-hidden transition-all duration-300`}>
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-[6px] sm:gap-[10px] p-[6px] sm:p-[10px]">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Logo />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white p-1.5 sm:p-2 rounded-full hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center gap-[37px] font-poppins text-[14px] font-medium text-white/90 md:ml-auto">
          {navigationItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-2 rounded-full cursor-pointer transition-all duration-300 hover:text-[#FF33C5] hover:bg-white/5 hover:scale-105 active:scale-95 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                onClick={() => {
                   window.scrollTo(0, 0)
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                className={`px-3 py-2 rounded-full cursor-pointer transition-all duration-300 hover:text-[#FF33C5] hover:bg-white/5 hover:scale-105 active:scale-95 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Navigation Items - Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col w-full md:hidden items-center gap-4 font-poppins text-[14px] font-medium text-white/90 rounded-[20px] bg-black/40 p-4 border border-white/10 backdrop-blur-md overflow-hidden"
            >
              {navigationItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-4 py-2 w-full text-center rounded-xl cursor-pointer transition-all duration-300 hover:text-[#FF33C5] hover:bg-white/5 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      window.scrollTo(0, 0)
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    className={`px-4 py-2 w-full text-center rounded-xl cursor-pointer transition-all duration-300 hover:text-[#FF33C5] hover:bg-white/5 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default NavBar
