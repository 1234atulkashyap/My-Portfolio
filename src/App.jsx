
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
