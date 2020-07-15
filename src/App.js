import React from "react";
import "./App.css";
import axios from "axios";
import DisplayQuote from "./components/DisplayQuote";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        quote:
          "I believe the children are the future... Unless we stop them now!",
        character: "Homer Simpson",
        image:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        characterDirection: "Right",
      },
      loading: false,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    this.setState({ loading: true }, () => {
      // Send the request
      axios
        .get("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then((res) => res.data)
        .then((data) => {
          this.setState({
            quote: data[0],
            loading: false,
          });
        });
    });
  }

  render() {
    let loading = this.state.loading;
    return (
      <div className="App">
        <h1>Simpsons quote</h1>
        <button type="button" onClick={this.getQuote}>
          Get a new quote
        </button>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <DisplayQuote quote={this.state.quote} />
        )}
      </div>
    );
  }
}

export default App;
