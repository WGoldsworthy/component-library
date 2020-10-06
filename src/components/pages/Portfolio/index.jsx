import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import ReactLogoAnimation from './components/animations/ReactLogo';
import MainHeader from './components/molecules/MainHeader';
import MenuButton from './components/organisms/MenuButton';
import AreaTag from './components/organisms/AreaTag';
import RedBackText from './components/atoms/RedBackText';
import CardCarousel from './components/organisms/CardCarousel';
import ScrollDownIcon from './components/animations/ScrollDownIcon';
import ScreenAreaWrapper from './components/organisms/ScreenAreaWrapper';
import CardMenuCarousel from './components/organisms/CardMenuCarousel';
import './App.css';


function App() {
  return (
    <div className="App">
    	<ScreenAreaWrapper>
    		<div className="whitespace__warning">
    			Don't be afraid of all this whitespace
    		</div>
    		<MenuButton />
    		<MainHeader/>
    		<AreaTag />
    		<ScrollDownIcon />
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
    		<Col xs={4} className="offset-sm-1 pr-4">
            <span className="section__work-info">
    			I have worked for a range of companies and clients during my time in the software industry. 
                Some big, some small and some just me!
            </span>
    		</Col>
    		<Col>
    			<CardCarousel />
    		</Col>
    	</Row>
        <Row>
            <CardMenuCarousel />
        </Row>
    </div>
  );
}

export default App;