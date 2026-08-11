import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritePage from './pages/FavoritePage';
import { FavoriteProvider } from './context/FavoriteContext';

export function App() {
  return (
    <FavoriteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<DetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}

export default App;