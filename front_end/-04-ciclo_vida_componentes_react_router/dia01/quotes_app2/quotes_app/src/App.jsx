import './App.css';
import React from 'react';
import Quotes from './components/Quotes';

class App extends React.Component {

  state = {
    quote: '',
    author: '',
    favoriteQuotes: [],
    newFavorite: false,
  }

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

  fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    this.setState({
      quote: data.content,
      author: data.author,
    })

  }

  addFavoriteQuote = (content) => {
    const { favoriteQuotes } = this.state;
    
    this.setState({
      favoriteQuotes: [...favoriteQuotes, content],
      newFavorite: true,
    })
  }

  componentDidMount = () => {
    this.fetchQuote();
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

    const { author, quote,favoriteQuotes } = this.state;

    // const content = {
    //   quote: quote || 'Carregando...',
    //   author: author || '-',
    // }
    // console.log(author);

    return (
      <div className="App">
        <div className='main-quote'>
          <Quotes
            quote={ quote || 'Carregando...'}
            author={ author || '-'}
            isFavorite={ false }
            favorite={ this.addFavoriteQuote }
          />
        </div>
        <div>
          <button
            onClick={ this.fetchQuote }
            >
              Trocar Frase
          </button>
          { <div>
            { favoriteQuotes.map((favorite, index) => (
              <Quotes
                key={ index }
                quote={ favorite }
                favorite={ this.addFavoriteQuote }
                isFavorite={ true }
              />
            )) }
          </div> }
        </div>
      </div>
    );
  }
}

export default App;
