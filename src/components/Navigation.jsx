const Navigation = () => {
  return (
    <nav className="fixed top-3 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
      <div className="bg-black/80 backdrop-blur-lg rounded-full border border-gray-700/50 shadow-2xl px-3 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-2.5 md:py-3 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center">
              <img src="dynameet/vectorsAndLogos/v3.png" alt="DJ Logo" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <a href="#home" className="text-white text-xs xl:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 xl:px-4 py-2">
              HOME
            </a>
            <a href="#about" className="text-white text-xs xl:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 xl:px-4 py-2">
              ABOUT
            </a>
            <a href="#music" className="text-white text-xs xl:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 xl:px-4 py-2">
              MUSIC
            </a>
            <a href="#events" className="text-white text-xs xl:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 xl:px-4 py-2">
              EVENTS
            </a>
            <a href="#contact" className="text-white text-xs xl:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 xl:px-4 py-2">
              CONTACT
            </a>
          </div>

          {/* Right side buttons - responsive */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6">
            {/* Login button - hidden on smallest screens */}
            <button className="hidden sm:block text-white text-xs md:text-sm font-medium tracking-wide hover:text-pink-400 transition-colors duration-300 px-2 md:px-4 py-2">
              LOGIN
            </button>
            <button className="bg-gray-700/80 hover:bg-gray-600 text-white text-xs md:text-sm font-medium tracking-wide py-1.5 sm:py-2 px-3 sm:px-4 md:px-6 rounded-full transition-all duration-300 hover:shadow-lg">
              SIGN UP
            </button>
          </div>

          {/* Mobile menu button - visible on mobile and tablet */}
          <div className="lg:hidden">
            <button className="text-white hover:text-pink-400 transition-colors p-1 sm:p-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
