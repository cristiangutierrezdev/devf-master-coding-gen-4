import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NavbarView(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}

export default NavbarView;
