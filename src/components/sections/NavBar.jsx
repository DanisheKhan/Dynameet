import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navigationItems } from '../../data/content'
import { Logo, Button } from '../'

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('HOME')

  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (item) => {
    setActiveItem(item.label)
    if (item.href.startsWith('/')) {
      navigate(item.href)
      return
    }
    if (item.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + item.href)
        return
      }
      const element = document.querySelector(item.href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="w-full flex justify-center mt-[25px] px-4">
      <div className="w-full max-w-[1328px] h-[66px] rounded-[30px] border border-transparent [border-image:linear-gradient(90deg,rgba(255,255,255,0.8),rgba(253,0,182,0.4))_1] bg-white/5 backdrop-blur-md flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-[10px] p-[10px]">
          <Logo />
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-[37px] font-poppins text-[14px] font-medium text-white/90">
          {navigationItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className={`cursor-pointer hover:text-[#FF33C5] transition-colors duration-200 ${activeItem === item.label ? 'text-[#FF33C5]' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                className={`cursor-pointer hover:text-[#FF33C5] transition-colors duration-200 ${activeItem === item.label ? 'text-[#FF33C5]' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-[21px]">
          <span className="font-poppins text-[14px] text-white/80 cursor-pointer hover:text-white transition-colors duration-200">
            LOGIN
          </span>
          <Button size="small">
            SIGN UP
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
