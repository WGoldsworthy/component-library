import React from 'react';
import FieldInput from './components/FieldInput/FieldInput'
import FormBuilder from './components/FormBuilder/FormBuilder'
import './App.css';

import ClipText from './components/ClipText/ClipText'


function App() {

  return (
    <div className="App">
      <div className="">
        <ClipText type="fire" value="AWESOME" gif="url(https://media.giphy.com/media/3o6Ztb45EYezY9x9gQ/giphy.gif)" />
      </div>
    </div>
  );
}

export default App;
