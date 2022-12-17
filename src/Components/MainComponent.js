import React from 'react';
import { Outlet } from 'react-router';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const MainComponent = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  );
};

export default MainComponent;