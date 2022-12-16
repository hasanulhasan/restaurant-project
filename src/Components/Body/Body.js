import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Menu from './Menu';
import Contact from './Menu';

const Body = () => {
  return (
    <div>
      <Menu></Menu>
      {/* <Route path='/' exact component={Home}></Route>
      <Route path='/menu' exact component={Menu}></Route>
      <Route path='/contact' exact component={Contact}></Route>
      <Route path='/about' exact component={About}></Route>
      <Redirect from='/' to='/home'></Redirect> */}
    </div>
  );
};

export default Body;