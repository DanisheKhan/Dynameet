import { eventImages } from '../../data/content'
import Button from '../ui/Button'

const featuredEvents = [
  {
    id: 1,
    title: "Summer Nights Festival",
    date: "Thursday, August 15, 2024",
    time: "8:00 PM",
    location: "Rooftop Terrace, Downtown",
    description: "An electrifying night of house music under the stars with special guest DJs and immersive visuals.",
    capacity: "200 registered",
    featured: true,
    image: "/images/events-1.jpg"
  },
  {
    id: 2,
    title: "Underground Sessions",
    date: "Thursday, August 22, 2024",
    time: "10:00 PM",
    location: "The Basement Club",
    description: "Intimate underground vibes with deep house and techno. Limited capacity for an exclusive experience.",
    capacity: "18+ / No minors",
    featured: true,
    image: "/images/events-2.jpg"
  }
]

const regularEvents = [
  {
    id: 3,
    title: "Beach Party Remix",
    date: "8/29/2024",
    time: "8:00 PM",
    location: "Sunset Beach Resort",
    description: "Dance on the sand as the sun sets with tropical house and reggaeton remixes.",
    capacity: "150 / 300",
    image: "/images/events-3.jpg"
  },
  {
    id: 4,
    title: "Beach Party Remix",
    date: "8/29/2024",
    time: "8:00 PM",
    location: "Sunset Beach Resort",
    description: "Dance on the sand as the sun sets with tropical house and reggaeton remixes.",
    capacity: "150 / 300",
    image: "/images/events-1.jpg"
  },
  {
    id: 5,
    title: "Beach Party Remix",
    date: "8/29/2024",
    time: "8:00 PM",
    location: "Sunset Beach Resort",
    description: "Dance on the sand as the sun sets with tropical house and reggaeton remixes.",
    capacity: "150 / 300",
    image: "/images/events-2.jpg"
  }
]

const Events = () => {
  return (
    <section id="events" className="w-full bg-[#0c0c0c] py-20">
      <div className="max-w-[1440px] mx-auto px-8">


        {/* Featured Events */}
        <div className="mb-20">
          <h2 className="font-lalezar text-[36px] text-white mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <div key={event.id} className="group relative">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#F042B6] text-white px-3 py-1 rounded-full text-sm font-medium">
                    FEATURED
                  </span>
                </div>

                {/* Event Image */}
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Placeholder icon for missing images (only shows if image fails to load) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                  <h3 className="font-lalezar text-[24px] text-white mb-2">{event.title}</h3>

                  <div className="flex items-center gap-4 text-white/70 mb-3">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {event.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <p className="font-poppins text-[14px] text-white/80 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-sm text-white/70">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                        {event.capacity}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-[#F042B6] hover:bg-[#E91E63] text-white py-3 rounded-xl font-medium transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEvents.map((event) => (
            <div key={event.id} className="group relative">
              {/* Event Image */}
              <div className="relative h-[250px] rounded-2xl overflow-hidden mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Placeholder icon for missing images (only shows if image fails to load) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/10 p-5">
                <h3 className="font-poppins text-[18px] font-semibold text-white mb-2">{event.title}</h3>

                <div className="flex items-center gap-3 text-sm text-white/70 mb-3">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/70 mb-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{event.location}</span>
                </div>

                <p className="font-poppins text-[13px] text-white/70 mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      {event.capacity}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#F042B6] to-[#E91E63] hover:from-[#E91E63] hover:to-[#F042B6] text-white py-2.5 rounded-xl font-medium transition-all duration-300 text-sm">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
