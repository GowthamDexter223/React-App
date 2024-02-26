import './App.css'
import { Nav } from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Product } from './components/Product'
import { Products } from './components/Products'
import { Cart } from './components/Cart'

function App() {  

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
