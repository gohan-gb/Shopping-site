import { Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import CreateProduct from './pages/CreateProduct';


function App() {
  return (
    <div>
      
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/CreateProduct' element = {<CreateProduct/>}/>
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
