import { discographyData } from '../../data/content'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Discography = () => {
  return (
    <section id="music" className="py-20 md:py-32 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#FF33C5]/5 to-transparent opacity-50 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-12">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="font-lalezar text-5xl md:text-6xl lg:text-7xl text-white mb-2">
                Discography
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] rounded-full"></div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
              <Link to="/music" className="hidden md:flex items-center gap-2 text-white/80 hover:text-[#FF33C5] transition-colors font-poppins group">
                  View Full Discography 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
           </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="flex gap-6 lg:gap-8 animate-marquee w-max px-4 hover:pause-on-hover">
            {[...discographyData, ...discographyData, ...discographyData, ...discographyData].map((disc, index) => (
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                key={index}
                className="relative w-[307px] h-[495px] rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border border-white/5 bg-white/5"
              >
                <img
                  src={`/images/${disc.img}`}
                  alt={disc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF33C5]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-lalezar text-2xl mb-1 leading-none drop-shadow-lg">
                    {disc.title}
                  </h3>
                  {disc.subtitle && (
                    <p className="font-poppins text-sm text-white/90 font-medium tracking-wide mb-1">
                      {disc.subtitle}
                    </p>
                  )}
                  {disc.date && (
                    <p className="font-poppins text-xs text-white/80 uppercase tracking-widest border-t border-white/30 pt-2 mt-2 inline-block">
                      {disc.date}
                    </p>
                  )}
                  
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                     <span className="w-8 h-8 rounded-full bg-white text-[#FF33C5] flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                     </span>
                     <span className="font-lalezar text-sm">LISTEN NOW</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/music" className="inline-flex items-center gap-2 text-white/80 hover:text-[#FF33C5] transition-colors font-poppins">
                  View Full Discography →
            </Link>
        </div>
      </div>
    </section>
  )
}

export default Discography
