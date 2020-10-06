import React from 'react';
import KairosLogo from '../../atoms/KairosLogo';
import ClipText from '../../molecules/ClipText';
import './index.scss';

const Home = ({isMenuOpen}) => {
	return (
		<div className="home-page">
		    <KairosLogo size='50px' className={`main-logo ${isMenuOpen ? 'logo-menu-open' : ''}`}/>
		    <div className="home-page-content">
		    	<div className="home-page-header">
		    	<ClipText type="original" value="INSPIRING, CREATING AND PIONEERING EVERY DAY"/>
		    		<h4>INSPIRING, CREATING AND PIONEERING EVERY DAY</h4>
		    		<div className="pill">Sweet Fish</div>
		    	</div>
		    	<div className="home-page-header-description">
		    		<h2>
			    		Kairos Media is an award-winning creative Influencer Marketing agency. 
			    		We create innovative, impactful, creative-led campaigns to deliver an unrivalled ROI for our clients.
		    		</h2>
		    	</div>
		    	<div className="home-page-banner">
		    		<div className="home-page-banner-description">Brand awareness for Daniel Wellington</div>
		    		<div className="home-page-banner-readmore">Read more</div>
		    	</div>
		    	<div className="home-page-case-study">
		    		<div className="home-page-case-study-header">
		    			<h2>Award-winning agency</h2>
		    		</div>
		    		<div className="home-page-case-study-description">
		    			We are an award-winning team, with accolades including The Drum Network Awards, 
		    			The Drum Social Buzz Awards and UK Agency Awards. Most notably, we won Gold for 
		    			“Best Campaign ROI” at the 2019 Influencer Marketing Awards, which is a testament 
		    			to our results focused approach.
		    		</div>
		    	</div>
		    	<div className="home-page-case-study-left">
		    		<div className="home-page-case-study-image"><div className="img"/></div>
		    		<div className="home-page-case-study-info">
			    		<div className="home-page-case-study-header">
			    			<h2>
								Targeting a younger audience for Williams F1
							</h2>
			    		</div>
			    		<div className="home-page-case-study-description">
			    			Searching to appeal to younger viewers and add further value to their sponsors, Williams Martini 
			    			Racing approached Kairos Media for ideas on how to amplify their content socially.
			    		</div>
		    		</div>
		    	</div>
		    	<div className="home-page-case-study-right">
		    		<div className="home-page-case-study-info">
			    		<div className="home-page-case-study-header">
			    			<h2>
								Esports strategy for amazon appstore events
							</h2>
			    		</div>
			    		<div className="home-page-case-study-description">
			    			Kairos Media were tasked to drive viewers and maximise overall awareness for the 'Mobile Masters', 
			    			Las Vegas and 'Champions of Fire', New York events on behalf of Wargaming Mobile and Amazon Appstore.
			    		</div>
		    		</div>
		    		<div className="home-page-case-study-image"><div className="img"/></div>

		    	</div>
		    </div>
		</div>
	)
};

export default Home;