import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Carousel from './pages/Carousel'
import PowerConsumption from './pages/PowerConsumption'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="appliances" element={<Carousel />} />
          <Route path="features" element={<PowerConsumption />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

// export default App;
