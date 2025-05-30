import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rings from './pages/Rings';
import Braceletts from './pages/Braceletts';
import Earrings from './pages/Earrings';
import Necklaces from './pages/Necklaces';
import Brooches from './pages/Brooches';
import AllFine from './pages/AllFine';
import TryOn from './pages/TryOn';
import EngageRings from './pages/EngageRings';
import WeddingRings from './pages/WeddingRings';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Braceletts />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/brooches" element={<Brooches />} />
          {/* <Route path="/all-fine-jewelry" element={<AllFine />} /> */}
          <Route path="/try-on" element={<TryOn />} />
          <Route path="/engagement-rings" element={<EngageRings/>} />
          <Route path="/wedding-rings" element={<WeddingRings/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
