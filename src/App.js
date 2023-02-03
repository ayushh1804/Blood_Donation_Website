import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Activities from './components/Activities';
import Book from './components/Book';
import Gallery from './components/Gallery';
import Contact from "./components/Contact"
import Footer from './components/Footer';
import './App.css';

function App() {
  return (<>
   <Navbar />
   <Landing/>
   <Activities />
   <Book />
   <Gallery />
   <Contact />
   <Footer/>
  </>);
}

export default App;
