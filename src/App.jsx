import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='Header'>
        <Header />
      </div>
      <div className='Summary'>
        <Summary />
      </div>
      <div className='Skills'>
        <Skills />
      </div>
      <div className='Experience'>
        <Experience />
      </div>
      <div className='Projects'>
        <Projects />
      </div>
      <div className='Education'>
        <Education />
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
