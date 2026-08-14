import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritePage from './pages/FavoritePage';
import { FavoriteProvider } from './context/FavoriteContext';
import { SearchPage } from './components/search/SearchPage'; // Pastikan file SearchPage.jsx memang ada di folder ini!

export function App() {
  return (
    <FavoriteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieId" element={<DetailPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}

export default App;