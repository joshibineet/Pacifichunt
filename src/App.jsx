import './App.css'
import { Footer, Home, Jobs, Navbar,Companies,About_us} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 

  return (

    < BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Jobs' element={<Jobs/>}></Route>
        <Route path='/Companies' element={<Companies/>}></Route>
        <Route path='/About_us' element={<About_us/>}></Route>
      
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App
