import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Impor default
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritePage from './pages/FavoritePage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
        {/* Tambahkan Rute FavoritePage */}
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </Router>
  );
}

export default App;