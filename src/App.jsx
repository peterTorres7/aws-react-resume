import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
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
      <div className='Certifications'>
        <Certifications />
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
