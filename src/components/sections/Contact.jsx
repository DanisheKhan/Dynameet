import React from 'react';
import { contactInfo } from '../../data/content';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0c0c0c] py-20">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Column - Contact Form */}
          <div className="w-full md:w-1/2">
            <h2 className="font-lalezar text-[36px] text-white mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF33C5]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF33C5]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-medium text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF33C5]"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF33C5]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF33C5] to-[#FD00B6] text-white font-medium py-3 px-8 rounded-lg hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h3 className="font-lalezar text-[28px] text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF33C5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Email</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-white/70 hover:text-[#FF33C5] transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF33C5]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#FF33C5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">Phone</h4>
                    <a 
                      href={`tel:+91${contactInfo.phone.split(' ')[0]}`} 
                      className="text-white/70 hover:text-[#FF33C5] transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-bold text-lg text-white mb-4">Follow Us</h4>
                  <div className="flex items-center gap-4">
                    {contactInfo.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center hover:bg-[#FF33C5] hover:border-transparent transition-all"
                        aria-label={social.label}
                      >
                        <span className="text-lg">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="mt-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg text-white mb-3">Booking Information</h4>
              <p className="text-white/70 mb-4">
                For event bookings and performance inquiries, please contact us directly by email or phone.
                We're available for club events, private parties, corporate functions, and festivals.
              </p>
              <button className="text-[#FF33C5] font-medium hover:underline">
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