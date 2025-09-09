import { discographyData } from '../../data/content'

const Discography = () => {
  return (
    <section id="music" className="mt-[190px] px-4">
      <h2 className="ml-[72px] font-lalezar text-[80px] text-white mb-8">
        Discography
      </h2>

      <div className="overflow-x-auto">
        <div className="flex gap-[28px] w-max px-[72px]">
          {discographyData.map((disc, index) => (
            <div
              key={index}
              className="relative w-[307px] h-[495px] rounded-[10px] overflow-hidden group cursor-pointer"
            >
              <img
                src={`/images/${disc.img}`}
                alt={disc.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </section>
  )
}

export default Discography
