import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar, Hero, Discography, Footer, Events, ScrollToTop } from './components'
import './styles/globals.css'
import './styles/components.css'
import './styles/layout.css'

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'))
const MusicPage = lazy(() => import('./pages/MusicPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-[#FF33C5] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-[#0c0c0c] bg-noise overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="pt-[90px] flex-grow"> {/* Added padding to accommodate the floating navbar */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Hero />
                  <Events />
                  <Discography />
                  <Footer />
                </>
              )}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
      <ScrollToTop />
    </div>
  )
}
