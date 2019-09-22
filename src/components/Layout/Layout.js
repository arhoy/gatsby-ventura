import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import '../../scss/styles.scss';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: '#3fd0d4',
  black: '#222',
};

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
