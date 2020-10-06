import React, { useState } from 'react';
import ByrdMenu from '../../organisms/ByrdMenu';
import Home from '../Home';

function KairosDemo() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
        <div className="page-content">
          <Home isMenuOpen={isMenuOpen} />
        </div>
        <ByrdMenu links={[
            {
                label: 'Who we are'
            },
            {
                label: 'Approach'
            },
            {
                label: 'Our Work'
            }
        ]}
        isMenuOpen={setIsMenuOpen}
        />
    </div>
  )
};

export default KairosDemo;
