import React from "react";
import Swal from 'sweetalert2'

class Quotes extends React.Component {
  componentWillUnmount = () => {
    const { quote } = this.props;
    Swal.fire(quote.quote, quote.author, 'question')
  }
  render() {

    const { quote, isFavorite, favorite } = this.props;

    return (
      <div className="card">
        <p className="quote">{ quote.quote }</p>
        <p className="author">{ quote.author }</p>
        <button onClick={ () => favorite(quote) }>
        { isFavorite ? "Desfavoritar" : "Favoritar"}
        </button>
      </div>
    );
  };

}

export default Quotes;
