import { useState, useEffect } from 'react'

/* Home sections */
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Specialists  from './components/Specialists'
import YouNeed      from './components/YouNeed'
import WhyChooseUs  from './components/WhyChooseUs'
import WorldClass   from './components/WorldClass'
import IsoSection   from './components/IsoSection'
import GroupLogos   from './components/GroupLogos'
import Footer       from './components/Footer'

/* Pages */
import BananaPlants      from './components/BananaPlants'
import AboutUs           from './pages/AboutUs'
import OurPeople         from './pages/OurPeople'
import CSI               from './pages/CSI'
import Formosana         from './pages/Formosana'
import Gallery           from './pages/Gallery'
import Contact           from './pages/Contact'
import MediaPublications from './pages/MediaPublications'
import PomegranatePlants from './pages/PomegranatePlants'

const ROUTES = {
  '#/':                   'home',
  '#home':                'home',
  '#/banana-plants':      'banana',
  '#/about-us':           'about',
  '#/our-people':         'people',
  '#/csi':                'csi',
  '#/formosana':          'formosana',
  '#/pomegranate-plants': 'pomegranate',
  '#/media-publications': 'media',
  '#/gallery':            'gallery',
  '#/contact':            'contact',
}

function getPage() {
  const h = window.location.hash
  return ROUTES[h] || 'home'
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialists />
        <YouNeed />
        <WhyChooseUs />
        <WorldClass />
        <IsoSection />
        {/* <GroupLogos /> */}
        
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHash = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const pages = {
    home:      <HomePage />,
    banana:    <BananaPlants />,
    about:     <AboutUs />,
    people:    <OurPeople />,
    csi:       <CSI />,
    formosana: <Formosana />,
    pomegranate: <PomegranatePlants />,
    media:     <MediaPublications />,
    gallery:   <Gallery />,
    contact:   <Contact />,
  }

  return pages[page] ?? <HomePage />
}
