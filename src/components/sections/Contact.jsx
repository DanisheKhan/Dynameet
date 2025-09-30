import { contactInfo } from '../../data/content'

const Contact = () => {
  return (
    <section id="contact" className="mt-[90px] relative scroll-mt-[120px]">
      <div className="w-full min-h-[765px] bg-gradient-to-br from-[#FD00B6] via-[#FF33C5] to-[#FF95DC] relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between h-full">
          {/* Left content */}
          <div className="pt-[71px] pl-[107px] w-full lg:w-[613px]">
            <div className="font-lalezar text-[80px] text-white mb-[19px]">
              Contact
            </div>

            <p className="w-full max-w-[593px] font-inter text-[20px] leading-[1.625] text-white/95 mb-[41px]">
              Ready to bring the energy to your event? Let's create unforgettable moments together.
            </p>

            {/* Contact Information */}
            <div className="space-y-[24px] mb-[24px]">
              <div className="flex items-center gap-[16px] w-full max-w-[299px]">
                <div className="relative w-[48px] h-[48px]">
                  <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-inter font-semibold text-[16px] text-white">Email</div>
                  <div className="font-inter text-[16px] text-white/90">{contactInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-[16px] w-full max-w-[299px]">
                <div className="relative w-[48px] h-[48px]">
                  <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-inter font-semibold text-[16px] text-white">Phone</div>
                  <div className="font-inter text-[16px] text-white/90">{contactInfo.phone}</div>
                </div>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-[16px]">
              {contactInfo.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-[40px] h-[40px] rounded-[6px] border border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-200 cursor-pointer flex items-center justify-center"
                  aria-label={social.label}
                >
                  <span className="text-white text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="absolute right-[44px] top-[38px] w-[592px] h-[722px] hidden lg:block">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent p-[2px] rounded-lg">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="public\images\footerImg.png"
                      alt="DJ Dynameets Contact"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
