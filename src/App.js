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
        <div className="all">ALL</div>
        <div className="home">Home</div>
        <div className="bestsellers">Bestsellers</div>
        <div className="reels">Reels</div>
        <div className="todays-deal">Today's Deals</div>
        <div className="customer-services">Customer Services</div>
        <div className="new-releases">New Releases</div>
        <div className="fresh">Fresh</div>
        
      </div>


      <AppFooter />
    </div>
  );
}

export default App;
