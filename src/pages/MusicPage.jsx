import { Footer } from '../components'
import Music from '../components/sections/Music'
import { Button } from '../components/ui/Button'

// Featured Album Component
const FeaturedAlbum = () => {
  return (
    <section className="py-20 relative">
      {/* Background Effect */}
      <div
        className="absolute left-[30%] top-[40%] w-[50%] h-[60%] rounded-full opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,51,197,0.3) 0%, rgba(253,0,182,0.2) 50%, transparent 100%)",
          filter: "blur(100px)"
        }}
      />

      <div className="max-w-[1290px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="/images/disc-6-2ed311.jpg"
                alt="Featured Album"
                className="w-full max-w-[450px] h-auto rounded-lg shadow-2xl mx-auto"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF33C5] to-[#BF5AF2] flex items-center justify-center text-white font-bold text-xl">
                NEW
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-lalezar text-[42px] text-white">Latest Album</h2>
            <h3 className="font-lalezar text-[64px] text-[#FF33C5] -mt-2">MIDNIGHT VIBE</h3>
            <p className="mt-6 text-[18px] text-[#d1d1d1] leading-relaxed">
              Experience the latest collection of tracks that blend deep house rhythms with melodic progressions.
              This album takes you on a journey through the night, from sunset grooves to dawn melodies.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#1A1D23] rounded-lg p-4">
                <div className="font-medium text-[#FF33C5]">Release Date</div>
                <div className="text-white text-lg">September 15, 2025</div>
              </div>
              <div className="bg-[#1A1D23] rounded-lg p-4">
                <div className="font-medium text-[#FF33C5]">Tracks</div>
                <div className="text-white text-lg">12 Original Tracks</div>
              </div>
              <div className="bg-[#1A1D23] rounded-lg p-4">
                <div className="font-medium text-[#FF33C5]">Genre</div>
                <div className="text-white text-lg">Deep House / Progressive</div>
              </div>
              <div className="bg-[#1A1D23] rounded-lg p-4">
                <div className="font-medium text-[#FF33C5]">Format</div>
                <div className="text-white text-lg">Digital / Vinyl</div>
              </div>
            </div>

            <div className="mt-8">
              <Button>Listen Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Music Platform Section
const MusicPlatforms = () => {
  const platforms = [
    { name: "Spotify", icon: "🎧" },
    { name: "Apple Music", icon: "🎵" },
    { name: "SoundCloud", icon: "🔊" },
    { name: "YouTube Music", icon: "▶️" },
    { name: "Beatport", icon: "🎚️" }
  ]

  return (
    <section className="py-16 bg-[#13151a]">
      <div className="max-w-[1290px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-lalezar text-[48px] text-white">Listen On</h2>
          <p className="mt-4 text-[18px] text-[#999999] max-w-[700px] mx-auto">
            Follow DJ Dynameets on your favorite music platforms to stay updated with the latest releases
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {platforms.map(platform => (
            <a key={platform.name} href="#" className="group">
              <div className="w-[180px] h-[180px] bg-[#1A1D23] rounded-xl flex flex-col items-center justify-center border border-[#2B303B] hover:border-[#FF33C5] transition-all p-6 hover:bg-[#1A1D23]/80 hover:shadow-lg">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <div className="text-white font-medium text-lg">{platform.name}</div>
                <div className="mt-2 text-[#FF33C5] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Listen Now →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function MusicPage() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden">
      <div>
        <Music />
        <FeaturedAlbum />
        <MusicPlatforms />
      </div>
      <Footer />
    </div>
  )
}
