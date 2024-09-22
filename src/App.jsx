import './App.css'
import Navbar from './navbar'
import MealComponent from './body'
import LandingPage from './landing'
import InputSection from './input'
import Footer from './footer'
import Navbar2 from './navbar2'

function App() {

  return (
    <div className='bg-white dark:bg-black'>
        <Navbar/>
        <Navbar2/>
        <LandingPage/>
        <MealComponent/>
        <InputSection/>
        <Footer/>
    </div>
    
  )
}

export default App
