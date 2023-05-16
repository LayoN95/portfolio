import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
