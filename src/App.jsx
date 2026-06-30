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
import SEO          from './components/SEO'

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
import Sugarcane         from './pages/Sugarcane'

const ROUTES = {
  '#/':                   'home',
  '#home':                'home',
  '#/banana-plants':      'banana',
  '#/about-us':           'about',
  '#/our-people':         'people',
  '#/csi':                'csi',
  '#/formosana':          'formosana',
  '#/sugarcane-plants':  'sugarcane',
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
      <SEO
        title="Tissue Culture Plants Supplier India"
        description="Verdant BioAgri LLP — India's leading supplier of tissue culture Banana, Pomegranate and Sugarcane plants. DBT certified, disease-free, high-yield planting material."
        keywords="tissue culture banana plants, pomegranate tissue culture, sugarcane seedlings, verdant bioagri, tissue culture lab India, disease free plants"
        url="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Verdant BioAgri LLP',
          url: 'https://verdantbioagri.com',
          description: 'India\'s leading supplier of tissue culture Banana, Pomegranate and Sugarcane plants.',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://verdantbioagri.com/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
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
    sugarcane:   <Sugarcane />,
    pomegranate: <PomegranatePlants />,
    media:     <MediaPublications />,
    gallery:   <Gallery />,
    contact:   <Contact />,
  }

  return pages[page] ?? <HomePage />
}
