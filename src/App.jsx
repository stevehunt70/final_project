import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/VideoMain';
import VideoMain from './components/VideoMain';
import VideoPage from './components/VideoPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/video" element={<VideoMain />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
