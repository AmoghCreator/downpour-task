import logo from './logo.svg';
import './App.css';
import FormDiv from './FormDiv.jsx';
import Navbar from './Navabar';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FormDiv/>
      <Services />
    </div>
  );
}

export default App;
