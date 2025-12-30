import { motion } from 'framer-motion'
import { Button } from '../'

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute left-[20%] top-[40%] w-[60%] h-[50%] rounded-full opacity-60 bg-gradient-radial from-[#FF33C5]/40 to-transparent blur-[120px] animate-pulse-slow"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute right-[20%] bottom-[20%] w-[50%] h-[40%] rounded-full opacity-40 bg-gradient-radial from-[#BF5AF2]/40 to-transparent blur-[100px] animate-pulse-slow delay-1000"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center min-h-[800px]">
        
        {/* Main Title Group */}
        <div className="relative w-full flex justify-between items-center max-w-[90vw] 2xl:max-w-[1600px] mx-auto">
          {/* Left Text: DYNA */}
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute left-0 text-[13vw] xl:text-[220px] font-lalezar leading-none text-white z-0 select-none drop-shadow-2xl"
          >
            DYNA
          </motion.h1>

          <div className="md:hidden text-center w-full relative z-10">
            <h1 className="text-[18vw] font-lalezar text-white leading-none drop-shadow-lg">DYNA</h1>
            <h1 className="text-[18vw] font-lalezar text-white leading-none drop-shadow-lg">MEETS</h1>
          </div>

          {/* Right Text: MEETS */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden md:block absolute right-0 text-[13vw] xl:text-[220px] font-lalezar leading-none text-white z-0 text-right select-none drop-shadow-2xl"
          >
            MEETS
          </motion.h1>

          {/* Center Image */}
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 mx-auto mt-10 md:mt-0"
          >
            <div className="relative w-[280px] md:w-[380px] lg:w-[450px] h-[400px] md:h-[550px] lg:h-[650px] rounded-full sm:rounded-none overflow-hidden sm:overflow-visible mix-blend-normal">
               {/* Glow behind image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-radial from-[#FF33C5]/20 to-transparent blur-3xl rounded-full"></div>
              
               <img
                src="/images/hero-main-5b069a.png"
                alt="DJ DynaMeetss"
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
            className="relative z-20 mt-8 md:mt-0 md:absolute md:bottom-16 md:left-1/2 md:-translate-x-1/2 max-w-lg text-center"
        >
            <p className="font-poppins text-base md:text-lg text-white/90 leading-relaxed bg-black/20 p-6 rounded-2xl border border-white/5">
              Where rhythm meets refinement, and culture becomes couture.
              <br className="hidden md:block"/>
              <span className="text-[#FF33C5] font-medium">DynaMeets</span> elevates every gathering into an exclusive sonic experience.
            </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF33C5] to-transparent"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

