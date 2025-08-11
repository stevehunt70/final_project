import React from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <SearchBar />
      <div style={styles.content}>
        {children} {/* This is where VideoMain or any page content goes */}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default Layout;
