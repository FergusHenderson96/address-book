import React from "react";
import "./App.css";
import AddressEntry from './address';

class App extends React.Component {
  constructor(){
    super();

     this.state = {
    address: ""
  
  }
render() {
  
  return (
      <div>
          <div className="addressBody">
              <h1>Address Book</h1>
              <AddressEntry address={this.state.address}/>
          </div>
      </div>
  );
}
  

export default App;
