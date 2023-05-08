import React from "react";

class Component extends React.Component {

  state = {
    email: '',
    saveEmail: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      email: value,
    })
  }

  handleChange = (value) => {
    this.setState({
      email: value,
    })
  }

  handleText = (value) => {
    this.setState({
      saveEmail: value,
      email: '',
    })

  };

  render() {

    const { email, saveEmail } = this.state;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label
            htmlFor="emailId">E-mail</label>
          <input
            type="email"
            placeholder="digite seu email"
            id="emailId"
            value={email}
            onChange={(event) => this.handleChange(event.target.value)}
          />
          <button
            data-testid="id-send"
            type="button"
            value="Enviar"
            onClick={() => this.handleText(email)}
          >Enviar
          </button>
          <button type="button" value="Voltar"> Voltar </button>
          <div>
            <span data-testid="olokobicho">E-mail é: {saveEmail}</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Component;
