import React from 'react';

function handleClicle() {
  console.log('clicked');
}

const handleClicle2 = () => console.log('clickBait');

const handleClicle3 = () => console.log('Já clicou!!');

class HelloWordl extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClicle}>Meu botão</button>
        <button onClick={handleClicle2}>Meu botão2</button>
        <button onClick={handleClicle3}>Outro botão</button>
      </div>
    );
  }
}

export default HelloWordl;
