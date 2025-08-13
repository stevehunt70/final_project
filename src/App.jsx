import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginRegister from './pages/LoginRegister';
import VideoMain from './pages/VideoMain';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Router>
        <Routes>
          {/* login page without header and footer */}
          <Route path="/" element={<LoginRegister />} />

          {/* Exverything after login uses the layout */}
          <Route path="/videomain" element={
            <Layout>
              <VideoMain />
            </Layout>} />
          <Route path="/videopage/:id" element={
            <Layout>
              <VideoPage />
            </Layout>} />
        </Routes>
    </Router>
  );
}

export default App;
