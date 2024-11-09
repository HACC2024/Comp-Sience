import './App.css';
<<<<<<< Updated upstream
import MainCarousel from './components/MainCarousel';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Landing from './pages/Landing';
import Carousel from './pages/Carousel'
import PowerConsumption from './pages/PowerConsumption'
>>>>>>> Stashed changes

export default function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <body style={{backgroundColor: "grey"}}>
        <MainCarousel />
      </body>
    </div>
  );
=======
    <BrowserRouter>
      <Routes>
          <Route index element={<Landing />} />
          <Route path="home" element = {<Landing />} />
          <Route path="appliances" element={<Carousel />} />
          <Route path="features" element={<PowerConsumption />} />
      </Routes>
    </BrowserRouter>
  ); 

>>>>>>> Stashed changes
}

// export default App;
