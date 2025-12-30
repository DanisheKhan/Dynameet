import { Footer, PageLayout, ContentSection } from '../components'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
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

  const soundPalette = [
    { title: 'Afro Beats', desc: 'Infectious rhythms that move the soul' },
    { title: 'Tribal Grooves', desc: 'Deep, primal connections to ancient sounds' },
    { title: 'Bollywood Hooks', desc: 'Vibrant melodies that ignite celebration' },
    { title: 'Arabic Textures', desc: 'Exotic layers of mystical atmosphere' },
  ]

  return (
    <PageLayout>
      <ContentSection maxWidth="max-w-7xl" className="pt-20 pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">

            {/* Text Content */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <h1 className="font-lalezar text-6xl md:text-8xl leading-none mb-8 text-white">
                MEET <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF33C5] via-[#BF5AF2] to-[#FF33C5]">
                  DIYA SINGH
                </span>
              </h1>

              <div className="space-y-6 text-lg text-white/80 font-inter leading-relaxed relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF33C5] to-transparent opacity-30"></div>
                <div className="pl-6 space-y-6">
                  <p>
                    DJ DynaMeets is known for her unique sound and commanding presence behind the decks,
                    solidifying her status as a rising star in the Indian Bollytech music scene.
                    Her sets seamlessly fuse Afro Tech, Melodic House, and Club Fusion, creating high-energy experiences on the dance floor.
                  </p>
                  <p>
                    A sought-after party DJ, Dynameets hails from the renowned musical family of Meet Bros.
                    After taking the Mumbai party circuit by storm, she soon conquered major party hubs across India, and the world.
                  </p>
                  <p>
                    With Bollywood music gaining global popularity, DJ Dynameets is fast emerging as an international sensation.
                    Her versatility and genre-bending sets have captivated audiences across India, further extending the Meet Bros legacy into the party and club scene.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2 relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] rounded-[2rem] opacity-20 blur-2xl transition-opacity duration-700"></div>

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <img
                  src="/image/7.jpeg"
                  alt="Diya Singh - DJ DynaMeets"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>

          {/* Sound Palette Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-lalezar text-white mb-4">
                Signature Sound Palette
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soundPalette.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF33C5]/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF33C5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#FF33C5]/20 flex items-center justify-center mb-6 border border-[#FF33C5]/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 rounded-full bg-[#FF33C5] shadow-[0_0_10px_#FF33C5]"></div>
                    </div>

                    <h3 className="text-xl font-lalezar text-white mb-3 group-hover:text-[#FF33C5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 font-inter text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-8"
            >
              <a href="#music" className="relative px-10 py-4 bg-white/5 border border-white/20 rounded-full font-lalezar text-xl tracking-wide text-white overflow-hidden group hover:border-[#FF33C5] transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Listen Now</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </ContentSection>
      <Footer />
    </PageLayout>
  )
}


