import { Footer } from '../components'
import Music from '../components/sections/Music'

export default function MusicPage() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden">
      <div className="pb-20">
        <Music />
      </div>
      <Footer />
    </div>
  )
}

