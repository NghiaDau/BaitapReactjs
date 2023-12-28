import './App.css';
import Footer from './layout/Footer';
import Contact from './layout/Contact';
import CallToAction from './layout/CallToAction';
import Portfolio from './layout/Porfolio';
import Services from './layout/Services'
import About from './layout/About';
import Masthead from './layout/Masthead';
import Navigation from './layout/Navigation';
function App() {
  return (
    <div className="App">
        <div>
            {/* Navigation*/}
            <Navigation/>
            {/* Masthead*/}
            <Masthead/>
            {/* About*/}
            <About/>
            {/* Services*/}
            <Services/>
            {/* Portfolio*/}
            <Portfolio/>
            {/* Call to action*/}
            <CallToAction/>
            {/* Contact*/}
            <Contact/>
            {/* Footer*/}
            <Footer/>
        </div>
    </div>
  );
}

export default App;
