import React, {Component} from 'react';
import './App.css';
class App extends Component{
state = {
//Create an array to store the numbers which have been entered into the input.
inputNumbers: [],
currentFigure:""
};
// function to handle the logging to address book.
handleLog = event =>{
if (event.key === "Enter") {
this.submit();
}
};
// Function to handle input of numbers in the input box.
handleInput = (event) =>{
this.setState({
currentFigure:event.target.value});
};
// Function to handle pushing the entered number into the list array
submit = (event) => {
event.preventDefault()
// let loggedNums = [...this.state.inputNumbers];
if (this.state.currentFigure === ""){
return alert (`You haven't entered a number bozo`);
}else{
this.setState({
inputNumbers: [...this.state.inputNumbers, this.state.currentFigure]
})}
};
// Function to remove a logged number from array.
remove = (index) => {
let loggedNums = [...this.state.inputNumbers];
loggedNums.splice(index, 1)
this.setState({inputNumbers: loggedNums})
};
// What will render to the page
render(){
return(
<div className="address">
<h1>Contacts List</h1>
<div className="address-book">
<input type="text"
onChange={this.handleInput}
value={this.state.currentFigure}
placeholder="Enter telephone number"
></input>
<p>{this.state.currentFigure}</p>
<button onClick={this.submit}>Enter</button>
</div>
<div className="contact-list">
{
this.state.inputNumbers.map((number, index) => {
return <p>{number}</p>
})
}
</div>
</div>
);
}
}
// onClick={() => this.remove(index)}
export default App;