
import './App.css'
import Navbar from './Components/MyNavbar'
import { BrowserRouter as Router, Routes, Route } from '../node_modules/react-router-dom'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Products from './Components/Products'
import AddProduct from './Components/AddProduct'
import UpdateProduct from './Components/UpdateProduct'
import Cart from './Components/Cart'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { initializer } from './Store/productSlice'

function App() {
  //const products = useSelector(state=>state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then(response => {
        if(response.data) {
          dispatch(initializer(response.data));
        }
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={< AboutMe />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/update-product' element={<UpdateProduct />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
