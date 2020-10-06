import React, {useState} from 'react';
import './index.css';

const MenuButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="menuButton">
			<div className="menuButton__outer">
				<div className="menuButton__top-line"></div>
				<div className="menuButton__mid-line"></div>
				<div className="menuButton__bottom-line"></div>
			</div>
		</div>
	);
}

export default MenuButton;
