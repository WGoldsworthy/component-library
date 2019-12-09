import React, {useState} from 'react';
import './index.css'

const CardCarousel = ({cards}) => {

  return (
    <div className="cardCarousel">
      <div className="card">
        <div className="title">AND Digital</div>
        <div className="card__info">
          My current place of residence! Working on project based work for clients 
          such as Conde Nast, Arsenal Football Club and Shawbrook Bank.
        </div>
      </div>
      <div className="card">
        <div className="title">Thomson Reuters</div>
          <div className="card__info">
            Developing an innovation project for their flagship market trading platform, Eikon, 
            where I also got to demo to clients such as HSBC, Nomura and BNP Paribas.
          </div>
      </div>
      <div className="card">
        <div className="title">Firmstep</div>
      </div>
      <div className="card">
        <div className="title">Freelance</div>
      </div>
    </div>
  )
}

export default CardCarousel;
