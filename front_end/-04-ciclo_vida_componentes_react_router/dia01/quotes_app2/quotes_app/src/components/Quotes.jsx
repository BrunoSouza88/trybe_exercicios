import React from "react";

class Quotes extends React.Component {
  render() {

    const { quote, author, favorite, isFavorite } = this.props;

    // console.log(favorite);
    return (
      <div>
        <div className="card">
          <p className="quote"> { quote } </p>
          <p className="author"> { author } </p>
        </div>
        <div>
          <button onClick={() => favorite(quote) }>
           {isFavorite ? 'desfavoritar' : 'favoritar'} </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
