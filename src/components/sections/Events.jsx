const Events = () => {
  return (
    <section id="events" className="relative w-full min-h-[80vh] sm:min-h-screen bg-gradient-to-b from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c] py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-lalezar text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 gradient-text">
            Events & Highlights
          </h2>
          <p className="font-poppins text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Experience the energy and excitement of our latest performances
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden glass-premium border border-purple-500/20 group hover:shadow-glow transition-all duration-500">
            {/* Video Container */}
            <div className="relative aspect-[9/16] sm:aspect-[4/3] md:aspect-video">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster="/images/video-poster.jpg"
              >
                <source src="/Videos/reel1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-lalezar text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 text-white">Latest Performance</h3>
              <p className="font-poppins text-gray-300 text-xs sm:text-sm md:text-base">
                Catch the highlights from our recent show
              </p>
            </div>
          </div>

          {/* Additional Info or CTA */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="font-poppins text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 px-4">
              Want to see us live? Check out our upcoming events
            </p>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-poppins text-sm sm:text-base font-semibold hover:from-purple-700 hover:to-pink-700 interactive-hover glow">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
