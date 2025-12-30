const Events = () => {
  return (
    <section id="events" className="relative w-full min-h-screen bg-gradient-to-b from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-lalezar text-4xl md:text-5xl lg:text-6xl mb-4 gradient-text">
            Events & Highlights
          </h2>
          <p className="font-poppins text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the energy and excitement of our latest performances
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden glass-premium border border-purple-500/20 group hover:shadow-glow transition-all duration-500">
            {/* Video Container */}
            <div className="relative aspect-[9/16] md:aspect-video">
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
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="font-lalezar text-2xl md:text-3xl mb-2 text-white">Latest Performance</h3>
              <p className="font-poppins text-gray-300 text-sm md:text-base">
                Catch the highlights from our recent show
              </p>
            </div>
          </div>

          {/* Additional Info or CTA */}
          <div className="mt-8 text-center">
            <p className="font-poppins text-gray-400 mb-4">
              Want to see us live? Check out our upcoming events
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-poppins font-semibold hover:from-purple-700 hover:to-pink-700 interactive-hover glow">
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
