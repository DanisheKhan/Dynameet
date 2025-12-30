import { discographyData } from '../../data/content'

const Discography = () => {
  return (
    <section id="music" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-lalezar text-5xl md:text-6xl lg:text-7xl text-white mb-8">
          Discography
        </h2>

        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex gap-6 lg:gap-8 animate-marquee w-max px-4 hover:pause-on-hover">
            {[...discographyData, ...discographyData, ...discographyData, ...discographyData].map((disc, index) => (
              <div
                key={index}
                className="relative w-[307px] h-[495px] rounded-[10px] overflow-hidden group cursor-pointer flex-shrink-0"
              >
                <img
                  src={`/images/${disc.img}`}
                  alt={disc.title}
                  className="w-full h-full object-cover group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100" />

                {/* Content overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100">
                  <h3 className="font-poppins font-bold text-[14px] mb-1">
                    {disc.title}
                  </h3>
                  {disc.subtitle && (
                    <p className="font-poppins text-[12px] text-white/80">
                      {disc.subtitle}
                    </p>
                  )}
                  {disc.date && (
                    <p className="font-poppins text-[12px] text-[#FF33C5]">
                      {disc.date}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discography
