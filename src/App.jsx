import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Impor default (TANPA kurung kurawal {})
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;