import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Carousel from './pages/Carousel'
import PowerConsumption from './pages/PowerConsumption'
import FooterComponent from './components/Footer'
import NavbarComponent from './components/NavbarComponent';

export default function App() {
  return (
    <BrowserRouter basename='/Comp-Sience'>
      <NavbarComponent />
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="appliances" element={<Carousel />} />
          <Route path="features" element={<PowerConsumption />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

// export default App;
