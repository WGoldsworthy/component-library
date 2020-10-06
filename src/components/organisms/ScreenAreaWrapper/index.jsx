import React from 'react'
import SlideUpLoad from '../../animations/SlideUpLoad'
import './index.css'

const ScreenAreaWrapper = ({children}) => {
	
	return (
		<div className="screenAreaWrapper">
			{children}
		</div>
	)
}

export default ScreenAreaWrapper;