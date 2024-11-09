import logo from './logo.svg';
import './App.css';
import MainCarousel from './components/MainCarousel';
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';

function App() {
  return (
    <div className="App">
      <body style={{backgroundColor: "grey"}}>
        <NavbarComponent />
        <MainCarousel />
        <FooterComponent />
      </body>
    </div>
  );
}

export default App;
