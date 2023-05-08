import React from "react";



class Fixar extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    handleClick2 = handleClick2(this);
  }

  handleClick = () => console.log('Clicado');
  handleClick2 = () => console.log('Clicado2');

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={handleClick2}>Meu botão 2</button>
      </div>
    )
  }
}

export default Fixar;
