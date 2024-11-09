import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Carousel from './pages/Carousel'
import PowerConsumption from './pages/PowerConsumption'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element = {<Landing />} />
          <Route path="appliances" element={<Carousel />} />
          <Route path="features" element={<PowerConsumption />} />
      </Routes>
    </BrowserRouter>
  ); 
}

// export default App;
