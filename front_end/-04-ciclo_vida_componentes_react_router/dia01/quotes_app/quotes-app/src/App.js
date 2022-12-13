import React from "react";
import Quotes from "./components/Quotes";
import './App.css'

class App extends React.Component {

  state = {
    quotes: '',
    author: '',
    favoriteQuotes: [],
    newFavorite: false,
  }
  

  // Using async/await
  fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random')
    const getAPI = await response.json();

    this.setState({
      quote: getAPI.content,
      author: getAPI.author,
    })
  }

  addFavoriteQuote = (content) => {
    const { favoriteQuotes } = this.state;

    this.setState({
      favoriteQuotes: [...favoriteQuotes, content],
      newFavorite: true,
    })
  }

  // Using .then
  // fetchQuote = () => {
  //   fetch('https://api.quotable.io/random')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       quote: data.content,
  //       author: data.author,
  //     })  
  //   })
  // }

  componentDidMount = () => {
    this.fetchQuote()
  }

  componentDidUpdate = () => {
    const { newFavorite } = this.state;

    if (newFavorite) {
      this.setState({
        newFavorite: false,
      }, this.fetchQuote)
    }
  }

  render() {

    const { quote, author, favoriteQuotes } = this.state
    const content = {
      quote: quote || 'carregando...',
      author: author || '-',
    }

    return (
      <div className="App">
        <div className="main-quuote">
          <Quotes
            quote={ content }
            isFavorite={ false }
            favorite={ this.addFavoriteQuote }
          />
          <button
            onClick={ this.fetchQuote }>Trocar frase</button>
        </div>
        <div className="favorite-quotes">
          { favoriteQuotes.map((favorite, index) => (
            <Quotes
            key={ index }
            quote={ favorite }
            fevorite={ this.addFavoriteQuote }
            isFavorite={ true }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
