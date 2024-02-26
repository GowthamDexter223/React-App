import './App.css'
import { Product } from './components/Product/Product'
import About from './components/About/About'
import Home from './components/Home/Home'
import { Counter } from './components/Counter/Counter'
import { Nav } from './components/Nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Form } from './components/Product/Form'
import Table from './components/Product/Table'
import CartContext from './components/ContextAPI/Context/CartContext'
import { Products } from './components/ContextAPI/pages/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product" element={<Product />} />
          <Route path="/form" element={<Form />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/cartcontext" element={<CartContext />}></Route>
          <Route path="/newproduct" element={<CartContext><Products /></CartContext>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
