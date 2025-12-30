export default function Music() {
  return (
    <section id="music" className="w-full relative py-16">
      {/* Background blur elements */}
      <div
        className="absolute left-[10%] top-[20%] w-[60%] h-[50%] rounded-full opacity-70 animate-breathe"
        style={{
          background: "radial-gradient(ellipse at center, rgba(253,0,182,0.6) 0%, rgba(255,149,220,0.4) 30%, rgba(255,255,255,0.1) 70%, transparent 100%)",
          filter: "blur(120px)"
        }}
      />
      <div
        className="absolute right-[10%] bottom-[30%] w-[40%] h-[40%] rounded-full opacity-50 animate-breathe-delayed"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,51,197,0.5) 0%, rgba(253,0,182,0.3) 50%, transparent 100%)",
          filter: "blur(80px)"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 pb-8">
          <div className="max-w-[600px] md:pr-8">
            <h1 className="font-lalezar text-5xl md:text-7xl lg:text-[90px] leading-tight gradient-text drop-shadow-lg">
              <span className="block">DJ DynaMeetsS</span>
              <span className="block text-white bg-clip-text text-white bg-none">MUSIC</span>
            </h1>
            <p className="mt-6 font-poppins text-lg md:text-xl leading-relaxed text-[#d1d1d1]">
              Experience exclusive remixes, bootlegs, and club edits. Immerse yourself in music reimagined with fresh energy and creativity.
            </p>
          </div>

          <div className="mt-8 md:mt-0 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] group">
              <img
                src="/images/disc-8-607711.jpg"
                alt="DJ DynaMeetss Vinyl"
                className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white/20 animate-[spin_10s_linear_infinite] group-hover:animation-play-state:paused"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full bg-white/90 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-lalezar text-4xl md:text-5xl text-white mb-2">Featured Videos</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] rounded-full"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="glass-premium rounded-lg overflow-hidden group hover:shadow-glow transition-all-300">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JI7MxFHHgME?si=0imPu23iXU5fZQ_A"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="glass-premium rounded-lg overflow-hidden group hover:shadow-glow transition-all-300">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-g6N1f8-TkY?si=VUCqJ7kUGz2lsezF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 3 */}
          <div className="glass-premium rounded-lg overflow-hidden group hover:shadow-glow transition-all-300">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/njdAvszYjc0?si=i1zQQmT00o9mmAp2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


