import React from "react";


function DisplayQuote({ quote }) {
  return (
    <div>
      <br />
      <div>{quote.quote}</div>
      <br />
      <img src={quote.image} alt={quote.character} />
      <div>
        <strong>{quote.character}</strong>
      </div>
    </div>
  );
}

export default DisplayQuote;
