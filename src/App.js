import React from 'react';
import FieldInput from './components/FieldInput/FieldInput'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="centered">
        <FieldInput 
          type="text"
          placeholder="First Name"
          validation_message="Please enter a valid name"
        ></FieldInput>
      </div>
    </div>
  );
}

export default App;
