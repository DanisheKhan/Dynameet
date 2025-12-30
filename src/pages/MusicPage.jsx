import { Footer, PageLayout, ContentSection } from '../components'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MusicPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const videos = [
    { id: '1', src: "https://www.youtube.com/embed/JI7MxFHHgME?si=0imPu23iXU5fZQ_A" },
    { id: '2', src: "https://www.youtube.com/embed/-g6N1f8-TkY?si=VUCqJ7kUGz2lsezF" },
    { id: '3', src: "https://www.youtube.com/embed/njdAvszYjc0?si=i1zQQmT00o9mmAp2" }
  ]

  const platforms = [
    { name: "Spotify", icon: "🎧", url: "#" },
    { name: "Apple Music", icon: "🎵", url: "#" },
    { name: "SoundCloud", icon: "☁️", url: "#" },
    { name: "YouTube Music", icon: "▶️", url: "#" },
    { name: "Beatport", icon: "🎚️", url: "#" }
  ]

  return (
    <PageLayout>
      <ContentSection maxWidth="max-w-7xl" className="pt-20 pb-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
             <motion.h1 
                variants={itemVariants} 
                className="text-6xl md:text-8xl font-lalezar text-white mb-2"
              >
                DJ DYNAMOO
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl font-lalezar text-transparent bg-clip-text bg-gradient-to-r from-[#FF33C5] via-[#BF5AF2] to-[#FF33C5]"
            >
              MUSIC
            </motion.h2>
          </div>

          {/* Featured Sections with alternating layout */}
          
          {/* 1. Latest Release - Hero Style */}
          <div className="mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <motion.div variants={itemVariants} className="relative z-10 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative group w-[300px] md:w-[450px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
                     <img 
                        src="/images/disc-8-607711.jpg" 
                        alt="Latest Release Vinyl" 
                        className="relative w-full aspect-square object-cover rounded-full border-4 border-white/10 shadow-2xl animate-[spin_10s_linear_infinite]" 
                     />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1/3 h-1/3 bg-[#0c0c0c] rounded-full border border-white/10 flex items-center justify-center">
                           <div className="w-3 h-3 bg-[#FF33C5] rounded-full"></div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div variants={itemVariants} className="lg:order-1 relative z-10">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#FF33C5]/20 border border-[#FF33C5] text-[#FF33C5] text-sm font-bold tracking-wider mb-6">
                    LATEST RELEASE
                  </span>
                  <h3 className="text-5xl md:text-6xl font-lalezar text-white mb-4">MIDNIGHT VIBE</h3>
                  <p className="text-lg text-white/70 font-inter leading-relaxed mb-8 max-w-lg">
                    Experience the latest collection of tracks that blend deep house rhythms with melodic progressions. 
                    This album takes you on a journey through the night, from sunset grooves to dawn melodies.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                     <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Genre</p>
                        <p className="text-white font-medium">Deep House</p>
                     </div>
                     <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Tracks</p>
                        <p className="text-white font-medium">12 Original Mixes</p>
                     </div>
                  </div>

                  <button className="px-8 py-4 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] text-white font-lalezar text-xl tracking-wide rounded-xl shadow-lg shadow-[#FF33C5]/20 hover:shadow-[#FF33C5]/40 hover:scale-105 transition-all duration-300">
                    LISTEN NOW
                  </button>
               </motion.div>
            </div>
          </div>

          {/* 2. Featured Album Card */}
          <motion.div variants={itemVariants} className="mb-32">
             <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   <div className="relative group">
                      <img 
                         src="/images/disc-6-2ed311.jpg" 
                         alt="Featured Album" 
                         className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" 
                      />
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF33C5] rounded-full flex items-center justify-center font-bold text-white shadow-lg animate-bounce">
                        NEW
                      </div>
                   </div>
                   
                   <div>
                      <h3 className="text-4xl md:text-5xl font-lalezar text-white mb-2">LIMITED EDITION</h3>
                      <h4 className="text-2xl font-lalezar text-[#BF5AF2] mb-6">DIGITAL / VINYL</h4>
                      <p className="text-white/70 font-inter mb-8 leading-relaxed">
                         Available now on all major platforms. Grab your physical copy of the limited edition vinyl, featuring exclusive bonus tracks and artwork.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {platforms.slice(0, 2).map((p, i) => (
                           <a 
                             key={i} 
                             href={p.url}
                             className="flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group"
                           >
                              <span className="text-2xl group-hover:scale-110 transition-transform">{p.icon}</span>
                              <span className="font-lalezar text-white tracking-wide">{p.name}</span>
                           </a>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* 3. Featured Videos */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
               <h2 className="text-4xl md:text-5xl font-lalezar text-white">Featured Sets</h2>
               <div className="h-[1px] flex-grow bg-gradient-to-r from-[#FF33C5] to-transparent opacity-50"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {videos.map((video, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video shadow-2xl"
                  >
                     <iframe
                        width="100%"
                        height="100%"
                        src={video.src}
                        title={`Featured Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                     ></iframe>
                     <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl group-hover:ring-[#FF33C5]/50 transition-all duration-300"></div>
                  </motion.div>
               ))}
            </div>
          </div>

          {/* 4. Listen Everywhere */}
          <motion.div variants={itemVariants} className="text-center bg-[#1A1A1A]/50 rounded-3xl p-12 border border-white/5 backdrop-blur-md">
             <h2 className="text-3xl md:text-4xl font-lalezar text-white mb-4">Listen Everywhere</h2>
             <p className="text-white/60 mb-10 max-w-xl mx-auto">Follow DJ DynaMeets on your favorite music platforms to stay updated with the latest releases</p>
             
             <div className="flex flex-wrap justify-center gap-6">
                {platforms.map((platform, idx) => (
                   <motion.a 
                     key={idx}
                     whileHover={{ y: -5 }}
                     href={platform.url} 
                     className="w-24 h-24 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center justify-center gap-2 text-white hover:border-[#FF33C5] hover:text-[#FF33C5] transition-all duration-300 shadow-xl"
                   >
                      <span className="text-3xl">{platform.icon}</span>
                      <span className="text-xs font-bold tracking-wider">{platform.name}</span>
                   </motion.a>
                ))}
             </div>
          </motion.div>

        </motion.div>
      </ContentSection>
      <Footer />
    </PageLayout>
  )
}

