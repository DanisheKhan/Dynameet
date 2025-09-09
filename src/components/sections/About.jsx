const items = [
  { title: 'Afro Beats', desc: 'Infectious rhythms that move the soul', iconTint: '#F042B6' },
  { title: 'Tribal Grooves', desc: 'Deep, primal connections to ancient sounds', iconTint: '#F042B6' },
  { title: 'Bollywood Hooks', desc: 'Vibrant melodies that ignite celebration', iconTint: '#F042B6' },
  { title: 'Arabic Textures', desc: 'Exotic layers of mystical atmosphere', iconTint: '#F042B6' },
]

export default function About() {
  return (
    <section id="about" className="w-full relative bg-[#0c0c0c] min-h-screen">
      <div className="relative max-w-[1440px] mx-auto px-8">
        {/* Hero Section with Split Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 pt-32 pb-20">
          {/* Left Content */}
          <div className="order-1 lg:order-1 flex flex-col justify-center">
            <h1 className="font-lalezar text-[80px] lg:text-[100px] leading-[0.8] mb-8">
              <span className="text-white block">MEET</span>
              <span className="bg-gradient-to-r from-[#F042B6] to-[#F042B6] bg-clip-text text-transparent block">
                DIYA SINGH
              </span>
            </h1>
            <p className="font-poppins text-[18px] leading-[1.6] text-white/90 max-w-[500px]">
              Dynameets is the stage name of internationally acclaimed artist Diya Singh. A virtuoso of rhythm and atmosphere, she crafts immersive sonic experiences by masterfully blending Afro beats, tribal grooves, Bollywood hooks, and Arabic textures. Renowned for her magnetic stage presence, Dynameets is the premier choice for the world's most exclusive VVIP events and private gatherings.
            </p>
          </div>

          {/* Right Image */}
          <div className="order-2 lg:order-2 relative flex justify-center lg:justify-end">
            {/* Gradient glow background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-60 [filter:blur(150px)]"
              style={{ background: 'radial-gradient(circle, rgba(240,66,182,0.8) 0%, rgba(240,66,182,0.3) 50%, transparent 100%)' }} />
            {/* Main image */}
            <img
              src="/images/about-hero-55a245.png"
              alt="Diya Singh - Dynameets"
              className="relative z-10 w-full max-w-[500px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Signature Sound Palette Section */}
        <div className="pb-20">
          <h2 className="font-lalezar text-[48px] lg:text-[56px] text-white mb-12 text-center lg:text-left">
            Signature Sound Palette
          </h2>

          {/* Sound Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {items.map((item) => (
              <div key={item.title} className="group relative">
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"></div>
                <div className="relative rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10 p-6 hover:border-[#F042B6]/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F042B6]/20 to-[#F042B6]/5 flex items-center justify-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-[#F042B6]"></div>
                  </div>

                  {/* Content */}
                  <h3 className="font-poppins text-[18px] font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-[14px] text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Discover More Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F042B6] to-[#E91E63] hover:from-[#E91E63] hover:to-[#F042B6] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#F042B6]/25">
              <span className="font-poppins text-[16px] font-medium text-white">
                Discover More
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


