import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import {ThemeProvider} from './context/Themes/ThemeContext';



const images = [
  "/img/imagen0.jpg",
  "/img/imagen1.jpg",
  "/img/imagen2.jpg",
  "/img/imagen3.jpg",
  "/img/imagen4.jpg",
];

const App  = () => {
  return (

    <ThemeProvider>
    <Navbar />
    <Homepage />
    <About />
    <Services />
    <Carrusel images={images}/>
    <Contact />
    <Footer />
    </ThemeProvider>
  );
}

export default App;
