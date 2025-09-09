import { Contact } from '../components'
import Music from '../components/sections/Music'

export default function MusicPage() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden">
      <Music />
      <Contact />
    </div>
  )
}


