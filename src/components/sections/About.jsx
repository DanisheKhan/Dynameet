const items = [
  { title: 'Afro Beats', desc: 'Infectious rhythms that move the soul', iconTint: '#F042B6' },
  { title: 'Tribal Grooves', desc: 'Deep, primal connections to ancient sounds', iconTint: '#F042B6' },
  { title: 'Bollywood Hooks', desc: 'Vibrant melodies that ignite celebration', iconTint: '#F042B6' },
  { title: 'Arabic Textures', desc: 'Exotic layers of mystical atmosphere', iconTint: '#F042B6' },
]

export default function About() {
  return (
    <section id="about" className="w-full relative bg-[#0c0c0c] overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Split Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 lg:pb-20 pt-4 lg:pt-8">
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <h1 className="font-lalezar text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight mb-4 sm:mb-6 lg:mb-8">
              <span className="text-white block">MEET</span>
              <span className="bg-gradient-to-r from-[#F042B6] to-[#F042B6] bg-clip-text text-transparent block">
                DIYA SINGH
              </span>
            </h1>
            <div className="font-poppins text-[18px] leading-[1.6] text-white/90 max-w-[500px]">
              <p>
                DJ Dynameets is known for her unique sound and commanding presence behind the decks, solidifying her status as a rising star in the Indian Bollytech music scene.
                Her sets seamlessly fuse Afro Tech, Melodic House, and Club Fusion, creating high-energy experiences on the dance floor.
              </p>
              <p>
                A sought-after party DJ, Dynameets hails from the renowned musical family of Meet Bros.
                After taking the Mumbai party circuit by storm, she soon conquered major party hubs across India, and the world.
              </p>
              <p>
                With Bollywood music gaining global popularity, DJ Dynameets is fast emerging as an international sensation. Her versatility and genre-bending sets have captivated audiences across India, further extending the Meet Bros’ legacy into the party and club scene.
              </p>

            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Gradient glow background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] lg:w-[400px] h-[280px] sm:h-[350px] lg:h-[400px] rounded-full opacity-60 [filter:blur(100px)] sm:[filter:blur(150px)]"
              style={{ background: 'radial-gradient(circle, rgba(240,66,182,0.8) 0%, rgba(240,66,182,0.3) 50%, transparent 100%)' }} />
            {/* Main image */}
            <img
              src="/images/about-hero-55a245.png"
              alt="Diya Singh - DynaMeetss"
              className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Signature Sound Palette Section */}
        <div className="pb-12 sm:pb-16 lg:pb-20">
          <h2 className="font-lalezar text-3xl sm:text-4xl lg:text-[48px] xl:text-[56px] text-white mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left">
            Signature Sound Palette
          </h2>

          {/* Sound Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
            {items.map((item) => (
              <div key={item.title} className="group relative">
                {/* Card background with glass effect */}
                <div className="relative rounded-xl sm:rounded-2xl glass-premium p-3 sm:p-4 lg:p-6 transition-all-300 group-hover:shadow-glow group-hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#F042B6]/20 to-[#F042B6]/5 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#F042B6] shadow-[0_0_10px_#F042B6]"></div>
                  </div>

                  {/* Content */}
                  <h3 className="font-poppins text-sm sm:text-base lg:text-[18px] font-semibold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-xs sm:text-sm lg:text-[14px] text-white/70 leading-relaxed hidden xs:block">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Discover More Button */}
          <div className="flex justify-center">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#F042B6] to-[#E91E63] hover:opacity-90 interactive-hover glow">
              <span className="font-poppins text-sm sm:text-[16px] font-medium text-white">
                Discover More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


