import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navigationItems, contactInfo } from '../../data/content'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // SVG icons for social media
  const socialIcons = {
    Email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
      </svg>
    ),
    Phone: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
      </svg>
    ),
    Music: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
      </svg>
    ),
    Spotify: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.75 11.5a.5.5 0 01-.684.183c-1.876-1.146-4.243-1.403-7.026-.77a.5.5 0 11-.2-.98c3.046-.62 5.663-.333 7.726.95a.5.5 0 01.183.683zm1-2.5a.62.62 0 01-.854.23c-2.15-1.32-5.428-1.704-7.972-.932a.624.624 0 01-.773-.408.624.624 0 01.408-.773c2.905-.88 6.517-.454 8.962 1.03a.624.624 0 01.229.853zm.086-2.5c-2.578-1.531-6.832-1.672-9.294-.925a.75.75 0 11-.433-1.435c2.826-.85 7.523-.683 10.492 1.07a.75.75 0 01-.765 1.29z"></path>
      </svg>
    )
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <footer id="footer" className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF33C5]/50 to-transparent"></div>
      <div className="absolute -top-[200px] left-1/4 w-[500px] h-[500px] bg-[#FF33C5]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Column - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h2 className="font-lalezar text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-6 drop-shadow-sm">
              DynaMeets
            </h2>

            <p className="font-poppins text-lg text-white/60 max-w-md mb-8 leading-relaxed">
              Premier DJ and entertainment services transforming events into unforgettable sonic experiences.
            </p>

            {/* Contact Info Grid */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full sm:w-auto">
                <a href={`mailto:${contactInfo.email}`} className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF33C5]/50 hover:bg-[#FF33C5]/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-[#FF33C5]">
                        {socialIcons.Email}
                    </div>
                    <div className="text-left">
                        <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Email</div>
                        <div className="text-sm text-white font-medium">{contactInfo.email}</div>
                    </div>
                </a>

                <a href={`tel:+91${contactInfo.phone.split(' ')[0]}`} className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF33C5]/50 hover:bg-[#FF33C5]/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-[#FF33C5]">
                        {socialIcons.Phone}
                    </div>
                    <div className="text-left">
                         <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Phone</div>
                        <div className="text-sm text-white font-medium">{contactInfo.phone}</div>
                    </div>
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
               {contactInfo.socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-[#FF33C5] hover:border-[#FF33C5] flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  {socialIcons[social.label]}
                </motion.a>
              ))}
            </div>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative flex justify-center lg:justify-end"
          >
             <div className="relative z-10 w-full max-w-md lg:max-w-lg aspect-square">
                 {/* Glow behind image */}
                 <div className="absolute inset-0 bg-gradient-radial from-[#FF33C5]/20 to-transparent blur-3xl rounded-full"></div>
                 <img
                    src="/images/footerImg.png"
                    alt="DJ DynaMeetss"
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                 />
             </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             {/* Nav Links */}
            <nav>
              <ul className="flex flex-wrap justify-center gap-6">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-poppins text-sm text-white/60 hover:text-[#FF33C5] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <p className="font-poppins text-xs text-white/40">
              © {currentYear} DynaMeets. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;