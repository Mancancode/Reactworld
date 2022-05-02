import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content"> 
      <h1 className='gradient__text'>
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>Yet bed any for travelers, are coming from every coner of the world to expirience 
        the amazing things happning in the world cup. No fever than 4 million person has 
        already arrive so far we continure counting</p>
      <div className='gpt3__header-content__input'>
        <input type='email' placeholder='Your email address '/>
        <button type='button'>Get Started</button>
      </div>

      <div className='gpt3__header-content__people'>
        <img src={people} alt='peopleimg'/>
        <p>1,600 people requested access to visit in the last 24hrs</p>
      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt="Ai img"/>
      </div>
      </div>
      </div>
  )
}

export default Header 