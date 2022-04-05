import React from 'react'

import {Features, Header, Footer, Possibility, WhatGP3, Blog} from './containers'
import { Brand, CTA, Navbar} from './components';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
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