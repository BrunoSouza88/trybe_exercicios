import './App.css';
import React from 'react';

const ComponentPai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <ComponentPai>
        <p>Supimpa</p>
        <h1>Opa</h1>
        <span>globz</span>
      </ComponentPai>
    </div>
  );
}}

export default App;
