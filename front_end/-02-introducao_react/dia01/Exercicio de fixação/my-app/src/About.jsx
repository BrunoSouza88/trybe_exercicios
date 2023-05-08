import React from "react";

class About extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h1>Bruno Souza</h1>
          <p>Pequena descrição sobre mim</p>
        </section>

        <section>
          <h2>Minhas Habilidades</h2>
          <ul>
            <li>Habilidade 1</li>
            <li>Habilidade 2</li>
            <li>Habilidade 3</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default About;