import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App'; // Đảm bảo đường dẫn đúng
import AboutPage from '../pages/AboutPage';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
