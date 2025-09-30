import { Link } from 'react-router-dom';
import { navigationItems, contactInfo } from '../../data/content';

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

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-[#FD00B6] via-[#FF33C5] to-[#FF95DC] border-t-4 border-white/10">
      {/* Background pattern overlay with improved effects */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-8 py-12 px-6 lg:px-12">
          {/* Left Column - Footer content */}
          <div className="w-full lg:w-1/2 pt-2">
            {/* Logo with glow effect */}
            <h2 className="font-lalezar text-4xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Dynameet
            </h2>

            {/* Description with improved typography - reduced margins */}
            <p className="font-inter text-base leading-relaxed text-white/95 max-w-lg mb-6 animate-fade-in-up">
              Premier DJ and entertainment services for all your events.
              Bringing the most vibrant and energetic performances to transform your events into unforgettable experiences.
            </p>

            {/* Contact Information with improved styling - more compact */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4 interactive-hover">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg shadow-pink-500/20">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-inter font-bold text-base text-white mb-0.5">Email Us</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-inter text-sm text-white/90 hover:text-white transition-all hover:underline decoration-white/30 underline-offset-4"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 interactive-hover">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg shadow-pink-500/20">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-inter font-bold text-base text-white mb-0.5">Call Us</div>
                  <a
                    href={`tel:+91${contactInfo.phone.split(' ')[0]}`}
                    className="font-inter text-sm text-white/90 hover:text-white transition-all hover:underline decoration-white/30 underline-offset-4"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons with improved visuals - reduced size */}
            <div className="flex items-center gap-4 mb-6">
              {contactInfo.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-md hover:bg-white/30 
                  transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg shadow-pink-500/20
                  hover:shadow-xl hover:shadow-pink-500/30 hover:scale-110 social-icon-pulse"
                  aria-label={social.label}
                >
                  {socialIcons[social.label]}
                </a>
              ))}
            </div>

            {/* Navigation Links with improved hover effects - more compact */}
            <nav className="mb-6 border-t border-white/10 pt-6">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="font-poppins text-sm font-medium text-white/90 hover:text-white transition-all footer-link-hover"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright with improved styling */}
            <p className="font-inter text-xs text-white/70 border-t border-white/10 pt-4">
              © {currentYear} Dynameet. All Rights Reserved.
            </p>
          </div>

          {/* Right Column - Image with improved styling - reduced height and contain instead of cover */}
          <div className="w-full lg:w-1/2 pt-2 lg:pl-8">
            <div className="overflow-hidden">
              <img
                src="/images/footerImg.png"
                alt="DJ Dynameets"
                className=" object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;