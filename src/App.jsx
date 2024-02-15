import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Programs />
      <Blog />
      <Contact />
      <Footer/>

    </>
  );
}

export default App;
