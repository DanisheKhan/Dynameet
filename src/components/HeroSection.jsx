const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/dynameet/vectorsAndLogos/v1.png" alt="" className="w-auto h-auto max-w-full max-h-full object-contain" />
      </div>

      {/* Background text DYNAMEETS */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[10rem] font-black text-white/10 leading-none select-none text-center px-4">
          DYNAMEETS
        </h1>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="relative flex items-center justify-center min-h-[80vh]">
            {/* Centered Artist image */}
            <div className="relative flex justify-center items-center">
              <div className="relative">
                <img
                  src="/dynameet/coverPic/c2.png"
                  alt="DYNAMEETS Artist"
                  className="w-auto h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-cover"
                  onError={(e) => {
                    e.target.src = '/dynameet/coverPic/c1.png'
                  }}
                />
              </div>
            </div>

            {/* Text content - responsive positioning */}
            <div className="absolute bottom-8 right-4 sm:bottom-12 sm:right-6 md:bottom-16 md:right-8 lg:right-16 xl:right-24 text-right max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                Where rhythm meets refinement, and culture becomes couture.
                Dynameets elevates every gathering into an exclusive sonic
                experience.
              </p>

              {/* Star icon */}
              <div className="flex justify-end mb-3 sm:mb-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-full transition-colors uppercase tracking-wide">
                  SIGN UP
                </button>
              </div>
            </div>

            {/* Mobile layout - bottom content */}
            <div className="absolute bottom-4 left-4 right-4 sm:hidden">
              <div className="text-center">
                <p className="text-white text-xs leading-relaxed mb-4 max-w-[280px] mx-auto">
                  Where rhythm meets refinement, and culture becomes couture.
                  Dynameets elevates every gathering into an exclusive sonic experience.
                </p>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs py-2 px-6 rounded-full transition-colors uppercase tracking-wide">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
