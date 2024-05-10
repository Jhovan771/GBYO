import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className='min-h-screen p-0 m-0 bg-gray-100 overflow-x-hidden overflow-y-hidden relative'>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
