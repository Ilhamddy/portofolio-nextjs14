import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'
import About from './components/about'
import Skill from './components/skill'
import Contact from './components/contact'


export const metadata = {
  title: "Ilhamddy || Portofolio Website",
  description: "Ilhamddy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, Ilhamdody has developed an aptitude for learning new technologies and incorporating them into innovative solutions.",
  openGraph: {
    title: "Ilhamddy || Portofolio Website",
    description: "Ilhamddy is a dedicated student who is currently enrolled in a full-stack web development course at Purwhadhika. With a strong foundation in computer science, Ilhamdody has developed an aptitude for learning new technologies and incorporating them into innovative solutions.",
    images: "https://images.unsplash.com/photo-1700451761281-fa705b64935d?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
}



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
