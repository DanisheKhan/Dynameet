import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
    <nav className={`fixed ${scrolled ? 'top-[10px]' : 'top-[25px]'} left-0 right-0 w-full flex justify-center px-4 z-50 transition-all duration-300`}>
      <div className={`w-full max-w-[1328px] h-auto min-h-[66px] rounded-[40px] ${scrolled ? 'bg-black/60' : 'bg-white/5'} backdrop-blur-md flex flex-wrap md:flex-nowrap items-center justify-between px-4 md:px-6 py-2 md:py-0 shadow-lg relative transition-all duration-300 overflow-hidden`}>
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-[10px] p-[10px]">
            <Logo />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Items - Desktop and Mobile */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden md:flex'} flex-col md:flex-row w-full md:w-auto items-center gap-4 md:gap-[37px] font-poppins text-[14px] font-medium text-white/90 py-4 md:py-0 ${isMobileMenuOpen ? 'mt-4 rounded-[20px] bg-black/30 p-4' : ''} md:ml-auto`}>
          {navigationItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 py-2 rounded-full cursor-pointer hover:text-[#FF33C5] hover:bg-white/5 transition-all duration-200 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  // Scroll to top when route link is clicked
                  window.scrollTo(0, 0)
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                className={`px-3 py-2 rounded-full cursor-pointer hover:text-[#FF33C5] hover:bg-white/5 transition-all duration-200 ${activeItem === item.label ? 'text-[#FF33C5] bg-white/5' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
