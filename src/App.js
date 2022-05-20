import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import Announcements from './components/views/Announcements/Announcements';
import OurTeam from './components/views/OurTeam/OurTeam';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
