import { motion } from 'framer-motion'
import { Button } from '../'

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background gradient blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute left-[10%] sm:left-[20%] top-[40%] w-[80%] sm:w-[60%] h-[50%] rounded-full opacity-60 bg-gradient-radial from-[#FF33C5]/40 to-transparent blur-[80px] sm:blur-[120px] animate-pulse-slow"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-[10%] sm:right-[20%] bottom-[20%] w-[70%] sm:w-[50%] h-[40%] rounded-full opacity-40 bg-gradient-radial from-[#BF5AF2]/40 to-transparent blur-[60px] sm:blur-[100px] animate-pulse-slow delay-1000"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto flex flex-col items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] pt-20 sm:pt-24 md:pt-0">

        {/* Main Title Group */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-center max-w-[95vw] md:max-w-[90vw] 2xl:max-w-[1600px] mx-auto">
          {/* Left Text: DYNA - Desktop only */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute left-0 text-[10vw] lg:text-[13vw] xl:text-[180px] 2xl:text-[220px] font-lalezar leading-none text-white z-0 select-none drop-shadow-2xl"
          >
            DYNA
          </motion.h1>

          {/* Mobile Title */}
          <div className="md:hidden text-center w-full relative z-10 mb-4">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[15vw] xs:text-[14vw] sm:text-[12vw] font-lalezar text-white leading-none drop-shadow-lg"
            >
              DYNA
            </motion.h1>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-[15vw] xs:text-[14vw] sm:text-[12vw] font-lalezar text-white leading-none drop-shadow-lg"
            >
              MEETS
            </motion.h1>
          </div>

          {/* Right Text: MEETS - Desktop only */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute right-0 text-[10vw] lg:text-[13vw] xl:text-[180px] 2xl:text-[220px] font-lalezar leading-none text-white z-0 text-right select-none drop-shadow-2xl"
          >
            MEETS
          </motion.h1>

          {/* Center Image */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 mx-auto mt-4 md:mt-0"
          >
            <div className="relative w-[220px] xs:w-[260px] sm:w-[300px] md:w-[350px] lg:w-[420px] xl:w-[450px] h-[320px] xs:h-[380px] sm:h-[440px] md:h-[500px] lg:h-[600px] xl:h-[650px] rounded-full sm:rounded-none overflow-hidden sm:overflow-visible mix-blend-normal">
              {/* Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-radial from-[#FF33C5]/20 to-transparent blur-3xl rounded-full"></div>

              <img
                src="/image/6.jpeg"
                alt="DJ DynaMeetss"
                loading="eager"
                fetchPriority="high"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Description Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative z-20 mt-6 sm:mt-8 md:mt-0 md:absolute md:bottom-12 lg:bottom-16 md:left-1/2 md:-translate-x-1/2 max-w-[90%] sm:max-w-md lg:max-w-lg text-center px-2"
        >
          <p className="font-poppins text-sm sm:text-base md:text-lg text-white/90 leading-relaxed bg-black/20 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/5">
            Where rhythm meets refinement, and culture becomes couture.
            <br className="hidden sm:block" />
            <span className="text-[#FF33C5] font-medium">DynaMeets</span> elevates every gathering into an exclusive sonic experience.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-8 sm:h-10 md:h-12 bg-gradient-to-b from-[#FF33C5] to-transparent"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

