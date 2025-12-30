import React from 'react';
import { contactInfo } from '../../data/content';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0c0c0c] py-12 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="font-lalezar text-2xl sm:text-3xl md:text-4xl text-white mb-6 sm:mb-8">Get In Touch</h2>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block font-poppins text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full glass bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF33C5] font-poppins transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-poppins text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full glass bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF33C5] font-poppins transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-poppins text-sm font-medium text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full glass bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF33C5] font-poppins transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-poppins text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full glass bg-transparent border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-[#FF33C5] font-poppins transition-colors duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF33C5] to-[#FD00B6] text-white text-sm sm:text-base font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg interactive-hover glow font-poppins w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-lalezar text-xl sm:text-2xl lg:text-[28px] text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6 font-poppins">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF33C5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm sm:text-base text-white/70 hover:text-[#FF33C5] break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF33C5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1">Phone</h4>
                    <a
                      href={`tel:+91${contactInfo.phone.split(' ')[0]}`}
                      className="text-sm sm:text-base text-white/70 hover:text-[#FF33C5]"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-3 sm:pt-4">
                  <h4 className="font-bold text-base sm:text-lg text-white mb-3 sm:mb-4">Follow Us</h4>
                  <div className="flex items-center gap-3 sm:gap-4">
                    {contactInfo.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:bg-[#FF33C5] hover:border-transparent interactive-hover"
                        aria-label={social.label}
                      >
                        <span className="text-base sm:text-lg">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="mt-6 sm:mt-8 glass-premium p-4 sm:p-6 rounded-xl border border-white/10">
              <h4 className="font-lalezar text-base sm:text-lg text-white mb-2 sm:mb-3">Booking Information</h4>
              <p className="font-poppins text-sm sm:text-base text-white/70 mb-3 sm:mb-4">
                For event bookings and performance inquiries, please contact us directly by email or phone.
                We're available for club events, private parties, corporate functions, and festivals.
              </p>
              <button className="font-poppins text-sm sm:text-base text-[#FF33C5] font-medium hover:underline">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;