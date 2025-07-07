// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NavbarBelt from './components/NavbarBelt/navbarBelt';
import AppFooter from './components/appFooter/appFooter';

function App() {
  return (
    <div className="app">
      <Navbar />
      <NavbarBelt />
    
      <div className="main-content">
      <h1>Explore our new arrivals!</h1>
      <h3>Great sales on everything!</h3>
      <h6>Check them out</h6>
      </div>


      <AppFooter />
    </div>
  );
}

export default App;
