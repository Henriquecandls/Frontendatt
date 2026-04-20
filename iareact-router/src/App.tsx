import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
    <nav>
        <a href="/"><h1>Home</h1></a>
        <a href="/about"><h2>About</h2></a>
        <a href="/contact"><h3>Contact</h3></a>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home description="Welcome to home page!" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

