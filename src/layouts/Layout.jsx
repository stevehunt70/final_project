import React from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout ({ children }) {
  return (
    <div style={styles.container}>
      <Header/>
      <main style={styles.content}> {children} </main>
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
