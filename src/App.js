import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    inputText: "",
    formDetails: [],
  };
  handleInput = (event) => {
    // getting the value of the input and assigning to the state
    this.setState({ inputText: event.target.value });
  };
  handleSubmit = (event) => {
    // stop default form behaviour which is to reload the page.
    // dont want that with react spa!!!!
    event.preventDefault();
    this.setState({
      formDetails: [...this.state.formDetails, this.state.inputText],
      inputText: "",
    });
  };
  render() {
    return (
      <div className="calculator-wrapper">
          {/* Encouraged but not required you can do it all with inputs */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            // by making the state value the SINGLE SOURCE TRUTH we know exactly what the value will be always
            value={this.state.inputText}
            onChange={this.handleInput}
          />
        </form>
        <h1>{this.state.inputText}</h1>
      </div>
    );
  }
}

export default App;
