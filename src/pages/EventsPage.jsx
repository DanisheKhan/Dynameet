import Events from '../components/sections/Events'
import { Footer } from '../components'

export default function EventsPage() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden">
      <div className="pt-[140px] text-center">
        <h1 className="font-[800] text-[90px] leading-[1.1] text-[#FF6FCF]">EVENTS</h1>
        <p className="mt-3 mx-auto max-w-[636px] font-inter text-[20px] leading-[1.4] text-[#999] px-4">
          Join me for unforgettable nights of music, energy, and connection. From intimate underground sessions to massive festival stages.
        </p>
      </div>
      <div className="mt-12">
        <Events />
      </div>
      <Footer />
    </div>
  )
}


