import React from 'react';
import './App.css';

import {Features, Header, Footer, Possibility, WhatGP3, Blog} from './containers'
import { Brand, CTA, Navbar} from './components';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGP3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App