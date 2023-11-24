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
    images: "https://img.freepik.com/free-photo/3d-render-little-boy-with-camera-isolated-white-background_1142-32341.jpg?t=st=1700812489~exp=1700816089~hmac=0d5d78d9d5d14d0d9715c57713ebf37a8b649ceb87d9ec93b28b850734e148ab&w=1060",
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
