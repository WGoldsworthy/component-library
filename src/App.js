import React, { useState } from 'react';
import './App.css';
import ByrdMenu from './components/organisms/ByrdMenu';
import Home from './components/pages/Home';

function App() {

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
  );
}

export default App;
