import Footer from "./components/Footer"
import NavBar from "./components/NavBar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Review from "./pages/Review";

function App() {

  return (
    <main>

      <NavBar numberCart={2}/>
      <div className="pt-16">

        <BrowserRouter>
          <Routes>
            
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/order-review" element={<Review/>}/>
          </Routes>
        </BrowserRouter>
      </div>

      <div className="w-full p-10">
        <Footer/>
      </div>
    </main>
  )
}

export default App
