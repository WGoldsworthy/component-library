import React, { useState } from 'react';
import './index.css'

const CardMenuCarousel = () => {

	const [selected, setSelected] = useState("2");
	const [opening, setOpening] = useState(false);

	const handleSelect = (e) => {
		if (e.target.dataset.index !== selected) {
			setSelected(e.target.dataset.index);
		} else {
			// Change page
			setOpening(true);
		}
	}

	return (
		<div>
			<div className={`${opening ? 'openingItem' : ''}`} />
			<div className={`cardMenuCarousel selected${selected}`}>
				<div data-index="1" onClick={handleSelect} class="cardMenuItem"></div>
				<div data-index="2" onClick={handleSelect} class="cardMenuItem"></div>
				<div data-index="3" onClick={handleSelect} class="cardMenuItem"></div>
				<div data-index="4" onClick={handleSelect} class="cardMenuItem"></div>
			</div>
		</div>
	)
}

export default CardMenuCarousel;