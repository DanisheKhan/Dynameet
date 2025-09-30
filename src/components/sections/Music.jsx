const tracks = [
  {
    cover: "/images/disc-1-60f8da.jpg",
    title: "Midnight Dreams (Extended Mix)",
    artist: "DJ Dynameets",
    duration: "6:18",
    plays: "987",
    likes: "892",
    tag: "Deep House"
  },
  {
    cover: "/images/disc-2-108ec0.jpg",
    title: "Golden Hour (Club Edit)",
    artist: "DJ Dynameets",
    duration: "4:08",
    plays: "756",
    likes: "543",
    tag: "Progressive"
  },
  {
    cover: "/images/disc-5-5d312e.jpg",
    title: "Cosmic Journey (Radio Edit)",
    artist: "DJ Dynameets",
    duration: "3:56",
    plays: "543",
    likes: "432",
    tag: "Trance"
  },
  {
    cover: "/images/disc-4-520e12.jpg",
    title: "Electric Vibes (Original Mix)",
    artist: "DJ Dynameets",
    duration: "5:24",
    plays: "1245",
    likes: "978",
    tag: "House"
  },
  {
    cover: "/images/disc-6-2ed311.jpg",
    title: "Sunset Groove (Extended Mix)",
    artist: "DJ Dynameets",
    duration: "7:12",
    plays: "834",
    likes: "721",
    tag: "Tech House"
  },
  {
    cover: "/images/disc-7-70dc39.jpg",
    title: "Urban Dreams (Club Mix)",
    artist: "DJ Dynameets",
    duration: "5:48",
    plays: "1087",
    likes: "904",
    tag: "Progressive House"
  }
]

export default function Music() {
  return (
    <section id="music" className="w-full relative">
      {/* Background blur elements */}
      <div
        className="absolute left-[10%] top-[20%] w-[60%] h-[50%] rounded-full opacity-70"
        style={{
          background: "radial-gradient(ellipse at center, rgba(253,0,182,0.6) 0%, rgba(255,149,220,0.4) 30%, rgba(255,255,255,0.1) 70%, transparent 100%)",
          filter: "blur(120px)"
        }}
      />
      <div
        className="absolute right-[10%] bottom-[30%] w-[40%] h-[40%] rounded-full opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,51,197,0.5) 0%, rgba(253,0,182,0.3) 50%, transparent 100%)",
          filter: "blur(80px)"
        }}
      />

      <div className="max-w-[1290px] mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-[140px] pb-8">
          <div className="max-w-[600px] md:pr-8">
            <h1 className="font-lalezar text-[90px] leading-[1.12] text-[#FF6FCF] drop-shadow-lg">
              <span className="block">DJ DYNAMEETS</span>
              <span className="block text-white">MUSIC</span>
            </h1>
            <p className="mt-6 font-inter text-[20px] leading-[1.4] text-[#d1d1d1]">
              Experience exclusive remixes, bootlegs, and club edits. Immerse yourself in music reimagined with fresh energy and creativity.
            </p>
          </div>

          <div className="mt-8 md:mt-0 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <img
                src="/images/disc-8-607711.jpg"
                alt="DJ Dynameets Vinyl"
                className="w-full h-full object-cover rounded-full shadow-2xl animate-[spin_20s_linear_infinite] border-8 border-white/20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full bg-white/90 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[80px] px-4">
          <h2 className="font-lalezar text-[48px] text-white">Featured Music</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] rounded-full"></div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-[16px] bg-[#1A1D23] border border-[#2B303B] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={t.cover}
                  alt={t.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1D23] to-transparent opacity-60"></div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-[20px] bg-[#FF33C5] text-white font-medium text-[12px] shadow-lg">{t.tag}</span>
              </div>

              <div className="p-6">
                <div className="font-inter font-bold text-[20px] text-white truncate">{t.title}</div>
                <div className="font-inter text-[16px] text-[#FF33C5]/80">{t.artist}</div>

                <div className="mt-3 flex items-center gap-3 text-[#999] text-[14px]">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.plays} plays
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {t.likes} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


