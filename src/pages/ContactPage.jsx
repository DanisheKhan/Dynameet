import { Footer, PageLayout, ContentSection } from '../components'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '../data/content'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
  }

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

  return (
    <PageLayout>
      <ContentSection maxWidth="max-w-6xl" className="pt-20 pb-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-lalezar text-transparent bg-clip-text bg-gradient-to-r from-[#FF33C5] via-[#BF5AF2] to-[#FF33C5] mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 max-w-2xl mx-auto font-inter leading-relaxed"
            >
              Ready to book DJ DynaMeets for your event? Have questions about availability or services? 
              Fill out the form below and let's create something unforgettable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Form - Left Side */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden group">
                {/* Decorative gradient blob */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF33C5] rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#FF33C5] ml-1 uppercase tracking-wider font-lalezar">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF33C5] focus:ring-1 focus:ring-[#FF33C5] transition-all duration-300 backdrop-blur-md"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#FF33C5] ml-1 uppercase tracking-wider font-lalezar">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF33C5] focus:ring-1 focus:ring-[#FF33C5] transition-all duration-300 backdrop-blur-md"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative z-10">
                  <label htmlFor="phone" className="text-sm font-medium text-[#FF33C5] ml-1 uppercase tracking-wider font-lalezar">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF33C5] focus:ring-1 focus:ring-[#FF33C5] transition-all duration-300 backdrop-blur-md"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-2 relative z-10">
                  <label htmlFor="message" className="text-sm font-medium text-[#FF33C5] ml-1 uppercase tracking-wider font-lalezar">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FF33C5] focus:ring-1 focus:ring-[#FF33C5] transition-all duration-300 backdrop-blur-md resize-none"
                    placeholder="Tell us about your event requirements..."
                  ></textarea>
                </div>

                <div className="pt-4 relative z-10">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] text-white font-lalezar text-xl tracking-wide py-4 px-8 rounded-xl shadow-lg shadow-[#FF33C5]/30 hover:shadow-[#FF33C5]/50 transition-all duration-300 group-hover:to-[#D929A6]"
                  >
                    SEND MESSAGE
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10 lg:pl-8">
              <div className="relative">
                 {/* Decorative line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF33C5] via-[#BF5AF2] to-transparent opacity-50"></div>
                
                <div className="pl-8 space-y-10">
                  <div>
                    <h3 className="text-2xl font-lalezar text-white mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center border border-[#FF33C5]/50">
                        <svg className="w-5 h-5 text-[#FF33C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Get in Touch
                    </h3>
                    <div className="space-y-6">
                      <div className="group">
                        <p className="text-sm text-gray-400 font-inter mb-1">Email Us</p>
                        <a href={`mailto:${contactInfo.email}`} className="text-lg md:text-xl text-white font-medium hover:text-[#FF33C5] transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                          {contactInfo.email}
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                      
                      <div className="group">
                        <p className="text-sm text-gray-400 font-inter mb-1">Call Us</p>
                        <a href={`tel:${contactInfo.phone.split('/')[0].trim()}`} className="text-lg md:text-xl text-white font-medium hover:text-[#FF33C5] transition-colors group-hover:translate-x-1 transition-transform duration-300 block">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-lalezar text-white mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center border border-[#FF33C5]/50">
                        <svg className="w-5 h-5 text-[#FF33C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {contactInfo.socialLinks
                        .filter(l => ['Music', 'Spotify'].includes(l.label) || l.icon?.length <= 2)
                        .map((link, idx) => (
                          <motion.a
                            key={idx}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            href={link.href}
                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF33C5] hover:border-[#FF33C5] transition-all duration-300 shadow-lg text-2xl"
                            aria-label={link.label}
                          >
                            {link.icon} 
                          </motion.a>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ContentSection>
      <Footer />
    </PageLayout>
  )
}