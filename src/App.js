import React, { Component } from 'react';
import "./App.css";

class App extends Component{
  state = {
    addresses: []
  };
addHandler = () => {
  let storedAddresses = [...this.state.addresses];
  storedAddresses.push(storedAddresses);
  this.setState({storedAddresses});
};

render() {
  return (
    <div>
      {this.state.addresses.map((addresses, index) => {
        return <p key={index}>{addresses}</p>;
      })}
      <button onClick={this.addHandler}>Add address</button>
    </div>
  );
}

}

export default App;
