import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About'
import Products from './components/products/Products';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Products/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
