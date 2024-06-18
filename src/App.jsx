import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

const App = () => {
  const[playState,setplayState]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtext="Our Programmes" maintext="What we offer" />
        <Programs />
        <About setplayState={setplayState} />
        <Title subtext="Gallery" maintext="Campus Photos" />
        <Campus />
        <Title subtext="Testimonials" maintext="What students say" />
        <Testimonials />
        <Title subtext="Contact us" maintext="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setplayState={setplayState}/>
    </div>
  )
}
export default App