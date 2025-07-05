import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NavbarBelt from './components/NavbarBelt/navbarBelt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarBelt />
      <h1>Explore our new arrivals!</h1>
      <h3>Great sales on everything!</h3>
      <h6>Check them out</h6>
    </div>
  );
}

export default App;
