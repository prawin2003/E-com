  import { useState } from 'react'
  import './App.css'
  import Navbar from './Components/MyNavbar'
  import {BrowserRouter as Router,Routes,Route} from '../node_modules/react-router-dom'
  import Home from './Components/Home'
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
  function App() {
  const [count, setCount] = useState(0);
  return (  
    <Router>
      <Navbar />        
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App
