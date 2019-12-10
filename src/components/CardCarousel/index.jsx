import React, {useState} from 'react';
import { Col, Row } from 'reactstrap';
import RedBackText from '../atoms/RedBackText';
import AndChair from '../../assets/AndChair.jpg';
import './index.css'

const CardCarousel = ({cards}) => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="cardCarousel">
        <div onClick={openModal} className="card">
          <div className="title">AND Digital</div>
          <div className="card__info">
            My current place of residence! Working on project based work for clients 
            such as Conde Nast, Arsenal Football Club and Shawbrook Bank.
          </div>
        </div>
        <div className="card">
          <div className="title">Thomson Reuters</div>
            <div className="card__info">
              Developed an innovation project for their flagship market trading platform, Eikon, 
              where I also got to demo to clients such as HSBC, Nomura and BNP Paribas.
            </div>
        </div>
        <div className="card">
          <div className="title">Firmstep</div>
            <div className="card__info">
              Worked on the web platform for local councils back office systems. Also was responsible
              for setting up new developers environments and onboarding.
            </div>
        </div>
        <div className="card">
          <div className="title">Freelance</div>
            <div className="card__info">
              When I have a little bit of time I like to get involved in various freelance projects. Some CMS build websites
              for clients as well as some more bespoke web animation pieces.
            </div>
        </div>
      </div>
      <div className="fullScreenCard">
        <div className={`FSCard ${isOpen ? 'cardOpen' : null}`}>
          <div onClick={openModal} className="close">CLOSE</div>
          <div className={`FSContent ${isOpen ? 'contentOpen' : null}`}>
            <Col xs={5}>
              <div className="modalImage">
                <img src={AndChair} />
              </div>
            </Col>
            <Col>
              <RedBackText>And Digital</RedBackText>
            </Col>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCarousel;
