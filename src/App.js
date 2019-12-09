import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import ReactLogoAnimation from './components/animations/ReactLogo'
import MainHeader from './components/molecules/MainHeader';
import MenuButton from './components/organisms/MenuButton';
import AreaTag from './components/organisms/AreaTag';
import RedBackText from './components/atoms/RedBackText';
import CardCarousel from './components/CardCarousel';
import ScreenAreaWrapper from './components/organisms/ScreenAreaWrapper'
import './App.css';


function App() {

  return (
    <div className="App">
    	<ScreenAreaWrapper>
    		<MenuButton />
    		<MainHeader/>
    		<AreaTag />
    	</ScreenAreaWrapper>
    	<Row className="section__about">
    		<Col xs={6}>
    			<ReactLogoAnimation />
    		</Col>
    		<Col xs={5} className="section__about__info">
    			My name is Will. I am a <RedBackText>software developer</RedBackText> currently working
    			in London. I mostly work on <RedBackText>front end React code</RedBackText> but also get involved 
    			with plenty of <RedBackText>node.js and python</RedBackText> too when I can!
    		</Col>
    	</Row>
    	<Row className="section__work">
    		<Col xs={5}>
    			I have worked for a range of companies and clients during my time in the software industry.
    		</Col>
    		<Col>
    			<CardCarousel />
    		</Col>
    	</Row>
    </div>
  );
}

export default App;
