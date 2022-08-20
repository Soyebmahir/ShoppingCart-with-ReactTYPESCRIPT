import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import { ShoppingCartProvider } from "./contest/ShoppingCartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"


function App() {


  return (
    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Container>
    
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
