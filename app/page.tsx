import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Principles from './components/Principles'
import Portfolio from './components/Portfolio'
import Quote from './components/Quote'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Principles />
        <Portfolio />
        <Quote />
        <Leadership />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
