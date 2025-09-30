import { NavBar, Hero, Discography, SimpleEvents, Events, Contact, About, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import MusicPage from './pages/MusicPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import './styles/globals.css'
import './styles/components.css'

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="pt-[90px] flex-grow"> {/* Added padding to accommodate the floating navbar */}
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <Discography />
                <SimpleEvents />
                <Footer />
              </>
            )}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}
