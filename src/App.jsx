import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import LoginRegister from "./pages/LoginRegister";
import VideoMain from "./pages/VideoMain";
import VideoPage from "./pages/VideoPage";
import VideoUpload from "./pages/VideoUpload";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        {/* login page without header and footer */}
        <Route path="/" element={<LoginRegister />} />

        {/* Everything after login uses the layout */}
        <Route
          path="/videomain"
          element={
            <Layout>
              <VideoMain />
            </Layout>
          }
        />
        <Route
          path="/videopage/:id"
          element={
            <Layout>
              <VideoPage />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <SearchResults />
            </Layout>
          }
        />
        <Route
          path="/upload"
          element={
            <Layout>
              <VideoUpload />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
