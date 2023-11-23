import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'
import About from './components/about'
import Skill from './components/skill'
import Contact from './components/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}
