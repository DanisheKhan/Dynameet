import { NavBar, Hero, Discography, Events, Contact, About } from './components'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import MusicPage from './pages/MusicPage'
import EventsPage from './pages/EventsPage'
import './styles/globals.css'
import './styles/components.css'

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <Discography />
              <Contact />
            </>
          )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </div>
  )
}
