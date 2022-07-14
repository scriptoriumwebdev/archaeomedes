import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import AboutUs from './components/views/AboutUsPage/AboutUsPage';
import News from './components/views/NewsPage/NewsPage';
import Services from './components/views/ServicesPage/ServicesPage';
import ContactPage from './components/views/ContactPage/ContactPage';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div>
      <BrowserRouter>
        <MainLayout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
