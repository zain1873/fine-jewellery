import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Parent = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Parent;
