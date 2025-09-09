const tracks = [
  {
    cover: "/images/music-1.jpg",
    title: "Midnight Dreams (Extended Mix)",
    artist: "Original Artist",
    duration: "6:18",
    plays: "987",
    likes: "892",
    tag: "Deep House"
  },
  {
    cover: "/images/music-2.jpg",
    title: "Golden Hour (Club Edit)",
    artist: "Original Artist",
    duration: "4:08",
    plays: "756",
    likes: "543",
    tag: "Progressive"
  },
  {
    cover: "/images/music-3.jpg",
    title: "Cosmic Journey (Radio Edit)",
    artist: "Original Artist",
    duration: "3:56",
    plays: "543",
    likes: "432",
    tag: "Trance"
  }
]

export default function Music() {
  return (
    <section id="music" className="w-full">
      <div className="max-w-[1290px] mx-auto px-4">
        <div className="flex flex-col items-center text-center pt-[183px]">
          <h1 className="font-[800] text-[90px] leading-[1.12] text-[#FF6FCF]">MUSIC</h1>
          <p className="mt-3 max-w-[811px] font-inter text-[20px] leading-[1.4] text-[#999999]">
            Discover and download exclusive remixes, bootlegs, and club edits. Experience music reimagined with fresh energy and creativity.
          </p>
        </div>

        <div className="mt-[56px]">
          <h2 className="font-lalezar text-[48px]">Featured Music</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-[12px] bg-[#1A1D23] border border-[#2B303B] p-6">
              <div className="flex items-start gap-4">
                <img src={t.cover} alt={t.title} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-inter font-semibold text-[18px] text-white truncate">{t.title}</div>
                  <div className="font-inter text-[16px] text-[#999]">{t.artist}</div>
                  <div className="mt-2 flex items-center gap-3 text-[#999] text-[14px]">
                    <span>{t.duration}</span>
                    <span>•</span>
                    <span>{t.plays} plays</span>
                    <span>•</span>
                    <span>{t.likes} likes</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="px-2 py-1 rounded-[20px] bg-[#454545] text-[#ddd] text-[12px]">{t.tag}</span>
                <a href="#" className="px-3 py-2 rounded-[10px] bg-[linear-gradient(135deg,rgba(240,66,182,1)_0%,rgba(191,90,242,1)_100%)] text-white text-[14px]">
                  Download Free
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


