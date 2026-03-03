import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Principles from './components/Principles'
import Portfolio from './components/Portfolio'
import Quote from './components/Quote'
import Leadership from './components/Leadership'
import Invest from './components/Invest'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Principles />
        <Quote />
        <Leadership />
        <Invest />
        <Contact />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
