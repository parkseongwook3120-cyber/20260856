import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import RouteSearch from './pages/RouteSearch';
import Social from './pages/Social';
import SavedRoutes from './pages/SavedRoutes';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      {/* Mobile-first layout container */}
      <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative pb-20 overflow-x-hidden shadow-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<RouteSearch />} />
          <Route path="/social" element={<Social />} />
          <Route path="/saved" element={<SavedRoutes />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
