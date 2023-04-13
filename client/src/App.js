import logo from './logo.svg';
import './App.css';
import FormDiv from './FormDiv.jsx';
import Navbar from './Navabar';
import Services from './Services';
import Footer from './Footer.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormDiv/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;
