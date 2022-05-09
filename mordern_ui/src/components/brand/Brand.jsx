import React from 'react';
import './brand.css';
import {google, slack, atlassian, dropbox, shopify} from '../imports';    


const Brand = () => {
  return (
    <div className='gpt3__brand section__margin' id="whpts">
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='slack'/>
      </div>
      <div>
        <img src={atlassian} alt='atla'/>
      </div>
      <div>
        <img src={dropbox} alt='db'/>
      </div>
      <div>
        <img src={shopify} alt='shoop'/>
      </div>
      <div>
        <img src={google} alt='google'/>
      </div>
      </div>
  )
}

export default Brand